import React from "react";
import "./App.css";
import Header from "./components/header/header";
import Home from "./components/home/home";

function App() {
  return (
    <div className='App'>
      {/* HEADER */}
      <Header></Header>
      {/* HOME */}
      <Home></Home>
    </div>
  );
}

export default App;
