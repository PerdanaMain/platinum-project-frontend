import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

import Navbar from "../../../components/admin/navbar/Navbar";
import Sidebar from "../../../components/admin/sidebar/Sidebar";
import Table from "react-bootstrap/Table";

import "./booking.css";
const Booking = () => {
  const navigate = useNavigate();
  const accessToken = sessionStorage.getItem("accessToken");

  const [userId, setUserId] = useState("");

  useEffect(() => {
    decoder();
  });

  const decoder = () => {
    try {
      if (!accessToken) {
        navigate("/404");
      } else {
        const decode = jwt_decode(accessToken);
        setUserId(decode.userId);
        if (parseInt(userId) !== 1) {
          navigate("/404");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bookingAdmin">
      <Sidebar />
      <div className="bookingAdminContainer">
        <Navbar />
        <div className="content container"></div>
      </div>
    </div>
  );
};

export default Booking;
