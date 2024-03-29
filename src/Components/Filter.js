import React, { useState } from "react";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import "../CSS/Filter.css";

const Filter = ({ year, setYear, action, setAction, states, setStates, setShowFilter }) => {

    //temp state variables that correspond to year, action, and states variables.
    //When the form is changed the temp variables will be udpated.
    //When the form is submitted the corresponding global variables will be updated with the temp variables.

    const [tempYear, setTempYear] = useState(year);
    const [tempAction, setTempAction] = useState(action);
    const [tempStates, setTempStates] = useState(states);

    const handleSubmit = (e) => {
        e.preventDefault();

        setYear(parseInt(tempYear));
        setAction(tempAction);
        setStates(tempStates);

        setShowFilter(false);
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
                    <select value={tempYear} className="dropdown" onChange={(e) => setTempYear(e.target.value)}>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                    </select>
                    <select value={tempAction} className="dropdown" onChange={(e) => setTempAction(e.target.value)}>
                        <option value="temperature">temperature</option>
                        <option value="methane">methane</option>
                        <option value="ozone">ozone</option>
                        <option value="carbon-monoxide">carbon-monoxide</option>
                        <option value="nitrogendioxide">nitrogendioxide</option>
                    </select>
                    <div className="grid-btns">
                        <div className="nyc-btn-grid">
                            <input id="New-York-filter" className={`state-filter-btn ${tempStates.includes("New-York") ? "active-btn" : ""}`} type="button" value="New-York" onClick={stateHandleClick}/>
                        </div>
                        <div className="cali-btn-grid">
                            <input id="California-filter" className={`state-filter-btn ${tempStates.includes("California") ? "active-btn" : ""}`} type="button" value="California" onClick={stateHandleClick}/>
                        </div>
                        <div className="texas-btn-grid">
                            <input id="Texas-filter" className={`state-filter-btn ${tempStates.includes("Texas") ? "active-btn" : ""}`} type="button" value="Texas" onClick={stateHandleClick}/>
                        </div>
                        <div className="illinois-btn-grid">
                            <input id="Illinois-filter" className={`state-filter-btn ${tempStates.includes("Illinois") ? "active-btn" : ""}`} type="button" value="Illinois" onClick={stateHandleClick}/>
                        </div>
                        <div className="florida-btn-grid">
                            <input id="Florida-filter" className={`state-filter-btn ${tempStates.includes("Florida") ? "active-btn" : ""}`} type="button" value="Florida" onClick={stateHandleClick}/>
                        </div>
                    </div>
                    <button className="submit-filter">Submit</button>
                    <CloseOutlinedIcon className="close-icon" onClick={() => setShowFilter(false)}/>
                </form>
            </div>
        </>
    );
}

export default Filter;