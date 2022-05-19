import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { DonutOptions, initialDonutData } from '../Data/GetChartData';
import { UpdateMethaneData } from '../Data/GetData';
import "../CSS/DonutChart.css";

ChartJS.register(ArcElement, Tooltip, Legend);


const DonutChart = ({ year }) => {

    /*
        The graphs take in the state variable year. 
        When year is updated the data will be refreshed.
    */

    //Configurations for the data attribute in the Doughnut compoenent
    const [data, setData] = useState(initialDonutData);

    useEffect(() => {

        const update = async () => {

            const newData = await UpdateMethaneData(year);
            setData(newData);
        }
        
        update();

    }, [year])

    return (
        <>
            <p className="donut-title">Methane Emmission</p>
            <div className="donut-container">
                <Doughnut data={data} options={DonutOptions} />
            </div>
            <div className="donut-label-wrapper">
                <div className="left-label">
                    <div className="label-wrapper"><div className="blue-block"></div><p className="label-text"> - Los Angeles</p></div>
                    <div className="label-wrapper"><div className="green-block"></div><p className="label-text"> - Chicago</p></div>
                    <div className="label-wrapper"><div className="red-block"></div><p className="label-text"> - Miami</p></div>
                </div>
                <div className="right-label">
                    <div className="label-wrapper"><div className="orange-block"></div><p className="label-text"> - Dallas</p></div>
                    <div className="label-wrapper"><div className="purple-block"></div><p className="label-text"> - New York City</p></div>
                </div>
            </div>
        </>
    );
}

export default DonutChart;