import React from "react";
import Aboutus from "./Aboutus";
import Competitions from "./Competitions";
import Navbar from "./Navbar";
import Title from "./Title";

function Home() {
  return (
    <div>
      <Navbar />
      <Title />
      <Aboutus />
      <Competitions />
    </div>
  );
}

export default Home;
