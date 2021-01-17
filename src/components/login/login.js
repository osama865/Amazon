import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../config/firebase";

import "./login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const signIn = e => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(authBack => {
        history.push("/");
        console.log(authBack);
      })
      .catch(err => {
        console.error(err);
      });
  };
  const register = e => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then(authBack => {
        console.log(authBack);
        if (authBack) {
          history.push("/");
        }
      })
      .catch(err => {
        console.warn(err);
      });
  };

  return (
    <div className='login'>
      <Link to='/'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
          alt=''
          className='login-logo'
        />
      </Link>

      <div className='login-container'>
        <h1>Sign In</h1>

        <form action=''>
          <h5>E-mail</h5>
          <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

          <h5>Password</h5>
          <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
          <button onClick={signIn} type='submit' className='login-sign-in-button'>
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our
          Cookies Notice and our Interest-Based Ads Notice.
        </p>
        <button type='submit' onClick={register} className='login-register-button'>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}
