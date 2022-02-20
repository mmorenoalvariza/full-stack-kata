import React from "react";
import logo from "./icons/logo.svg";
import "./App.css";
import Restaurantes from "./components/Restaurantes";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Restaurantes/>
      </header>
    </div>
  );
}

export default App;
