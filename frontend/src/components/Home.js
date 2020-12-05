import React from "react";
import Aboutus from "./Aboutus";
import ContactUs from "./contactUs";
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
      <ContactUs />
    </div>
  );
}

export default Home;
