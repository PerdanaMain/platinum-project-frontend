import React from "react";

import Navbar from "../components/landing/Navbar";
import HomeSection from "../components/landing/Jumbotron";
import Search from "../components/landing/Search";
import Promotion from "../components/landing/Promotion";
const Landing = () => {
  return (
    <div>
      <Navbar />
      <HomeSection />
      <Search />
      <Promotion />
    </div>
  );
};

export default Landing;
