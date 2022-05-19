import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import "../CSS/FilterBox.css";


const FilterBox = ({ setYear, setDisplayFilter }) => {

    const [tempDate, setTempDate] = useState("2021");

    const handleSubmit = () => {
        setYear(Number(tempDate));
        setDisplayFilter(false); 
    }

    return (
        <>
            <div className="filter-box">
                <CloseIcon className="icon-close" onClick={() => setDisplayFilter(false)}/>
                <div className="dropdown">
                    <select id="filter-dates" onChange={e => {setTempDate(e.target.value)}}>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                    </select>
                </div>
                <div className="button-wrapper">
                    <button className="btn submit" onClick={() => handleSubmit()}>Submit</button>
                    <button className="btn cancel" onClick={() => setDisplayFilter(false)}>Cancel</button>
                </div>
            </div>
        </>
    );
};


export default FilterBox;