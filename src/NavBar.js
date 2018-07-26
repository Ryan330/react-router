import React from "react";
import {Route, Link} from "react-router-dom";


const NavBar = (props) => {
    return (

        <header className="customHeader">
            <ul>

                <li><Link to="/">Landing</Link></li>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/horseshoecrab">Horseshoe Crab</Link></li>
            
            </ul>
        </header>
    );
}
export default NavBar;