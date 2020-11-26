# Tray in/out Code Documentation

This code documentation will walk you through the main processing logic on how we retrieve the data from our sensors

## Tray Out

```py

MIFAREReader = MFRC522.MFRC522()

GPIO.setup(7, GPIO.IN, pull_up_down=GPIO.PUD_DOWN)

db = MongoClient("mongodb+srv://root:0NqePorN2WDm7xYc@cluster0.fvp4p.mongodb.net/iot?retryWrites=true&w=majority")

# Welcome message
print("RFID Detected!")
print("FSR Detected")

# This loop keeps checking for chips. If one is near it will get the UID and authenticate
try:
    process_status = True
    while continue_reading:
        # Scan for cards
        (status,TagType) = MIFAREReader.MFRC522_Request(MIFAREReader.PICC_REQIDL)
        # If a card is found
        rfid_status = 0 # default for rfid
       
        # Get the UID of the card
        (status,uid) = MIFAREReader.MFRC522_Anticoll()
        current_time = datetime.now()
        print("Time is: " + str(current_time))
        fsr_status = GPIO.input(7)
        print("Weight sensor: " + str(fsr_status))

        if status == MIFAREReader.MI_OK and process_status and fsr_status == 1:
            print("RFID and Weight Dected")
            rfid_status = 1 # rfid tag detected
            posts = db.fsr_rfid.collection
            post_data = {
                'timestamp': current_time,
                'rfid_status': rfid_status,
                'fsr_status': fsr_status
            }
            result = posts.insert_one(post_data)
            print("Inserted with ID: " + str(result))
            process_status = False

        if fsr_status == 0:
            print("Tray not detected")
            process_status = True
        time.sleep(2)

except:
    print("Something went wrong")
```

We use `MFRC522` library to get the RFID reader readings, and we retrieve data from the `GPIO input 7 port`. 

We validate the data and determine whether there is a tray detected. 

## Tray In

```py
pir_sensor = 7
motion=0
grovepi.pinMode(pir_sensor,"INPUT")
GPIO.setmode(GPIO.BOARD)

GPIO.setup(7, GPIO.IN, pull_up_down=GPIO.PUD_DOWN)


countTray = False
fsr_bool = False
while True:
	try:
            fsr_status  = GPIO.input(7)
            print("Weight sensor: " + str(fsr_status))
            # Sense motion, usually human, within the target range
            motion=grovepi.digitalRead(pir_sensor)
            if motion==0 or motion==1:	# check if reads were 0 or 1 it can be 255 also because of IO Errors so remove those values
                if motion == 1 and countTray and fsr_status == 0:
                    current_time = datetime.now()
                    tray_in = db.fsr_rfid.tray_in
                    post_data = {
                        'status_count': -1,
                        'timestamp': current_time,
                    }
                    result = tray_in.insert_one(post_data)
                    print("Stack of Trays removed")
                    countTray = False
                if motion==1:
                    if(fsr_status == 1):
                        countTray = True
                    print ('Motion Detected')
                if(motion == 0 and countTray):
                        current_time = datetime.now()
                        tray_in = db.fsr_rfid.tray_in
                        post_data = {
                            'status_count': 1,
                            'timestamp': current_time,
                        }
                        result = tray_in.insert_one(post_data)
                        print("Tray in counted")
                        countTray = False
            time.sleep(2)

	except IOError:
		print ("Error")
    
```

We use `grovepi.pinMode()` to fix the pin value for motion sensor to retrieve all the motion readings

We validate the motion and force data to determine whether there is a tray detected, we check whether it is a tray into the trolley or removal of tray from the trolley so to prevent any double counting. 