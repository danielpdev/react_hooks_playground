import React, { useState } from "react";
import ReactDOM from "react-dom";
import StateHook from "./state-hook";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h2>Magic hooks</h2>
      <StateHook />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
