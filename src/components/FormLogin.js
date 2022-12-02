import React from "react";
import "../css/index.css";
function FormLogin() {
    return (
      <div>
        <div className="container">
          <div className="row row-cols-md-12 row-cols-1 d-flex justify-content-center align-items-center hero mb-5">
          
            <form class="form justify-content-center align-items-center mb-5">
                
                  <div className="d-flex flex-column align-items-center">
                    <div className="row align-items-center">
                    <div
                            className="tagline"
                            style={{
                            "margin-top": "75px",
                            "margin-bottom": "54px",
                            "alignItems": "center"
                            }}
                        >
                            <img src="./assets/login/Tagline Login.svg" alt="" class="hero-headline" />
                    </div>
                    </div>
                    
                </div>

                
                <div className="row align-items-start">

                    <div className="flex-column align-items-start">
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
                    />
                    </div>

                <div className="flex-column align-items-start">
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
                  />
                </div>


      

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
                    "box-shadow": "0px 8px 24px rgba(0, 0, 0, 0.15)",
                    "border-radius": "30px",
                    width: "194.35px",
                    height: "42px",
                    "margin-top": " -15px",
                  }}
                >
                  <p>Let's Go</p>
                </button>
              </div>
              </div>

{/* <div className="d-flex flex-column align-items-center">
  <div className="lex-column align-items-center">
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
            </div> */}

              
            </form>
          </div>
        </div>
      </div>
    );
  }
export default FormLogin;
