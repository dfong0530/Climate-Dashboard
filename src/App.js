import React, { useState } from 'react';
import LineGraph from './Components/LineGraph';
import DonutChart from './Components/DonutChart';
import SideBar from './Components/SideBar';
import SingleComponent from './Components/SingleComponent';
import FilterBox from './Components/FilterBox';
import "./App.css";

function App(){

  const [year, setYear] = useState(2021);
  const [displayFilter, setDisplayFilter] = useState(false);

  return (
    <>
      <div className="grid">
        <div className="side">
          <SideBar setDisplayFilter={setDisplayFilter}/>
        </div>
        <div className="first-single">
          <SingleComponent statType={"Percent Global Temperatres"} stat={3.94} unit={"inches"} didIncrease={true}/>
        </div>
        <div className="second-single">
          <SingleComponent statType={"Ice Sheets"} stat={427} unit={"billion tons"} didIncrease={false}/>
        </div>
        <div className="third-single">
          <SingleComponent statType={"Ocean Heat Added"} stat={337} unit={"zettajoules"} didIncrease={true}/>
        </div>
        <div className="line">
          <div className="line-container"><LineGraph year={year} /></div>
        </div>
        <div className="donut">
          <div className="donut-container"><DonutChart year={year} /></div>
        </div>
      </div>
      { displayFilter && <FilterBox setYear={setYear} setDisplayFilter={setDisplayFilter} /> }
      { displayFilter && <div id="overlay"></div> }
    </>
  );
}

export default App;

