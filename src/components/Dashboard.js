import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

import Sidebar from "./Sidebar";
const Dashboard = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    decoder();
  });

  const decoder = () => {
    try {
      const accessToken = sessionStorage.getItem("accessToken");
      if (!accessToken) {
        navigate("/404");
      }
      const decoded = jwt_decode(accessToken);
      setFirstName(decoded.firstname);
      setLastName(decoded.lastname);
      setName(firstName + " " + lastName);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container-dash">
      <Sidebar />
      <div class="main-content">
        <h1 className="m-3">Welcome, {name}</h1>
      </div>
    </div>
  );
};

export default Dashboard;
