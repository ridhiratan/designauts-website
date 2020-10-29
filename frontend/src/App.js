import React from "react";
import "./App.css";
import Aboutus from "./components/Aboutus";
import Navbar from "./components/Navbar";
import Title from "./components/Title";

function App() {
  return (
    <div>
      <Navbar />
      <Title />
      <Aboutus />
    </div>
  );
}

export default App;
