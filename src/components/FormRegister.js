import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "../css/index.css";

function FormRegister() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    gender: "",
    phone: "",
    birthdate: "",
    email: "",
    password: "",
    confPassword: "",
  });
  const [msg, setMsg] = React.useState("");
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
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      await axios.post(
        "https://platinum-project-backend-production.up.railway.app/v1/api/register",
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          gender: formData.gender,
          phone: formData.phone,
          birthdate: formData.birthdate,
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
      <div className="container">
        <div className="row row-cols-md-12 row-cols-1 d-flex justify-content-center align-items-center hero mb-5">
          <form
            onSubmit={submitHandler}
            class="form justify-content-center align-items-center mb-5"
          >
            {" "}
            <div className="d-flex flex-column align-items-center">
              <div className="row align-items-center">
                <div
                  className="tagline"
                  style={{
                    "margin-top": "75px",
                    "margin-bottom": "54px",
                    alignItems: "center",
                  }}
                >
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
              <div className="col">
                <label for="exampleInputEmail1" className="form-label">
                  First Name
                </label>
                <input
                  type="firstname"
                  placeholder="First Name"
                  id="firstname"
                  className="form-control"
                  aria-describedby="nameHelp"
                  required
                  name="firstName"
                  value={formData.firstName}
                  onChange={changeHandler}
                />
              </div>
              <div className="col">
                <label for="exampleInputEmail1" className="form-label">
                  Last Name
                </label>
                <input
                  type="lastname"
                  placeholder="Last Name"
                  id="lastnmae"
                  className="form-control"
                  aria-describedby="nameHelp"
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
                    <span>{formData.gender}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-start">
              <div className="col-lg-6">
                <label for="exampleInputEmail1" className="form-label">
                  Mobile Number
                </label>
                <input
                  type="nohp"
                  placeholder="08xxxxxxxxx"
                  id="Username"
                  className="form-control"
                  aria-describedby="emailHelp"
                  required
                  name="phone"
                  value={formData.phone}
                  onChange={changeHandler}
                />
              </div>
              <div className="col-lg-6">
                <label for="exampleInputEmail1" className="form-label">
                  Birth Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  placeholder="mm/dd/yyyy"
                  aria-label="Password"
                  id="password"
                  aria-describedby="basic-addon2"
                  required
                  name="birthdate"
                  value={formData.birthdate}
                  onChange={changeHandler}
                />
              </div>
            </div>
            <div className="row align-items-start">
              <div className="col">
                <label for="exampleInputEmail1" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="example100@gmail.com"
                  id="Username"
                  className="form-control"
                  aria-describedby="emailHelp"
                  required
                  name="email"
                  value={formData.email}
                  onChange={changeHandler}
                />
              </div>
              <div className="col">
                <label for="exampleInputEmail1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="password"
                  aria-label="Password"
                  id="password"
                  aria-describedby="basic-addon2"
                  required
                  value={formData.password}
                  onChange={changeHandler}
                />
              </div>
              <div className="col">
                <label for="exampleInputEmail1" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="password"
                  aria-label="Password"
                  id="password"
                  aria-describedby="basic-addon2"
                  required
                  name="confPassword"
                  value={formData.confPassword}
                  onChange={changeHandler}
                />
              </div>
            </div>
            <button className="btn btn-primary btn-md mb-6">
              <p>Sign Up Now</p>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormRegister;
