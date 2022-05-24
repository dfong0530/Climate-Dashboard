import React, { useState } from 'react';
import TableChart from "../Components/Table";
import Map from "./Map";
import Area from "../Components/Area";
import Filter from "../Components/Filter";
import NavBar from "../Components/NavBar";
import "../CSS/Analytics.css";

function Analytics({ year, action, states }){

  return (
    <>
        {/* <Filter year={year} setYear={setYear} action={action} setAction={setAction} states={states} setStates={setStates}/> */}
        <div className="main-analytics">
            <div className="area-graph">
              <Area year={year} action={action} states={states}/> 
            </div>
            <div className="table-chart">
              <TableChart year={year} action={action} states={states}/>
            </div>
        </div>
      {/* <Map year={year} action={action} states={states}/> */}
    </>
  );
}

export default Analytics;