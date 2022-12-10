import React, { useState, useEffect } from "react";
import NavbarLogin from "../components/NavbarLogin";
import Home from "../components/Home";
import Panel from "../components/Panel";
import Promotion from "../components/Promotion";
import OurService from "../components/Services";
import WhyUs from "../components/whyUs";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";

import axios from "axios";
const Dashboard = () => {
  const [airport, setAirport] = useState("");

  useEffect(() => {
    getAirport();
  });

  const getAirport = async () => {
    try {
      const get = await axios.get(
        "https://platinum-project-backend-production.up.railway.app/v1/api/airports"
      );
      setAirport(get.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <NavbarLogin />
      <Home />
      <Panel data={airport} />
      <Promotion />
      <OurService />
      <WhyUs />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Dashboard;
