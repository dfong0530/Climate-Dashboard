# Climate Dashboard

https://user-images.githubusercontent.com/68403991/170187370-b212f324-9834-4ff9-91e6-a95d934abad5.mov

### Link: https://temp-dashboard.netlify.app

### About

We are currently in the Anthropocene extinction period. The world has been detrimentally affected due to our behavior. If there isn't rapid change, there could be irreversable consequences. I created this dashboard to display up to date data on temperatures as well as methane emmisions within the United States.

This dashboard to display multiple statistics (methane, carbon-monoxide, temperature, ozone, nitrogendioxide).

The data is filtered by year, action, states, and month.

### Understanding the Data

Temperature: Celsius
Methane: parts per million (mass/per unit volume)
Ozone: dobson units
Nitrogen Dioxide: ppb (micrograms per cubic meter)
Carbon Monoxide: ppm

Area Chart - Displays average values of the action (methane, temperature...) based on selected per year.

Table - Displays raw data of the Area Chart.

Map - Displays individual data points of the selected action in a given date (month and year)

---

A single table cell represents the average of the all the data points in a single state in the map.

The data was retrieved from multiple climate API's. I then pulled the data from the API's
and cached the results in local txt files --> /src/Data/db (used for area and table)
and /src/Data/MapDB (used for map).

### Disclaimer

All the data was pulled from external API's. However, some of the data appears to be inaccurate. My goal of this project was to demonstrate my skills in React. Because of that I didn't look super in depth in the accuracy of the data.

**There is no data displayed for some of the dates and actions in the Map View Tab**

### Technologies

Front end- React.js

Fonts and Table- Material UI

Area- Chart js

Map - Deck Gl and mapbox

API's:

https://www.worldweatheronline.com/developer/my/

https://emissions-api.org/examples/highscore

### Setup

- download or clone the repository
- run npm install
- run npm start
