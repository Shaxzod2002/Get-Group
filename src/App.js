import React from "react";
/* 
------------------------------------------------------
-------------- Import App CSS ---------------------
------------------------------------------------------
*/
import './App.css'
/* 
------------------------------------------------------
-------------- Import Home Page ---------------------
------------------------------------------------------
*/
import Home from "./components/Home";

function App() {
  return (
    <div className="App" id="app">
      {/* ---------- Add Home Page ------------ */}
      <Home />
    </div>
  );
}

export default App;
