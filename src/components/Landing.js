import React from "react";

import Navbar from "./Navbar";
import Home from "./Home";
import Panel from "./Panel";
import Promotion from "./Promotion";
import OurService from "./Services";
import WhyUs from "./whyUs";
import Testimonial from "./Testimonial";
import Footer from "./Footer";

const Landing = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Panel />
      <Promotion />
      <OurService />
      <WhyUs />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Landing;
