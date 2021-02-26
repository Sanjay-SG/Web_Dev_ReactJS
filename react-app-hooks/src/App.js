import React from "react";
import "./App.css"
import Login from "./components/Login";
import ShortCircuitEval from "./components/ShortCircuitEval";
import ToggleValue from "./components/ToggleValue";
import UseStateArray from "./components/UseStateArray";
import UseStateObject from "./components/UseStateObject";

const App = () => {
  return (
    <div class="app">
      {/* <ToggleValue /> */}
      {/* <UseStateArray /> */}
      {/* <UseStateObject /> */}
      {/* <ShortCircuitEval /> */}
      <Login />
    </div>
  )
}

export default App;