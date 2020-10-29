import React from "react";
import "./App.css";
import Aboutus from "./components/Aboutus";
import Competition from "./components/Competition";
import Navbar from "./components/Navbar";
import Title from "./components/Title";

function App() {
  return (
    <div>
      <Navbar />
      <Title />
      <Aboutus />
      <Competition />
    </div>
  );
}

export default App;
