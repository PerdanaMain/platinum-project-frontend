/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UserPage from "../components/UserPage";

import axios from "axios";

const UserProfile = () => {

  return (
    <div>
      <Navbar />
      <UserPage />
      
      <Footer />
    </div>
  );
};

export default UserProfile;
