import React from "react";
import { Link } from "react-router-dom";
import "../CSS/NavBar.css";

const NavBar = () => {

    const handleClick = (e) => {
        
        let overview = document.getElementById("overview-link");
        let analytics = document.getElementById("analytics-link");
        let map = document.getElementById("map-link");

        switch(e.target.id){
            case "overview-link":
                overview.classList.add("underline");
                analytics.classList.remove("underline");
                map.classList.remove("underline");
                break;

            case "analytics-link":
                overview.classList.remove("underline");
                analytics.classList.add("underline");
                map.classList.remove("underline");
                break;

            default:
                overview.classList.remove("underline");
                analytics.classList.remove("underline");
                map.classList.add("underline");
                break;
        }

    }

    return (
        <>
            <div className="nav-bar">
                <div className="nav-left">
                    <h1 className="dash-name">Climate Dashboard</h1>
                    <ul>
                        <li><Link to="/Overview" id="overview-link" className="nav-link" onClick={handleClick}>Overview</Link></li>
                        <li><span>|    </span><Link to="/" id="analytics-link" className="nav-link underline" onClick={handleClick}>Analytics</Link></li>
                        <li><span>|    </span><Link to="/Map_Viewer" id="map-link" className="nav-link" onClick={handleClick}>Map Viewer</Link></li>
                    </ul>
                </div>
                <div className="nav-right">
                    <button className="filter-btn"><span className="plus">+</span>Filter</button>
                </div>
            </div>
        </>
    );
}


export default NavBar;