import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";
const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    phone: "",
    birthdate: "",
    email: "",
    password: "",
    confPassword: "",
  });
  const [msg, setMsg] = useState("");
  const navigate = useNavigate("/login");
  const changeHandler = (event) => {
    const { name, value, type, checked } = event.target; //event target destructuring

    setFormData((prevFormData) => {
      //set State Value
      return {
        ...prevFormData, //take prev state to new object
        [name]: type === "checkbox" ? checked : value, // if type is checkbox the value will be checked (bolean value) else the value willl be value of input
      };
    });
  };
  const Register = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      await axios.post(
        "https://platinum-project-backend-production.up.railway.app/v1/api/register",
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          phone: formData.phone,
          birthdate: formData.birthdate,
          gender: formData.gender,
          email: formData.email,
          password: formData.password,
          confPassword: formData.confPassword,
        }
      );
      navigate("/login");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  return (
    <div>
      <Navbar />
      <div className="container mt-5 register">
        <div className="row row-cols-md-12 row-cols-1 d-flex justify-content-center align-items-center hero mb-5">
          <form
            onSubmit={Register}
            class="form justify-content-center align-items-center mb-5"
          >
            {" "}
            <div className="d-flex flex-column align-items-center">
              <div className="row align-items-center">
                <div className="tagline">
                  <img
                    src="./assets/login/Tagline Login.svg"
                    alt=""
                    class="hero-headline"
                  />
                </div>
              </div>
            </div>
            <p>{msg}</p>
            <div className="row align-items-start">
              <div className="flex-column align-items-start">
                <label for="firstname" className="form-label">
                  First Name
                </label>
                <input
                  type="firstname"
                  placeholder="First Name"
                  id="firstname"
                  className="form-control"
                  required
                  name="firstName"
                  value={formData.firstName}
                  onChange={changeHandler}
                />
              </div>
              <div className="flex-column align-items-start">
                <label for="lastname" className="form-label">
                  Last Name
                </label>
                <input
                  type="lastname"
                  placeholder="Last Name"
                  id="lastname"
                  className="form-control"
                  required
                  name="lastName"
                  value={formData.lastName}
                  onChange={changeHandler}
                />
              </div>
            </div>
            <div className="row align-items-start">
              <div className="col">
                <label for="flexRadioDefault1" className="form-label">
                  Jenis Kelamin
                </label>
                <div class="form-check mt-2">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="gender"
                    id="flexRadioDefault1"
                    value="laki-laki"
                    checked={formData.gender === "laki-laki"}
                    onChange={changeHandler}
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Laki - Laki
                  </label>
                  <div class="form-check form-check-inline ms-3">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="gender"
                      id="inlineRadio1"
                      value="perempuan"
                      checked={formData.gender === "perempuan"}
                      onChange={changeHandler}
                    />
                    <label class="form-check-label" for="inlineRadio1">
                      Perempuan
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-start">
              <div className="col-lg-6">
                <label for="phone" className="form-label">
                  Mobile Number
                </label>
                <input
                  type="text"
                  placeholder="08xxxxxxxxx"
                  id="phone"
                  className="form-control"
                  required
                  name="phone"
                  value={formData.phone}
                  onChange={changeHandler}
                />
              </div>
              <div className="col-lg-6">
                <label for="bd" className="form-label">
                  Birth Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  placeholder="mm/dd/yyyy"
                  id="bd"
                  required
                  name="birthdate"
                  value={formData.birthdate}
                  onChange={changeHandler}
                />
              </div>
            </div>
            <div className="row align-items-start">
              <div className="flex-column align-items-start">
                <label for="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="example100@gmail.com"
                  id="email"
                  className="form-control"
                  required
                  name="email"
                  value={formData.email}
                  onChange={changeHandler}
                />
              </div>
              <div className="flex-column align-items-start">
                <label for="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="password"
                  id="password"
                  required
                  value={formData.password}
                  onChange={changeHandler}
                />
              </div>
              <div className="col">
                <label for="confPassword" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="password"
                  id="confPassword"
                  required
                  name="confPassword"
                  value={formData.confPassword}
                  onChange={changeHandler}
                />
              </div>
            </div>
            <div className="d-flex flex-column align-items-center">
              <div className="flex-column align-items-center">
                <button
                  className="btn btn-primary ini-button"
                  type="submit"
                  style={{
                    background: "#2663FF",
                    boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.15)",
                    borderRadius: "30px",
                    width: "194.35px",
                    height: "42px",
                    marginTop: " 45px",
                  }}
                >
                  <p>Let's Go</p>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;