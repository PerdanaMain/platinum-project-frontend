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
                  />
                </div>

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
                            <button className="hero-hideline btn btn-primary btn-md mb-6" type="submit ">
                <p>Lets Go</p>
              </button>
                    </div>
                    </div>
                    
                </div>

              </div>
              
            </form>
          </div>
        </div>
      </div>
    );
  }
export default FormLogin;
