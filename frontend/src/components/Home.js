import React from "react";
import Aboutus from "./Aboutus";
import Contactus from "./contactUs";
import Competitions from "./Competitions";
import Navbar from "./Navbar";
import Title from "./Title";
import Resources from "./Resources";

function Home() {
  return (
    <div>
      <Navbar />
      <Title />
      <Aboutus />
      <Competitions />
      <Contactus />
      <Resources />
    </div>
  );
}

export default Home;
