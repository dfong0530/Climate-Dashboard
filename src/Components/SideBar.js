import React from 'react';
import "../CSS/SideBar.css";
import PublicIcon from '@mui/icons-material/Public'; //MATERIAL DESIGN ICONS
import HomeIcon from '@mui/icons-material/Home';
import TuneIcon from '@mui/icons-material/Tune';
import AttachMoneySharpIcon from '@mui/icons-material/AttachMoneySharp';


const SideBar = ({ setDisplayFilter }) => {

    return (
        <>
            <div className="side-bar">
                <PublicIcon className="icon globe"/>
                <a className="link" href="https://www.catf.us/support/?gclid=Cj0KCQjwgMqSBhDCARIsAIIVN1V9UUPZhkG9HpyO_Y9nJgOMLINz9bjRTrecz3BvUGH4n_o-lsJQHbwaAjRMEALw_wcB">
                    <HomeIcon className="icon" />
                </a>
                <TuneIcon className="icon" onClick={() => setDisplayFilter(true)} />
                <a className="link" href="https://give.catf.us/give/376767/#!/donation/checkout">
                    <AttachMoneySharpIcon className="icon dollar" />
                </a>
            </div>
        </>
    );

}

export default SideBar;