import React from "react";
import "./App.css";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Start from "./Start";
import Main from "./Main";

const App = ()=>{
    return(
        <Router>
            <Switch>
                <Route exact path="/"><Start /></Route>
                <Route path="/main" ><Main /></Route>
            </Switch>
        </Router>
    )
}


export default App;
