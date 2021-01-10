import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Basket from "./components/basket/basket";
import Header from "./components/header/header";
import Home from "./components/home/home";

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Switch>
          <Route path='/'>
            <Home />
          </Route>
          <Route path='/basket'>
            <Basket />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
