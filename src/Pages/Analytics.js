import React from 'react';
import TableChart from "../Components/Table";
import Area from "../Components/Area";
import "../CSS/Analytics.css";

function Analytics({ year, action, states }){
  //Main page --> Analytics page.
  return (
    <>
        <div className="main-analytics">
            <div className="area-graph">
              <Area year={year} action={action} states={states}/> 
            </div>
            <div className="table-chart">
              <TableChart year={year} action={action} states={states}/>
            </div>
        </div>
    </>
  );
}

export default Analytics;