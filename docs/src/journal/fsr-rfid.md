# Round Force Sensor + RFID Tray Tagging

## Architecture Diagram
![diagram](../assets/architectureForRfidFSR.png)

## Overview
### Tray Out
To detect the tray out from the hawker stalls, we used the Round Force Sensor and RFID Sensor together with our RaspberryPi. We have strategically placed our sensors on a board so that when trays are placed on it and both sensors detect that there is a tray placed, the program in the RaspberryPi will add a tray-out count into our database.

### Tray In
At the hawker, we observed that there are two common ways which trays are being returned; the first being the patron returning to the tray return point and the second being the cleaners returning the trays to the cleaners' trolley. To count the number of tray return from the patrons, we take the number of tray out from the above method and deduct it by the number of trays returned by the cleaners. The number of trays returned by the cleaners into the trolley is collected by using the Round Force Sensor and Motion Sensor together with the RaspberryPi. With strategic placement of our sensors on the trolley, we are able to detect when the cleaners place a tray onto the trolley which will trigger our program in the RaspberryPi to add a tray-in count into our database.

## Sensor Modalities
### Tray Out
* Round Force Sensor (FSR)
* RFID Sensor

### Tray In
* Round Force Sensor (FSR)
* Motion Sensor

## Data, Insights and Accuracy
### Data
### Insights
### Accuracy

## Visualisations
### Dashboard

## Limitations

## Key Benefits Of Our Solution

## Main Video
### To see how our solution works at the hawker: 
#### View Our [Pitch Video](https://www.youtube.com/watch?v=TglGIDq8pWQ) 
#### View Our [Group video](https://www.youtube.com/watch?v=JRFURIfBGSg) 
