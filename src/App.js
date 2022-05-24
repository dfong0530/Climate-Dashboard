import React, { useState } from 'react';
import NavBar from "./Components/NavBar";
import Analytics from './Pages/Analytics';
import Map from "./Pages/Map";
import Overview from "./Pages/Overview";
import Filter from "./Components/Filter"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";

function App(){

  /*  These are the main global state-variables that control the graphs
      Action refers to the type of global warming varibale

      There is one more main state variables: (month) that is located inside of the map component
  */

  const [year, setYear] = useState(2019);
  const [action, setAction] = useState("methane");
  const [states, setStates] = useState(["California", "New-York", "Texas", "Illinois", "Florida"]);

  const [showFiltler, setShowFilter] = useState(false);


  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Analytics year={year} action={action} states={states} />} />
        <Route path="/Map_Viewer" element={<Map year={year} action={action} states={states} />} />
        <Route path="/Overview" element={<Overview />} />
      </Routes>
      { showFiltler && <Filter year={year} setYear={setYear} action={action} setAction={setAction} states={states} setStates={setStates} /> }
    </BrowserRouter>
  );
}

export default App;

