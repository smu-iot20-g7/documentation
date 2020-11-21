# Tablevision: Tray Returns Monitoring with AI

## Architecture Diagram
![diagram](../assets/tablevision.png)

## Overview

::: tip NOTE
The term "tray returns" is our umbrella term that refer to hawker centre trays or crockeries (i.e. bowls, cutleries, plates) returned to the Tray Return Point.
:::

Our solution incorporates an 8-megapixel camera sensor, connected to a sensor gateway. In our case, the gateway is our Raspberry Pi. It is designed to be able to automate the detection of self-initiated tray returns – or the reverse of tray returns by cleaners, through a custom machine learning model training.

Through Tablevision, we will be monitoring:

* **Negative tray return rates**: a measure of tray returns by the cleaners – hence the term "negative" which indicates negative behaviour by patrons for not clearing trays, and;
* **Positive tray return rates**: a measure of tray self-returns by patrons – the term "positive" indicates the positive behaviour of patrons clearing up after eating

## Training our Machine Learning Model

Initially, we used the [Clarif.ai API](https://www.clarifai.com/) for its object detection API. However, the free version is only available for 1,000 API calls, which was insufficient for our use case. Furthermore, we needed a pay-as-you-go (PAYG) model that enables us to have a fine-grained billing for our object detection, and Clarif.ai's pricing model only indicates prices per block of API calls.

[Google Cloud Vision AI](https://cloud.google.com/vision) comes in as our next reliable alternative. It enables us to derive and detect objects from the image captured with our camera modules, and it comes with a pay-as-you-go model. 

We decided to give it a try.

And that's when we realised that Google had generously given us free $300 credits for model training and image detection, on top of the $300 credit already given as a promotion to use any of Google Cloud's services. Such a great way to let us students experiment with Cloud technologies.

To train our model, we used a series of images that we captured from our installed camera module atop some tables, such as the picture below:

![Image of tables atop Beo Crescent Hawker Centre](../assets/s11.jpg)

This allows us to easily tag images and detect objects based on our classification labels of what:

* a "Human/Person" is
* "Crockeries" on the table, and;
* "Trays" on the table

Below is a quick animation of how we trained our Cloud Vision AI model:

![Training of objects](../assets/training.gif)

## Initialising Tablevision

In order to accurately detect our table boundaries and ID-tag it accordingly (i.e. Table 46, Table 47, etc...), we needed a way to provide coordinates for our algorithm to detect whether a particular table is occupied, or has uncleared trays.

For this, we leveraged on the `matplotlib` Python library to provide the X-y coordinates of our boundaries. We used the `widgets.RectangleSelector` function to provide us with the 4-point coordinates of the rectangle of our boundary.

![initialiser](../assets/initialiser.gif)

## Sensor modalities

### Defining session states

| State | Crocker(ies) | People | Meaning |
|---|----------|--------| --------|
| 0 | ❌        | ❌      | Vacant |
| 1 | ✅        | ❌      | Vacant but uncleared table |
| 2 | ✅        | ✅      | Occupied |

We used the table states to detect each session and the activities. In summary, we could simply differentiate the behaviour by:

* **Positive tray-returns**, or self-returns
    - Table state **0 -> 2 -> 0**
* **Negative tray-returns**, or cleaner-cleared trays
    - Table state **0 -> 2 -> 1 -> 0**

### Processing the logic

The `tablevision_processer.py` script, or what we call, _The Processor_, is essentially an API endpoint that aims to decouple the heavy processing logic away from the low-compute power of the Raspberry Pi, which was deployed together with our camera module at Beo Crescent.

The _Processor_ was deployed on the Cloud using a basic Compute instance (in our case, AWS EC2). In this _instance_ (pun intended), it might be an overkill to use an entire EC2, or opted for something like Firebase instead. However, we just wanted something quick and familiar while we worry about getting the right data and insights.

The _Processor_ acts as a Cloud API endpoint to receive our images from the Raspberry Pi. It then sends an API request to our Google Vision AI deployed model. Once the results are returned, we will process the results with our Table State Session logic that we will discuss in depth below.

Essentially, in a sweet summary, our _Processer_ API endpoint does the following:

1. Receives image from our Raspberry Pi deployed on-site
2. Sends the image to Google Cloud Vision AI API
3. Receives object prediction results from Vision AI API
4. Loop through our defined tables
5. Is the object within a table's boundaries?
    - If the coordinates are within a table's boundaries, update the state of the particular table
    - If no, don't do anything

::: warning Managing limitations in automated data collection
There are some measures put in place to prevent "unclean" data and limitations to the solution. 

For example, if there are transient people (such as a cleaner entering the table frame to clear crockeries and trays), it might be detected as **Occupied**. So for this, we created a **minimum session timing of 3 minutes**, or 180 seconds.
:::

## Data, insights and accuracy

## Limitations

## Key Benefits

## Costs

### Hardware

| Product | Price (SGD) |
|---------|-------|
| Sony IMX219 Raspberry Pi 8MP Camera Module | **$ 42** |
| Raspberry Pi 3b+ (Provided by the SMU-X Faculty) | **$ ~50<sup>?</sup>** |

Honestly, any camera that's greater than 2MP will do, which includes ordinary web cameras connected through the USB port of the Raspberry Pi.

### Software + AI

::: warning P.S.
We couldn't have executed this without worry if it weren't for the surprising promotional credits for AutoML Vision API.
:::

Our fixed cost was used to train the machine learning model on AutoML Vision API. We spent a total of **6.87 hours** to train **51 images** with the 3 labels for **US$ 29.73**.

As per November 2020, [Google Cloud Vision API](https://cloud.google.com/vision/automl/pricing#image_classification_deployment_and_prediction_costs)'s Pricing page states:

> The cost for AutoML Vision Image Classification model training is **$3.15 per node hour**.
>
> For each unit of time, we use 8 nodes in parallel, where each node is equivalent to a n1-standard-8 machine with an attached NVIDIA® Tesla® V100 GPU.

> The cost for deployment and prediction is **$1.25 per node hour**. One node is usually sufficient for most experimental traffic.

The main disadvantage of using the AutoML Vision AI is that the compute instances used to deploy our models doesn't automatically scale down or up when needed. This will result in underutilised model deployments and is not cost effective at all.

If we were to deploy for 14 hours with one node (our current configuration for the proof-of-concept) – the length of Beo Crescent Market Food Centre's operating hours, that will cost **US$ 17.50** per operational day.

| Product | Price (SGD) | Units |
|---------|-------|-------|
| AutoML Model Training | **$ 42** | One-time
| Prediction request deployment | **$ 17.50** | per day