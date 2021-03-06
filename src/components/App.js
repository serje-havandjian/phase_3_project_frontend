import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Tourists from "./Tourists";
import NavBar from "./NavBar";
import Continent from "./Continent";

function App() {

    const [ allTourists, setAllTourists ] = useState([]);
    const [ allCountries, setAllCountries ] = useState([]);


  return (
    <> 
      <NavBar />
        <Switch>
          <Route exact path = "/">
              <Tourists allTourists={allTourists} setAllTourists={setAllTourists} allCountries={allCountries} setAllCountries={setAllCountries}/>
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
          <Route exact path = "/Antarctica">
            <Continent continentName={"antarctica"}/>
          </Route>
          <Route exact path = "/NorthAmerica">
            <Continent continentName={"north_america"}/>
          </Route>
          <Route exact path = "/SouthAmerica">
            <Continent continentName={"south_america"}/>
          </Route>
          <Route exact path = "/Australia">
            <Continent continentName={"australia"}/>
          </Route>
        </Switch>
    </>
  );  
}

export default App;