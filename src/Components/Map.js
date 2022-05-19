import React, { useState, useEffect } from 'react';
import DeckGL from '@deck.gl/react';
import { Map } from 'react-map-gl';
import {HexagonLayer} from '@deck.gl/aggregation-layers';
import { GetMapData } from '../Data/GetData';
import { initialViewState, colorRange } from '../Data/GetChartData';
import "../CSS/Map.css";


//Function used to display the data of the hexagons onHover.
function getTooltip({object}) {
  if (!object) {
    return null;
  }
  const lat = object.geometry.coordinates[1];
  const lng = object.geometry.coordinates[0];
  const count = parseFloat(object.properties.value).toFixed(2);

  return `\
    latitude: ${Number.isFinite(lat) ? lat.toFixed(6) : ''}
    longitude: ${Number.isFinite(lng) ? lng.toFixed(6) : ''}
    count: ${count}`;
}


function MapChart({ year, action, states }) {

  //dataObj - MapConfig && month-Filters the data by month
  const [dataObj, setDataObj] = useState({"container": []});
  const [month, setMonth] = useState("05");


  useEffect(() => {

    const update = async() => {
      const res = await GetMapData(year, month, action, states);
      setDataObj(res);
    }

    //Only update the map if the year isn't 2018 and the action isn't temperature.
    //The API did not expose an endpoint to retrive this information.
    year !== 2018 && action !== "temperature" && update();

  }, [year, month, action, states])

  /*
    Sets the configurations for the hexagon layer on top of the map.

    dataObj = {
      "features": [
        {
          "geometry": {
            "coordinates": [
              -158.917485,
              64.41806
            ],
            "type": "Point"
          },
          "properties": {
            "timestamp": "2019-05-01T00:38:41.752000Z",
            "value": 0.0315665081143379
          },
          "type": "Feature"
        },
        ....
  */

  const layers = [
    new HexagonLayer({
        extruded: true,
        colorRange,
        radius: 27000,
        data: dataObj,
        dataTransform: d => d.features, //Where should the class start looking for the data
        elevationScale: 300,
        //This function gets an elevation by taking the average of all the values and comparing it to the max height.
        getElevationValue: points => points.reduce((sum, point) => sum + point.properties.value, 0) / points.length,
        getPosition: d => d.geometry.coordinates
    })
];

  return (
    <>
      <div className="map-wrapper">
        <DeckGL //Deck Gl provides hexagon layer that will be displayed on top of the base map.
          controller={true}
          initialViewState={initialViewState}
          layers={layers}
          getTooltip={getTooltip}
        >
          <Map className="map"   //This is the map from react-map-gl. This will be the base map.  
            initialViewState={{
            longitude: -122.4,
            latitude: 37.8,
            zoom: 14
          }}
          mapStyle="mapbox://styles/mapbox/streets-v11" //Paste in browser and click on first link to view different react-map-gl styles
          mapboxAccessToken={"pk.eyJ1IjoiZGZvbmcwNTMwIiwiYSI6ImNsMnphNGRjcjA0eWQzY2xlc2syNXkwNjEifQ.RLxd0ABfkjdM_XEyGKgRUg"} />
        </DeckGL>
      </div>
    </>
  )
}



export default MapChart;