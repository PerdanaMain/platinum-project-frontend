import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

// components
import Navbar from "../../../components/navbar/Navbar";
import Sidebar from "../../../components/sidebar/Sidebar";
import Footer from "../../../components/footer/Footer";

import "./history.css";
const History = () => {
  const navigate = useNavigate();
  const accessToken = sessionStorage.getItem("accessToken");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  useEffect(() => {
    decoder();
  }, []);
  const decoder = async () => {
    try {
      if (!accessToken) {
        navigate("/404");
      } else {
        const decode = jwt_decode(accessToken);
        setFirstname(decode.firstname);
        setLastname(decode.lastname);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Navbar />
      <div className="container rounded bg-white my-5">
        <div className="row">
          <div className="col-xl-5 border-right">
            <Sidebar />
          </div>
          <div className="col-xl-7 border-right">
            <p
              style={{
                marginLeft: "22px",
                fontSize: "23px",
              }}
            >
              <b>History Payment</b>
            </p>
            <div className="part3-booking">
              <br />
              <p className="ms-3 ">
                History Payment For{" "}
                <strong>{firstname + " " + lastname}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default History;
