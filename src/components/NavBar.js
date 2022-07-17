import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// const linkStyles = {
//     display: "inline-block",
//     width: "80px",
//     padding: "12px",
//     margin: "10px 6px 6px",
//     textDecoration: "none",
//     color: "black",
    
//   };

function NavBar() {
    const [ active, setActive ] = useState("");

    function handleClick(e) {
        setActive(e.target.value);
    }

    return (
         <nav id="navBar">
            <NavLink to="/" exact>
                <button onClick={handleClick} className={active === "Travel The World" ? "active" : "navbar"} value="Travel The World">Travel The World</button>
            </NavLink>
            <NavLink to="/asia" exact>
                <button onClick={handleClick} className={active === "Asia" ? "active" : "navbar"} value="Asia">Asia</button>
            </NavLink>
            <NavLink to="/africa" exact>
                <button onClick={handleClick} className={active === "Africa" ? "active" : "navbar"} value="Africa">Africa</button>
            </NavLink>
            <NavLink to="/europe" exact>
                <button onClick={handleClick} className={active === "Europe" ? "active" : "navbar"} value="Europe">Europe</button>
            </NavLink>
            <NavLink to="/antarctica" exact>
                <button onClick={handleClick} className={active === "Antarctica" ? "active" : "navbar"} value="Antarctica">Antarctica</button>
            </NavLink>
            <NavLink to="/northamerica" exact>
                <button onClick={handleClick} className={active === "North America" ? "active" : "navbar"} value="North America">North America</button>
            </NavLink>
            <NavLink to="/southamerica" exact>
                <button onClick={handleClick} className={active === "South America" ? "active" : "navbar"} value="South America">South America</button>
            </NavLink>
            <NavLink to="/australia" exact>
                <button onClick={handleClick} className={active === "Australia" ? "active" : "navbar"} value="Australia">Australia</button>
            </NavLink>
        </nav>
    )
}

export default NavBar;