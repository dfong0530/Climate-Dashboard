import React from 'react';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import "../CSS/SingleComponent.css";


const SingleComponent = ({ statType, stat, unit, didIncrease }) => {

    /*
        This component will be static. Could not find suitable API's.
        
        @param: statType: string, stat: int, unit: string, didIncrease: bool
    */

    return(
        <>
            <div className="single-component">
                <div className="stats-wrapper">
                    <p className="stat-description">{statType}</p>
                    <h1 className="stat">{stat}</h1>
                    <p className="stat-description">{unit}</p>
                </div>
                <div className="arrow-wrapper">
                    { didIncrease && <ArrowRightAltOutlinedIcon className="up-arrow" /> }
                    { !didIncrease && <ArrowRightAltOutlinedIcon className="down-arrow" /> }
                </div>  
            </div>
        </>
    );
}

export default SingleComponent;