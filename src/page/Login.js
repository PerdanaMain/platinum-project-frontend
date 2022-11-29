import React from "react";
import { useState } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '../css/index.css';
const Login = () => {
  const [isShow, setShow] = useState(false)
  return (
    <div>
      <Navbar/>
      <section id="login">
        <div class="container-login">
          <div class="tagline" style={{ 
              "margin-top": "-8px",
              "margin-bottom":"54px",
              "margin-left": "144px",
          }}>
            <img src="/assets/Tagline Login.svg" alt=""/>
          </div>
          <div class="form-part">
          <form action="">
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label ini-label">Email</label>
                            <input type="email" placeholder="example100@gmail.com" id="exampleInputEmail1" class="form-control"
                                aria-describedby="emailHelp" required/>
                        </div>
                        <div class="mb-3">
                          <label for="exampleInputPassword1" class="form-label ini-label">Password</label>
                            <div className="input-group">
                              <div class="input-group mb-3 ">
                              <input  type="password" id="exampleInputPassword1" class="form-control" name="password" placeholder="password"
                                    aria-label="Password" aria-describedby="basic-addon2" required />
                                <span onClick={(e)=> {setShow((value)=> !value)}} class="input-group-text" id="show-hide">{!isShow ? <i class='fas fa-eye'></i> : <i class='fas fa-eye-slash'></i>}</span>
                              </div>
                            </div>
                        </div>
                        <div class="text-center mt-4 mb-5">
                            <span class="mt-4 pt-4 d-flex ini-span" style={{"margin-left": "207px;"}}>
                                <p style={{"color": "#2663FF"}}>Don't</p>&nbsp;
                                <p style={{"color": "#BABABA"}}>Have Account?</p>
                            </span>
                        </div>
                        <div class="d-grid gap-2 mt-5">
                            <button class="btn btn-primary ini-button" type="submit" style={{"background": "#2663FF",
                            "box-shadow": "0px 8px 24px rgba(0, 0, 0, 0.15)",
                            "border-radius": "30px",
                            "width": "194.35px",
                            "height": "42px",
                            "margin-left": "160px",
                            "margin-top":" -15px"}}>
                                <p>Let's Go</p>
                            </button>
                        </div>
                </form>
                <div class="text-center mt-2 ">
                <div class="google-log">
                          <a href="/">
                            <img src="./assets/login/Google Auth.svg" alt=""/>
                          </a>
                        </div>
                        <div class="apple-log" style={{"margin-top": "-23px"}}>
                        <a href="/">
                          <img src="./assets/login/Apple Auth.svg" alt=""/>
                        </a>
                        </div>
                </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Login 