import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import Tourists from "./Tourists";
import NavBar from "./NavBar";
import Continent from "./Continent";

function App() {

    const [ allTourists, setAllTourists ] = useState([])


  return (
    <> 
      <NavBar />
        <Switch>
          <Route exact path = "/">
              <HomePage />
          </Route>
          <Route exact path = "/Tourists">
              <Tourists allTourists={allTourists} setAllTourists={setAllTourists}/>
          </Route>
          <Route exact path = "/Asia">
            <Continent continentName={"asia"}/>
          </Route>
          <Route exact path = "/Africa">
            <Continent continentName={"africa"}/>
          </Route>
          <Route exact path = "/Europe">
              <Continent continentName={"europe"}/>
          </Route>
          <Route exact path = "/Antartica">
            <Continent continentName={"antartica"}/>
          </Route>
          <Route exact path = "/NorthAmerica">
            <Continent continentName={"north_america"}/>
          </Route>
          <Route exact path = "/SouthAmerica">
            <Continent continentName={"south_america"}/>
          </Route>
          <Route exact path = "/Oceania">
            <Continent continentName={"oceania"}/>
          </Route>
        </Switch>
    </>
  );  


  
}

export default App;