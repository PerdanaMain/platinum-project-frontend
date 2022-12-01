import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/index.css";
const Login = () => {
  const [isShow, setShow] = useState(false);
  return (
    <div>
      <Navbar />
      <section id="login">
        <div className="container-login">
          <div
            className="tagline"
            style={{
              "margin-top": "-8px",
              "margin-bottom": "54px",
              "margin-left": "144px",
            }}
          >
            <img src="./assets/login/Tagline Login.svg" alt="" />
          </div>
          <div className="form-part">
            <form action="">
              <div className="mb-1">
                <label for="exampleInputEmail1" className="form-label ini-label">
                  Email
                </label>
                <input type="email" placeholder="example100@gmail.com" id="exampleInputEmail1" className="form-control" aria-describedby="emailHelp" required />
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label ini-label">
                  Password
                </label>
                <div className="input-group">
                  <div className="input-group mb-3 ">
                    <input type="password" id="exampleInputPassword1" className="form-control" name="password" placeholder="password" aria-label="Password" aria-describedby="basic-addon2" required />
                    <span
                      onClick={(e) => {
                        setShow((value) => !value);
                      }}
                      className="input-group-text"
                      id="show-hide"
                    >
                      {!isShow ? <i className="fas fa-eye"></i> : <i className="fas fa-eye-slash"></i>}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-4 mb-5">
                <a href="/regist">
                  <span className="mt-4 pt-4 d-flex ini-span text-center">
                    <p style={{ color: "#2663FF" }}>Don't</p>&nbsp;
                    <p style={{ color: "#BABABA" }}>Have Account?</p>
                  </span>
                </a>
              </div>
              <div className="d-grid gap-2 mt-5">
                <button
                  className="btn btn-primary ini-button"
                  type="submit"
                  style={{
                    background: "#2663FF",
                    "box-shadow": "0px 8px 24px rgba(0, 0, 0, 0.15)",
                    "border-radius": "30px",
                    width: "194.35px",
                    height: "42px",
                    "margin-left": "160px",
                    "margin-top": " -15px",
                  }}
                >
                  <p>Let's Go</p>
                </button>
              </div>
            </form>
            <div className="text-center mt-2 ">
              <div className="google-log">
                <a href="/">
                  <img src="./assets/login/Google Auth.svg" alt="" />
                </a>
              </div>
              <div className="apple-log" style={{ "margin-top": "-23px" }}>
                <a href="/">
                  <img src="./assets/login/Apple Auth.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Login;
