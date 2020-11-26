# Tablevision Code Documentation

This code documentation will walk you through the main processing logic, which is our **Processer** component. Please see the [component breakdown](../tablevision/#tablevision-device-environments) for more information on the Tablevision components.

The **Processer** component is deployed on the Cloud on an AWS EC2 instance.

## Tablevision Processer

### Table object

`Table` objects have the following parameters:

```py
class Table:
    table_id = None
    session_id = None
    session_start = None
    session_end = None
    states = None
    coords = []
```

`coords` refer to the coordinates provided by the `tablevision_initialiser`. For example:

```py
[[0.03948170731707307, 0.09692911255411243], [0.4337906504065041, 0.09692911255411243], [0.03948170731707307, 0.4648944805194804], [0.4337906504065041, 0.4648944805194804]]
```

Four coordinates that refer to the 4 points of the square when initialising Tablevision in the GUI.

------

In `Table` objects, there are the following callable functions:

**`start_session(state)`** Starts a new patron session.

**`end_session()`** Ends the current running patron session.

**`reset_session()`**
Resets a session. Called after `end_session()`.

**`update_db(session_status="")`**
Updates our MongoDB database.

**`did_change_state(new_state)`** Tracks whether the `new_state` variable is different from the current state. If it is, change state. If not, `new_state` is ignored.

**`is_valid_session()`** If the session has ended, track whether it is a "valid" session i.e. greater than 3 mins. If not, invalidate the session.

**`within_coordinates(x, y)`** Track if an object predicted is within the coordinates of the `Table`

### 1. Initialising tables

In `app.py`, we refer to the following API endpoint to initialise tables, `initialise()`:

```py
# initialise once pi has started
TABLES = {}

@app.route('/initialise', methods=['POST'])
def initialise():
    # to be able to access the TABLES variable and add objects in

    data = request.get_json()
    tables_json = json.loads(data['tables_json'])

    try:
        for table_number in tables_json:
            table_object = tables_json[table_number]
            table_number = int(table_number)
            TABLES[table_number] = Table(table_number, table_object)
        
        return jsonify({"type": "success", "message": "Tables successfully set up"}), 200
    except Exception as e:
        traceback.print_exc()
        return jsonify({"type": "error", "message": "unexpected error has occured", "debug": str(e)}), 500
```

### 2. Process image frame

We used the `process()` function to receive the images from our node (Rasperry Pi) and call the Google AutoML Vision API to receive results of objects predicted within the frame:

```py
@app.route('/process', methods=['POST'])
def process():
    try:
        data = request.get_json()
        image64 = data['image64']

        # decode the image back to image
        image_data =  base64.b64decode(image64)
        filename = '/home/ubuntu/images/' + time.strftime("%Y%m%d-%H%M%S") + '.jpg'
        with open(filename, 'wb') as f:
            f.write(image_data) # save it to test.jpg

        with open('/home/ubuntu/processer/static/image.jpg', 'wb') as f:
            f.write(image_data) # save it to for rendering to image
        
        ########## Call the Google AutoML API ##########

        image = automl.Image(image_bytes=image_data)

        predictions = makeGoogleRequest(image)
        
        ########## Ended calling the Google AutoML API ##########

        # process the objects and update if got people or crockeries
        location_of_objects = processPrediction(predictions)

        # update table state liao
        updateTable(location_of_objects)

        return jsonify({"type": "success"}), 200
    except Exception as e:
        return jsonify({"type": "error", "debug": str(e)}), 500
```

### 3. Process prediction results

To process our prediction results returned by the Google AutoML Vision object detection API, we used the `processPrediction(predictions)` function:

```py
def processPrediction(predictions):
    location_of_objects = {
        "people": [], 
        "crockeries": []
    }

    for prediction in predictions:
        formatted_object = resultFormatter(prediction)

        # boolean and table number
        item_within_table, table_number = itemWithinTable(formatted_object)

        # basically means if there is object within the table, then i shall update
        # either people or crockeries
        if item_within_table:
            if hasPeople(formatted_object):
                if table_number not in location_of_objects["people"]:
                    # means this prediction predicted succesfully a people within that table
                    location_of_objects["people"].append(table_number)

            if hasCrockeries(formatted_object):
                if table_number not in location_of_objects["crockeries"]:
                    location_of_objects["crockeries"].append(table_number)

    return location_of_objects
```

### 4. Update table state

Next, using the data of people and/or crockeries in each table, we will update the table status respectively:

```py
def updateTable(location_of_objects):

    global TABLES

    for table_number in TABLES:
        if table_number in location_of_objects["people"]:
            # state 2: has people
            TABLES[table_number].did_change_state(2)
            # TABLES[table_number].print_states()
        elif table_number in location_of_objects["crockeries"] and table_number not in location_of_objects["people"]:
            # state 1: has crockeries, no people
            TABLES[table_number].did_change_state(1)
            # TABLES[table_number].print_states()
        else:
            # state 0: nothing
            TABLES[table_number].did_change_state(0)
            # TABLES[table_number].print_states()
```

## Summary

::: tip README
Check out our [Github Repository](https://github.com/smu-iot20-g7/tablevision) to see our source codes.
:::

**Steps 2-4** will be in a constant loop to update table state changes so long as the Raspberry Pi node continues to send the data.