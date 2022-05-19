import React, { useState } from 'react';
import TableChart from "./Components/Table";
import Map from "./Components/Map";
import Area from "./Components/Area";
import "./App.css";

function App(){

  /* These are the main global state-variables that control the graphs
  Action refers to the type of global warming varibale

  There is one more main state variables: (month) that is located inside of the map component

  */
  const [year, setYear] = useState(2020);
  const [action, setAction] = useState("ozone");
  const [states, setStates] = useState(["California", "New-York", "Texas", "Illinois", "Florida"]);

  return (
    <>
      <div className="grid">
        <div className="grid-area">
          <Area year={year} action={action} states={states}/>
        </div>
        <div className="grid-map">
          <Map year={year} action={action} states={states}/>
        </div>
        <div className="grid-table">
          <TableChart year={year} action={action}/>
        </div>
      </div>  
    </>
  );
}

export default App;

