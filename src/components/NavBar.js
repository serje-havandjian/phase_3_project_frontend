import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
    display: "inline-block",
    width: "80px",
    padding: "12px",
    margin: "10px 6px 6px",
    textDecoration: "none",
    color: "black",
    
  };

function NavBar(){
    return(

         <nav>
            <NavLink to="/" exact  >  Home </NavLink>
            <NavLink to="/Continent" exact> Continent </NavLink>
        </nav>
    )
   

}

export default NavBar;