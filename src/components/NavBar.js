import React from "react";
import { NavLink } from "react-router-dom";

// const linkStyles = {
//     display: "inline-block",
//     width: "80px",
//     padding: "12px",
//     margin: "10px 6px 6px",
//     textDecoration: "none",
//     color: "black",
    
//   };

function NavBar(){
    return (
         <nav>
            <NavLink to="/" exact>Home</NavLink>
            <NavLink to="/Tourists" exact>Tourists</NavLink>
            <NavLink to="/asia" exact>Asia</NavLink>
            <NavLink to="/africa" exact>Africa</NavLink>
            <NavLink to="/europe" exact>Europe</NavLink>
            <NavLink to="/antartica" exact>Antartica</NavLink>
            <NavLink to="/northamerica" exact>North America</NavLink>
            <NavLink to="/southamerica" exact>South America</NavLink>
            <NavLink to="/oceania" exact>Oceania</NavLink>
        </nav>
    )
   

}

export default NavBar;