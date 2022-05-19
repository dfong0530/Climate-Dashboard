import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

import { Line } from "react-chartjs-2";
import { LineOptions, initialLineData } from '../Data/GetChartData';
import { UpdateTemperatureData } from '../Data/GetData';
import "../CSS/LineGraph.css"

//Registering components for use in the line chart.
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);


const LineGraph = ({ year }) => {
    
    /*
        Data updated when the state varaible year changes.
    */

    ///Configurations for the data attribute in the Line compoenent
    const [data, setData] = useState(initialLineData);

    useEffect(() => {

        const update = async () => {

            const newData = await UpdateTemperatureData(year);
            setData(newData);

        }  

        update();

    }, [year]);

    return (
        <>
            <p className="line-title">National Temperatures</p>
            <Line data={data} options={LineOptions} width={"775%"}/>
        </>
    );
}

export default LineGraph;