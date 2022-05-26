import React from "react";
import "../CSS/Overview.css";

//Page disucssing important elements of the dashboard.
const Overview = () => {
    return (
        <>
            <div className="overview-wrapper">
                <h2 className="overview-tit">About</h2>
                <div className="overview-more">
                    <p>               
                        We are currently in the Anthropocene extinction period. 
                        The world has been detrimentally affected due to our behavior. 
                        If there isn't rapid change, there could be irreversable consequences. 
                        I created this dashboard to display up to date data on temperatures as well as methane emmisions within the United States.
                    </p>
                </div>
                <div className="overview-more">
                    <p>
                    This dashboard to display multiple statistics (methane, carbon-monoxide, temperature, ozone, nitrogendioxide).
                        The data is filtered by year, action, states, and month.
                    </p>
                </div>
                <h2 className="overview-tit">Understanding the Data</h2>
                <div className="overview-more">
                    <p>
                        Temperature: Celsius
                        <br />Methane: parts per million (mass/per unit volume)
                        <br />Ozone: dobson units
                        <br />Nitrogen Dioxide: ppb (micrograms per cubic meter)
                        <br />Carbon Monoxide: ppm
                    </p>
                </div>
                <hr className="hr" />
                <div className="overview-more">
                    <p>

                        Area Chart - Displays average values of the action (methane, temperature...) based on selected per year.
                        <br />Table - Displays raw data of the Area Chart.
                        <br />Map - Displays individual data points of the selected action in a given date (month and year)
                    </p>
                </div>
                <hr className="hr" />
                <div className="overview-more">
                    <p>A single table cell represents the average of the all the data points in a single state in the map.</p>
                </div>
                <div className="overview-more">
                    <p>
                        The data was retrieved from multiple climate API's. I then pulled the data from the API's
                        and cached the results in local txt files -  /src/Data/db (used for area and table)
                        and /src/Data/MapDB (used for map).
                    </p>
                </div>
                <h2 className="overview-tit">Disclaimer</h2>
                <div className="overview-more">
                    <p>
                        All the data was pulled from external API's. However, some of the data appears to be inaccurate. 
                        <br />My goal of this project was to demonstrate my skills in React. 
                        <br />Because of that I didn't look super in depth in the accuracy of the data.
                    </p>
                </div>
                <div className="overview-more">
                    <strong>There is no data displayed for some of the dates and actions in the Map View Tab</strong>
                </div>
                <h2 className="overview-tit" >Technologies</h2>
                <div className="overview-more">
                    <p>
                        Front end- React.js
                    </p>
                    <p>
                        Fonts and Table- Material UI
                    </p>
                    <p>
                        Area- Chart js
                    </p>
                    <p>
                        Map - Deck Gl and mapbox
                    </p>
                </div>
                <div className="overview-more">
                    <p>
                        APIs:
                    </p>
                    <a href="https://www.worldweatheronline.com/developer/my/">Weather API</a>
                    <br />
                    <a href="https://emissions-api.org/examples/highscore">Emissions API</a>
                </div>         
            </div>
        </>
    );
}

export default Overview;