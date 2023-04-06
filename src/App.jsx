import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "../src/components/Header/Header";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
    </div>
  );
}

export default App;
