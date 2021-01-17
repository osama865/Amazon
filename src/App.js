import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Basket from "./components/basket/basket";
// import Header from "./components/header/header";
import Home from "./components/home/home";
import Login from "./components/login/login";
import { auth } from "./config/firebase";
import { useStateValue } from "./contex/stateProvider";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //
    auth.onAuthStateChanged(authUser => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user has just logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user has just logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      // cleanup
    };
  }, []);

  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/basket'>
            <Basket />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
