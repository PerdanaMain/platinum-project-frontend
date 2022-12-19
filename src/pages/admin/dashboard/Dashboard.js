import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

import Navbar from "../../../components/admin/navbar/Navbar";
import Sidebar from "../../../components/admin/sidebar/Sidebar";

import "./dashboard.css";
const Dashboard = () => {
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
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <p>Ini Widgets</p>
        </div>
        <div className="charts">
          <p>Ini Charts</p>
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
