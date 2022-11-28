import React from "react";

import Navbar from "../components/Navbar";
import HomeSection from "../components/Jumbotron";
import Search from "../components/Search";
import Promotion from "../components/Promotion";
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
