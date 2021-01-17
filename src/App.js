import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Basket from "./components/basket/basket";
// import Header from "./components/header/header";
import Home from "./components/home/home";
import Login from "./components/login/login";
import Payment from "./components/payment/payment";
import { auth } from "./config/firebase";
import { useStateValue } from "./contex/stateProvider";

const promise = loadStripe(
  "pk_test_51IAo3WIke0AV4OK6oooNuIpfL5W4qlJmFJ1OZpuZW1gr9hWr4G9K7s2uuOBpaW1pBzsunwSQtA6T04zpmWZTlk2D00qLoqd8Uw"
);

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
          <Route path='/payment'>
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
