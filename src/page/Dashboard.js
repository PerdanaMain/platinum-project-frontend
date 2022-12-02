import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Sidebar from "../components/Sidebar";
import Content from "../components/mainContent";
import "../css/index.css";
const Dashboard = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [name, setName] = useState("");
  const [exp, setExp] = useState("");
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
      setExp(decoded.exp);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container-dash">
      <Sidebar />
      <Content name={name} />
    </div>
  );
};

export default Dashboard;
