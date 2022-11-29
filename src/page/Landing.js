import React from "react";

import Navbar from "../components/Navbar";
import HomeSection from "../components/Jumbotron";
import Search from "../components/Search";
import Promotion from "../components/Promotion";
import OurService from "../components/Services";
import Cards from "../components/Cards";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";
const Landing = () => {
  return (
    <div>
      <Navbar />
      <HomeSection />
      <Search />
      <Promotion />
      <OurService />
      <Cards />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Landing;
