import React from "react";
import "../CSS/MonthFilter.css";

const MonthFilter = ({ month, setMonth }) => {

    return (
        <>
            <form className="month-form">
                <select className="month-drop" value={month} onChange={(e) => setMonth(e.target.value)}>
                    <option value="01">January</option>
                    <option value="02">Febuary</option>
                    <option value="03">March</option>
                    <option value="04">April</option>
                    <option value="05">May</option>
                    <option value="06">June</option>
                    <option value="07">July</option>
                    <option value="08">August</option>
                    <option value="09">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                </select>
            </form>
        </>
    );
}

export default MonthFilter;