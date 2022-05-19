import { API_KEY } from './secret';
import axios from 'axios';
import { MakeLineData, MakeDonutData } from './GetChartData';
import { ParseTempData, ParseMethaneData } from './ParseData';



//Gets the average temperature for each month in the US fr a given year.
export const UpdateTemperatureData = async (year) => {
    
    // const base_url = "https://api.worldweatheronline.com/premium/v1/past-weather.ashx?";

    // let temperatures = [];

    // for(let i = 1; i < 13; i++){

    //     let response = await axios.get(base_url + `format=json&q=United+States&date=${year}-${i}-01&key=${API_KEY}`);
    //     let data = await response.data;

    //     temperatures.push(parseInt(data.data.weather[0]["avgtempF"]));
        
    // }
    
    const file = require(`./db/${year}-table.txt`);

    const res = await axios.get(file);
    const data = await res.data;

    return MakeLineData(ParseTempData(data)); //Callback functiont to get the right configruations for the line graph.
}


//Gets the average methane releases for 5 major cities in the US for a given year.
//New York City, Los Angeles, Chicago, Miami, Dalla

export const UpdateMethaneData = async (year) => {

    // let base_url = "https://api.v2.emissions-api.org/api/v2/methane/geo.json";

    // var donutData = [];
    // let coordinates = ["-74, 40.71", "-118.24, 34.05", "-87.63, 41.88", "-80.19, 25.76", "-96.8, 32.78"];


    // for(let i = 0; i < coordinates.length; i++){

    //     let response = await axios.get(base_url, {

    //         params: {
    //             interval: "year",
    //             begin: `${year}-01-01`,
    //             point: coordinates[i],
    //             limit: 1
    //         }

    //     });

    //     let data = await response.data;
    //     donutData.push(parseInt(data["features"][0]["properties"].value));
    
    // }

    const file = require(`./db/${year}-table.txt`);

    const res = await axios.get(file);
    const data = await res.data;

    return MakeDonutData(ParseMethaneData(data)); //Callback functiont to get the right configruations for the donut chart.

}


