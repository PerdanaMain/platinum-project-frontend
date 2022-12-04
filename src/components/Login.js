import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/index.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const Login = async (e) => {
    e.preventDefault();
    console.log({ email, password });
    try {
      const post = await axios.post(
        "https://platinum-project-backend-production.up.railway.app/v1/api/login",
        {
          email: email,
          password: password,
        }
      );
      const token = post.data.accessToken;
      sessionStorage.setItem("accessToken", token);
      navigate("/dashboard");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <div className="row row-cols-md-12 row-cols-1 d-flex justify-content-center align-items-center hero mb-5">
          <form
            onSubmit={Login}
            class="form justify-content-center align-items-center mb-5"
          >
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
              <div className="flex-column align-items-center">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="example100@gmail.com"
                  id="email"
                  className="form-control"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>

              <div className="flex-column align-items-start">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="password"
                  id="password"
                  required
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <div className="d-flex flex-column align-items-center">
                <div className="flex-column align-items-center">
                  <a href="/regist">
                    <span className="mt-4 pt-4 d-flex ini-span text-center">
                      <p style={{ color: "#2663FF" }}>Don't</p>&nbsp;
                      <p style={{ color: "#BABABA" }}>Have Account?</p>
                    </span>
                  </a>
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
                      marginTop: " -15px",
                    }}
                  >
                    <p>Let's Go</p>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
