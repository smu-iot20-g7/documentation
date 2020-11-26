(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{348:function(t,e,a){t.exports=a.p+"assets/img/architectureForRfidFSR.2d471794.png"},349:function(t,e,a){t.exports=a.p+"assets/img/tray-out.93fc08bc.gif"},350:function(t,e,a){t.exports=a.p+"assets/img/tray-in.cdd91536.gif"},351:function(t,e,a){t.exports=a.p+"assets/img/mongomac.cb417b6b.gif"},352:function(t,e,a){t.exports=a.p+"assets/img/data-trayin.bd97419e.png"},353:function(t,e,a){t.exports=a.p+"assets/img/trayinout-groundtruth.2a9ec467.png"},354:function(t,e,a){t.exports=a.p+"assets/img/MSEaccuracy.94b670d0.png"},355:function(t,e,a){t.exports=a.p+"assets/img/tray-ttest.c7943518.png"},356:function(t,e,a){t.exports=a.p+"assets/img/tray-dashboard.8c24e485.gif"},357:function(t,e,a){t.exports=a.p+"assets/img/tray-dashboard2.4d083ac9.gif"},406:function(t,e,a){"use strict";a.r(e);var r=a(42),o=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"detecting-tray-in-out-with-fsr-rfid-motion-sensors"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#detecting-tray-in-out-with-fsr-rfid-motion-sensors"}},[t._v("#")]),t._v(" Detecting Tray In/Out with FSR, RFID & Motion Sensors")]),t._v(" "),r("h2",{attrs:{id:"architecture-diagram"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#architecture-diagram"}},[t._v("#")]),t._v(" Architecture Diagram")]),t._v(" "),r("p",[r("img",{attrs:{src:a(348),alt:"diagram"}})]),t._v(" "),r("h2",{attrs:{id:"overview"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),r("p",[t._v("Our solution is designed to be placed on respective hawker stalls and cleaner's trolley to track the number of trays that is being taken out from the stall and the number of tray cleared by the cleaners. The main objective of this solution is to make it portable and obstruction-free so it will not hinder hawkers' operations. We will be monitoring negative tray return rate by looking at number of tray return to the trolley, with this data we can do some manipulation and we are able to calculate the postive tray return rate.")]),t._v(" "),r("h3",{attrs:{id:"tray-out"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tray-out"}},[t._v("#")]),t._v(" Tray Out")]),t._v(" "),r("p",[t._v("To detect the tray out from the hawker stalls, we used the "),r("b",[t._v("Round Force Sensor")]),t._v(" and "),r("b",[t._v("RFID Sensor")]),t._v(" together with our RaspberryPi. We have strategically placed our sensors on a board which can detect when a tray is placed on it and when a tray is removed from it.")]),t._v(" "),r("p",[t._v("Thus, when a tray is removed from the board, the program in the RaspberryPi will add a tray-out count into the database.")]),t._v(" "),r("h3",{attrs:{id:"tray-in"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tray-in"}},[t._v("#")]),t._v(" Tray In")]),t._v(" "),r("p",[t._v("At the hawker, we observed that there are two common ways which trays are being returned; the first being the patron returning to the tray return point and the second being the cleaners returning the trays to the cleaners' trolley.")]),t._v(" "),r("p",[t._v("To count the number of tray return from the patrons, we take the number of tray out from the above method and deduct it by the number of trays returned by the cleaners. The number of trays returned by the cleaners into the trolley is counted by using the "),r("b",[t._v("Round Force Sensor")]),t._v(" and "),r("b",[t._v("Motion Sensor")]),t._v(" together with the RaspberryPi.")]),t._v(" "),r("p",[t._v("With strategic placement of our sensors on the trolley, we are able to detect when the cleaners place a tray onto the trolley which will trigger our program in the RaspberryPi to add a tray-in count into our database.")]),t._v(" "),r("h2",{attrs:{id:"sensor-modalities"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sensor-modalities"}},[t._v("#")]),t._v(" Sensor Modalities")]),t._v(" "),r("h3",{attrs:{id:"how-it-works-tray-out"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#how-it-works-tray-out"}},[t._v("#")]),t._v(" How it works - Tray Out")]),t._v(" "),r("p",[t._v("To collect the tray-out data, our aim is to provide a "),r("b",[t._v("hassle-free")]),t._v(" and "),r("b",[t._v("obstruction-free set up")]),t._v(" for the hawker while collecting accurate data.")]),t._v(" "),r("p",[t._v("To do so, we used velcros to place our RaspberryPi and sensor board so that it is easy for the hawker to tear down and set up every day. As our solution, will be placed in extreme condition such as heat from boiling water or even possible water spillage. Our team waterproof the entire board using delt and ziplock bag to waterproof the RaspberryPi with just a gap to slot in the power source. On the sensor board, we have the round force sensor and RFID sensor which detects when a tray is placed together and when there is weight placed on the tray.")]),t._v(" "),r("p",[t._v("Once the tray is removed from the sensor board, our program will add a tray-out count into the database.")]),t._v(" "),r("h4",{attrs:{id:"summarise-flow"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#summarise-flow"}},[t._v("#")]),t._v(" Summarise Flow:")]),t._v(" "),r("ol",[r("li",[t._v("Tray being placed on the board - Force detected (Value change from 0 to 1)")]),t._v(" "),r("li",[t._v("Food being placed on the tray the weight will push the tray down - RFID Detected (Value change from 0 to 1)")]),t._v(" "),r("li",[t._v("Data will be added into the database once the tray is being removed (FSR and RFID value will be reset to 0)")])]),t._v(" "),r("h3",{attrs:{id:"sensors-we-use"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sensors-we-use"}},[t._v("#")]),t._v(" Sensors we use")]),t._v(" "),r("ul",[r("li",[t._v("Round Force Sensor (FSR)")]),t._v(" "),r("li",[t._v("RFID Sensor")])]),t._v(" "),r("h4",{attrs:{id:"view-our-tray-in-setup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#view-our-tray-in-setup"}},[t._v("#")]),t._v(" View Our "),r("a",{attrs:{href:"https://www.youtube.com/watch?v=Xc8Itq1mNtk&feature=youtu.be",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tray in Setup"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("Here is a short clip on how we setup our tray in method.")]),t._v(" "),r("p",[r("img",{attrs:{src:a(349),alt:"Data"}})]),t._v(" "),r("h3",{attrs:{id:"how-it-works-tray-in"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#how-it-works-tray-in"}},[t._v("#")]),t._v(" How it works - Tray In")]),t._v(" "),r("p",[t._v("We placed our sensor board in the middle rack of the trolley as we observed that most of the used trays taken from the hawker table by the cleaner were being placed in the middle rack.")]),t._v(" "),r("p",[t._v("On the sensor board, we have our round force sensor to detect when there is tray placed on the board. This allows us to track the first tray-in count on the trolley and add the relevant count into the database. For subsequent tray-in counts, we used the motion sensor which is placed directly above the board to detect the motion when more trays are placed into the trolley. Upon detection of tray placed into the trolley, we add a tray-in count into the database.")]),t._v(" "),r("p",[t._v("The round force sensor also help to track when the cleaner remove the stack of trays collected from the trolley back to the stall, when we detect motion and there is no force detected we will take it as a trays had been removed from the trolley.")]),t._v(" "),r("p",[t._v("Lastly, as the trolley must be mobile and cannot be connected to a power source at all times, we used a portable charger to power the RaspberryPi which was attached to our sensor board.")]),t._v(" "),r("h4",{attrs:{id:"summarise-flow-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#summarise-flow-2"}},[t._v("#")]),t._v(" Summarise Flow:")]),t._v(" "),r("ol",[r("li",[t._v("When a tray is being placed on the trolley - Force detected (Value change from 0 to 1) - Motion detected (Value change from 0 to 1)")]),t._v(" "),r("li",[t._v("Data will then be added to the database")]),t._v(" "),r("li",[t._v("Once tray is being removed from the trolley - Motion detected (Value change from 0 to 1) - Force not detected (Value change from 1 to 0)")]),t._v(" "),r("li",[t._v("Add a minus 1 count to the database")])]),t._v(" "),r("h3",{attrs:{id:"sensors-we-use-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sensors-we-use-2"}},[t._v("#")]),t._v(" Sensors we use")]),t._v(" "),r("ul",[r("li",[t._v("Round Force Sensor (FSR)")]),t._v(" "),r("li",[t._v("Motion Sensor\n"),r("img",{attrs:{src:a(350),alt:"Data"}})])]),t._v(" "),r("h2",{attrs:{id:"data-insights-and-accuracy"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#data-insights-and-accuracy"}},[t._v("#")]),t._v(" Data, Insights and Accuracy")]),t._v(" "),r("h3",{attrs:{id:"data"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#data"}},[t._v("#")]),t._v(" Data")]),t._v(" "),r("p",[r("img",{attrs:{src:a(351),alt:"Data"}}),t._v("\nThe IoT devices used for our Tray In and Tray Out solution connects to the Raspberry Pis which are used as gateway nodes to send data to our "),r("a",{attrs:{href:"https://www.mongodb.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MongoDB"),r("OutboundLink")],1),t._v(" database. The data sent uses "),r("a",{attrs:{href:"https://mqtt.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MQTT"),r("OutboundLink")],1),t._v(" to update our database.")]),t._v(" "),r("p",[t._v("Data collected from the Tray In and Tray Out solution includes:")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("Timestamps")])]),t._v(" "),r("li",[r("strong",[t._v("Tray In Count")])]),t._v(" "),r("li",[r("strong",[t._v("Tray Out Count")])])]),t._v(" "),r("p",[r("img",{attrs:{src:a(352),alt:"Data"}})]),t._v(" "),r("h3",{attrs:{id:"insights"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#insights"}},[t._v("#")]),t._v(" Insights")]),t._v(" "),r("p",[t._v("As this solution was deployed as a proof of concept, we deployed the IoT devices over the span of 6 days (27 Oct 2020 to 02 Nov 2020). With the data collected, we are able to deduce the tray return rate and gain useful insights on patrons behavior.")]),t._v(" "),r("h4",{attrs:{id:"analysis"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#analysis"}},[t._v("#")]),t._v(" Analysis")]),t._v(" "),r("p",[t._v("Tray-in count spike during peak hours (12PM to 2PM) shows that the number of people not returning their trays increases. This was consistent across all days of data that we have collected. Additionally, our collaboration with Team 6 supports the insights that positive tray return rates drops during peak hours, which can be fairly used to backed our insights as both stalls similar with regards to target demographic and food sold.")]),t._v(" "),r("h4",{attrs:{id:"reasons"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#reasons"}},[t._v("#")]),t._v(" Reasons")]),t._v(" "),r("p",[t._v("Possible reasons for the tray return decrease could be due to:")]),t._v(" "),r("ul",[r("li",[t._v("Cleaners being more active in cleaning the tables to allow other patrons to use the table during peak hours")]),t._v(" "),r("li",[t._v("With the peak hour crowd, patrons may find it hard to reach the tray return points to clear their own trays")])]),t._v(" "),r("h3",{attrs:{id:"accuracy"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#accuracy"}},[t._v("#")]),t._v(" Accuracy")]),t._v(" "),r("h4",{attrs:{id:"ground-truth-vs-sensor-data"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ground-truth-vs-sensor-data"}},[t._v("#")]),t._v(" Ground Truth vs Sensor Data")]),t._v(" "),r("p",[r("img",{attrs:{src:a(353),alt:"Data"}})]),t._v(" "),r("p",[t._v("To identify the accuracy of the data collected, our team collected and compared the ground truth data against data collected from the IoT devices. With reference to the above figure, we used the percent error formula to calculate the accuracy of our data. The data accuracy for "),r("strong",[t._v("Tray-Out")]),t._v(" is at "),r("strong",[t._v("85%")]),t._v(", while the data accuracy for "),r("strong",[t._v("Tray-In")]),t._v(" is at "),r("strong",[t._v("46%")]),t._v(".")]),t._v(" "),r("p",[t._v("The reason why Tray-In data is not accurate was because the motion sensor used are too sensitive and there is no configuration for current motion sensor that we are using. Hence, we resort to taping the sides of the sensors to reduce its sensitivity.")]),t._v(" "),r("p",[t._v("To calculate percentage error, we use this "),r("a",{attrs:{href:"https://www.omnicalculator.com/statistics/accuracy#how-to-use-the-accuracy-calculator",target:"_blank",rel:"noopener noreferrer"}},[t._v("formula"),r("OutboundLink")],1),t._v(":")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Percent error")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("(|(Vo - Vₐ)|/Vₐ) * 100")])])])]),t._v(" "),r("h4",{attrs:{id:"data-validation-with-mse"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#data-validation-with-mse"}},[t._v("#")]),t._v(" Data Validation with MSE")]),t._v(" "),r("p",[r("img",{attrs:{src:a(354),alt:"Data"}})]),t._v(" "),r("p",[t._v("Next, we have also compared between the tray return rate collected by us and MSE's data (Jan 2020 to Oct 2020) to find out the accuracy of our data collection using the IoT solutions. We have plotted chart and calculated the average tray return rate for both the dataset. The tray return rate for our IoT dataset and MSE dataset is "),r("strong",[t._v("51%")]),t._v(" and "),r("strong",[t._v("53%")]),t._v(" respectively. This shows that the dataset collected by our IoT solutions are very similar to MSE's data which are collected using manual inspection and reflects well on the accuracy of the data collected by the IoT solutions.")]),t._v(" "),r("h4",{attrs:{id:"stats"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#stats"}},[t._v("#")]),t._v(" Stats")]),t._v(" "),r("p",[t._v("To further validate the data accuracy, we ran a t-test to compare any significant difference between MSE and our dataset.")]),t._v(" "),r("p",[r("img",{attrs:{src:a(355),alt:"Data"}})]),t._v(" "),r("p",[t._v("T-test is an popular statiscal test used to determine if there are any difference with the mean 2 groups of data. From the calculation, we are "),r("strong",[t._v("95%")]),t._v(" confidence that the "),r("strong",[t._v("average self returned tray")]),t._v(" will fall within the range of "),r("strong",[t._v("51%")]),t._v(".")]),t._v(" "),r("h2",{attrs:{id:"visualisations"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#visualisations"}},[t._v("#")]),t._v(" Visualisations")]),t._v(" "),r("h3",{attrs:{id:"dashboard"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dashboard"}},[t._v("#")]),t._v(" Dashboard")]),t._v(" "),r("p",[r("img",{attrs:{src:a(356),alt:"Data"}}),t._v("\nThe dashboard polls the data from the MongoDB database and reflects the data collection into charts for better visualization. The data included in the dashboard includes:")]),t._v(" "),r("ul",[r("li",[t._v("Daily Tray In / Tray Out count")]),t._v(" "),r("li",[t._v("Patrons & Cleaner return count")]),t._v(" "),r("li",[t._v("Patrons self-return rate")]),t._v(" "),r("li",[t._v("Cleaner return rate")])]),t._v(" "),r("p",[r("img",{attrs:{src:a(357),alt:"tray-dashboard3"}}),t._v("\nThe daily tray return count feature allow us to view solely Tray-in or Tray-out count and the hourly data collected for each count respectively. This feature enables us to study tray return rate within each hour and allow the identification and study of patrons behavior.")]),t._v(" "),r("h2",{attrs:{id:"limitations"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#limitations"}},[t._v("#")]),t._v(" Limitations")]),t._v(" "),r("p",[t._v("There are several limitation that are worth mentioning:")]),t._v(" "),r("ul",[r("li",[t._v("Sensitivity of motion sensor")]),t._v(" "),r("li",[t._v("Multiple Tray return to the trolley at once")]),t._v(" "),r("li",[t._v("Cleaner directly return to stall")]),t._v(" "),r("li",[t._v("Limited Hawker center coverage")]),t._v(" "),r("li",[t._v("Limited range of RFID sensor")])]),t._v(" "),r("h3",{attrs:{id:"sensitivity-of-motion-sensor"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sensitivity-of-motion-sensor"}},[t._v("#")]),t._v(" Sensitivity of motion sensor")]),t._v(" "),r("p",[t._v("The motion sensor deployed have a very wide range and could easily detect movement within the surrounding which was not ideal for our solution as we only want to focus on the motion within the trolley, specifically the entry of tray into the trolley. In addition, the movement of the trolley causes the motion sensor to shake and lower the accuracy of the data collected for Tray-in.")]),t._v(" "),r("h3",{attrs:{id:"multiple-tray-return-to-the-trolley-at-once"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#multiple-tray-return-to-the-trolley-at-once"}},[t._v("#")]),t._v(" Multiple Tray return to the trolley at once")]),t._v(" "),r("p",[t._v("As our motion sensor and force sensor are binary sensor, it is only to gather and return information of a state (either 0 or 1). Hence, the sensors, in our Tray-In solution, are not able to differentiate between the quantity of the trays entry.")]),t._v(" "),r("h3",{attrs:{id:"cleaner-directly-return-to-stall"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cleaner-directly-return-to-stall"}},[t._v("#")]),t._v(" Cleaner directly return to stall")]),t._v(" "),r("p",[t._v("For convinience sake, cleaners may choose to return trays directly back to the store. Hence, the Tray-In data could be lesser than the actual count.")]),t._v(" "),r("h3",{attrs:{id:"limited-hawker-center-coverage"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#limited-hawker-center-coverage"}},[t._v("#")]),t._v(" Limited Hawker center coverage")]),t._v(" "),r("p",[t._v("As the solution is just a proof-of-concept, we only have the budget to install our solution on 1 of the few trolleys in the hawker center. Hence, data collected will only reflects a sector of the hawker center. However, to make best use of our current limitation, we chose the trolley situated closest to our hawker stall based on our observation of where most of the patrons will likely to be seated at, after purchasing their food, so we could maximize our coverage of the hawker center.")]),t._v(" "),r("h3",{attrs:{id:"limited-range-of-rfid-sensor"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#limited-range-of-rfid-sensor"}},[t._v("#")]),t._v(" Limited range of RFID sensor")]),t._v(" "),r("p",[t._v("The RFID sensor only had a detection range of 5-7CM, which are only detectable near contact. Hence, tray has to be placed in a precise position for the RFID sensor to detect. To overcome this solution, our team have pasted 2 RFID stickers on both side of the tray to ensure that the RFID sensor is able to detect the tray accurately. RFID range will also be affected with any metal product nearby, for our solution we overcome this by putting a styrofoam board between the sensors and the metal cabinet to reduce the impact on our RFID reader.")]),t._v(" "),r("h2",{attrs:{id:"key-benefits-of-our-solution"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#key-benefits-of-our-solution"}},[t._v("#")]),t._v(" Key Benefits Of Our Solution")]),t._v(" "),r("p",[t._v("The key benefits includes:")]),t._v(" "),r("ul",[r("li",[t._v("Automating data collection process")]),t._v(" "),r("li",[t._v("Identifying patrons behavior during specific periods of time")])]),t._v(" "),r("h3",{attrs:{id:"automating-data-collection-process"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#automating-data-collection-process"}},[t._v("#")]),t._v(" Automating data collection process")]),t._v(" "),r("p",[t._v("With the IoT solution deployed, we could automate the manual data collection process of tray return and could provide reliable counting without possible human errors as our IoT solution has shown high accuracy of the data collected.")]),t._v(" "),r("h3",{attrs:{id:"identifying-patrons-behavior-during-specific-periods-of-time"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#identifying-patrons-behavior-during-specific-periods-of-time"}},[t._v("#")]),t._v(" Identifying patrons behavior during specific periods of time")]),t._v(" "),r("p",[t._v("The dashboard feature allow us to view tray return rate for specific periods of time. From the data analysed, we could see that patrons are less likely to return trays during peak hours. With such a useful insight, we could pin point the reason behind such behavior and works towards creating campaign and solution targeted at the specific timing or patrons.")]),t._v(" "),r("h2",{attrs:{id:"main-video"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#main-video"}},[t._v("#")]),t._v(" Main Video")]),t._v(" "),r("h3",{attrs:{id:"to-see-how-our-solution-works-at-the-hawker"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#to-see-how-our-solution-works-at-the-hawker"}},[t._v("#")]),t._v(" To see how our solution works at the hawker:")]),t._v(" "),r("h4",{attrs:{id:"view-our-pitch-video"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#view-our-pitch-video"}},[t._v("#")]),t._v(" View Our "),r("a",{attrs:{href:"https://www.youtube.com/watch?v=TglGIDq8pWQ",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pitch Video"),r("OutboundLink")],1)]),t._v(" "),r("h4",{attrs:{id:"view-our-group-video"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#view-our-group-video"}},[t._v("#")]),t._v(" View Our "),r("a",{attrs:{href:"https://www.youtube.com/watch?v=JRFURIfBGSg",target:"_blank",rel:"noopener noreferrer"}},[t._v("Group video"),r("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=o.exports}}]);