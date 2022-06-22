import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import Continent from "./Continent";
import NavBar from "./NavBar";

function App() {


  return (
   
   
    <> 
      <NavBar />
        <Switch>
          <Route exact path = "/">
              <HomePage />
          </Route>
          <Route exact path = "/Continent">
            <Continent />
          </Route>
        </Switch>
    </>
  );  


  
}

export default App;