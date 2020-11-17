# Round Force Sensor + RFID Tray Tagging

## Architecture Diagram

## Overview
### Tray Out
### Tray In

## Sensor Modalities
### Tray Out
### Tray In

## Data, Insights and Accuracy
### Data
![Data](../assets/mongomac.gif)
The IoT devices used for our Tray In and Tray Out solution connects to the Raspberry Pis which are used as gateway nodes to send data to our [MongoDB](https://www.mongodb.com/) database. The data sent uses [MQTT](https://mqtt.org/) to update our database.

Data collected from the Tray In and Tray Out solution includes:
- **Timestamps**
- **Tray In Count**
- **Tray Out Count**

![Data](../assets/data-trayin.png)
### Insights
We have deployed the IoT devices over the span of 6 days (27-October-2020 to 02-November-2020). With the data collected, we are able to deduce the tray return rate and gain useful insights on patrons behavior.
#### Analysis 1
Tray-in count spike during peak hours (12PM to 2PM) shows that the number of people not returning their trays increases. This was consistent across all days of data that we have collected. Additionally, our collaboration with Team 6 supports the insights that positive tray return rates drops during peak hours, which can be fairly used to backed our insights as both stalls similar with regards to target demographic and food sold.
##### Reasons
Possible reasons for the tray return decrease could be due to:
- Cleaners being more active in cleaning the tables to allow other patrons to use the table during peak hours
- With the peak hour crowd, patrons may find it hard to reach the tray return points to clear their own trays

### Accuracy
#### Ground Truth vs Sensor Data
![Data](../assets/trayinout-groundtruth.png)

To identify the accuracy of the data collected, our team collected and compared the ground truth data against data collected from the IoT devices. With reference to the above figure, we used the percent error formula to calculate the accuracy of our data. The data accuracy for **Tray-Out** is at **85%**, while the data accuracy for **Tray-In** is at **45%**.

## Visualisations
### Dashboard

## Limitations

## Key Benefits Of Our Solution

## Main Video
### To see how our solution works at the hawker: 
#### View Our [Pitch Video](https://www.youtube.com/watch?v=TglGIDq8pWQ) 
#### View Our [Group video](https://www.youtube.com/watch?v=JRFURIfBGSg) 
