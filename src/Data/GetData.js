import axios from 'axios';
import { MakeTableData } from './GetChartData';
import { ParseTableData } from './ParseData';
import { MakeAreaData } from './GetChartData';
import { ParseAreaData } from './ParseData';


export const UpdateAreaData = async (year, action, states) => {
    const file = require(`./db/${year}-table.txt`);

    const res = await axios.get(file);
    const data = await res.data;

    return MakeAreaData(ParseAreaData(data, action, states));
}


//Updates the Table. Fetches the data from db folder and calls MakeTableData which takes in the 
//data and returns the configuration object for the table.
export const UpdateTableData = async (year, action, states) => {

    const file = require(`./db/${year}-table.txt`);

    const res = await axios.get(file);
    const data = await res.data;

    return MakeTableData(ParseTableData(data, action), states);

}
//This function Gets the Data for the map and returns the data that will be passed into the configurations
//for the map.
export const GetMapData = async (year, month, action, states) => {

    let tempAction = action === "carbon-monoxide" ? "carbonmonoxide" : action;

    let file = require(`./MapDB/${year}/${tempAction}/${year}-${month}-${states[0]}-${tempAction}.txt`);
    
    let data;
    let res = await axios.get(file);
    let configObj = await res.data;

    for(let i = 1; i < states.length; i++){
        file = require(`./MapDB/${year}/${tempAction}/${year}-${month}-${states[i]}-${tempAction}.txt`);
        res = await axios.get(file);

        data = await res.data;

        configObj["features"] = configObj["features"].concat(data["features"]);
    }

    return configObj;
}

