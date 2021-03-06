import React from "react";
import "./App.css";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Start from "./components/Start";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = ()=>{
    return(
        <Router>
            <Switch>
                <Route exact path="/"><Start /></Route>
                <Route path="/main" ><Main /></Route>
            </Switch>
            <Footer />
        </Router>
    )
}


export default App;
