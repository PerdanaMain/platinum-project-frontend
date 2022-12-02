import React from "react";

import "../css/index.css";

function FormRegister() {
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
                  First Name
                </label>
                <input
                  type="firstname"
                  placeholder="First Name"
                  id="firstname"
                  className="form-control"
                  aria-describedby="nameHelp"
                  required
                />
              </div>
              <div className="flex-column align-items-start">
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
                    name="jeniskelamin"
                    id="flexRadioDefault1"
                    value={"L"}
                    checked
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Laki - Laki
                  </label>
                  <div class="form-check form-check-inline ms-3">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="jeniskelamin"
                      id="inlineRadio1"
                      value="P"
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
                />
              </div>
              <div className="col-lg-6">
                <label for="exampleInputEmail1" className="form-label">
                  Birth Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  name="password"
                  placeholder="mm/dd/yyyy"
                  aria-label="Password"
                  id="password"
                  aria-describedby="basic-addon2"
                  required
                />
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
              <button
                  className="btn btn-primary ini-button"
                  type="submit"
                  style={{
                    background: "#2663FF",
                    "box-shadow": "0px 8px 24px rgba(0, 0, 0, 0.15)",
                    "border-radius": "30px",
                    width: "194.35px",
                    height: "42px",
                    "margin-top": " 45px",
                  }}
                >
                  <p>Let's Go</p>
                </button>
              </div>
              </div>
           
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormRegister;
