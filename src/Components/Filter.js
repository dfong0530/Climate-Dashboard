import React, { useState, useEffect } from "react";
import "../CSS/Filter.css";

const Filter = ({ year, setYear, action, setAction, states, setStates }) => {

    const [tempYear, setTempYear] = useState(year);
    const [tempAction, setTempAction] = useState(action);
    const [tempStates, setTempStates] = useState(states);

    const handleSubmit = (e) => {
        e.preventDefault();

        setYear(parseInt(tempYear));
        setAction(tempAction);
        setStates(tempStates);
    }

    const stateHandleClick = (e) => {
        
        if(tempStates.includes(e.target.value)){
            setTempStates(tempStates.filter(val => val !== e.target.value));

        }else{
            setTempStates(tempStates.concat([e.target.value]));
        }
    }

    return (
        <>
            <div className="filter-box">
                <form className="form" onSubmit={handleSubmit}>
                    <select value={tempYear} onChange={(e) => setTempYear(e.target.value)}>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                    </select>
                    <select value={tempAction} onChange={(e) => setTempAction(e.target.value)}>
                        <option value="temperature">temperature</option>
                        <option value="methane">methane</option>
                        <option value="ozone">ozone</option>
                        <option value="carbon-monoxide">carbon-monoxide</option>
                        <option value="nitrogendioxide">nitrogendioxide</option>
                    </select>
                    <input type="button" value="New-York" onClick={stateHandleClick}/>
                    <input type="button" value="California" onClick={stateHandleClick}/>
                    <input type="button" value="Texas" onClick={stateHandleClick}/>
                    <input type="button" value="Illinois" onClick={stateHandleClick}/>
                    <input type="button" value="Florida" onClick={stateHandleClick}/>
                    <button>Submit</button>
                </form>
            </div>
        </>
    );
}

export default Filter;