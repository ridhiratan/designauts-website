import React from "react";
import "./Title.css";
import img from "./img.webp";

function Title() {
  return (
    <div className="container">
      <div className="row">
        <h1>Designauts, IIT Mandi</h1>
      </div>
      <div className="row">
        <h3>The Designing Club of IIT, Mandi</h3>
      </div>
      <div style={{ backgroundImage: `url(${img})`, height: "90vh" }}></div>
    </div>
  );
}

export default Title;
