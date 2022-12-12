/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Checkout from "../components/checkout";

import axios from "axios";

const booking = () => {

  return (
    <div>
      <Navbar />
      <Checkout />
      <Footer />
    </div>
  );
};

export default booking;
