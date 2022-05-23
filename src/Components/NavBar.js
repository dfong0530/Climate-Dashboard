import React from "react";
import "../CSS/NavBar.css";

const NavBar = () => {

    return (
        <>
            <div className="nav-bar">
                <div className="nav-left">
                    <h1 className="dash-name">Climate Dashboard</h1>
                    <ul>
                        <li><a href="">Overview</a></li>
                        <li><span>|    </span><a className="underline" href="">Analytics</a></li>
                        <li><span>|    </span><a href="">Map Viewer</a></li>
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