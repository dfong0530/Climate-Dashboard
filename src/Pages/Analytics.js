import React, { useState } from 'react';
import TableChart from "../Components/Table";
import Map from "./Map";
import Area from "../Components/Area";
import Filter from "../Components/Filter";
import NavBar from "../Components/NavBar";
import "../CSS/Analytics.css";

function Analytics(){

  /* These are the main global state-variables that control the graphs
  Action refers to the type of global warming varibale

  There is one more main state variables: (month) that is located inside of the map component

  */
  const [year, setYear] = useState(2019);
  const [action, setAction] = useState("methane");
  const [states, setStates] = useState(["California", "New-York", "Texas", "Illinois", "Florida"]);

  const [showFitler, setShowFilter] = useState(false);

  return (
    <>
        <div className="main-analytics">
            <div className="area-graph">

            </div>
            <div className="table-chart">

            </div>
        </div>
      {/* <Filter year={year} setYear={setYear} action={action} setAction={setAction} states={states} setStates={setStates}/>
      <div className="main">
        <div className="area-section">
          <Area year={year} action={action} states={states}/> 
        </div>
        <div className="table-section">
          <TableChart year={year} action={action} states={states}/>
        </div>
      </div>  */}
      {/* <Map year={year} action={action} states={states}/> */}
    </>
  );
}

export default Analytics;