import React, { useState, useEffect } from 'react';
import { Line } from "react-chartjs-2";
import { UpdateAreaData } from '../Data/GetData';
import { MakeAreaData, AreaOptions } from '../Data/GetChartData';
import "../CSS/Area.css";


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

const Area = ({ year, action, states }) => {

    const [areaConfig, setAreaConfig] = useState(MakeAreaData([[], [], [], [], []]));

    useEffect(() => {

        const update = async() => {
            const res = await UpdateAreaData(year, action, states);
            setAreaConfig(res);
        }

        update();
        
    }, [year, action, states])


  return (
    <div className="area-chart">
      <Line id="canvas" data={areaConfig} options={AreaOptions}/>
    </div>
  );
};

export default Area;
