import React from "react";
// import { AiFillEye } from "react-icons/ai";
import "../css/index.css";

function FormRegister() {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <img className="logo-flit" src="../assets/register/TaglineLogin.svg" alt="Logo" />
          <div className="row align-items-start">
            <div className="col">
              <label for="exampleInputEmail1" className="form-label">
                First Name
              </label>
              <input type="email" placeholder="First Name" id="Username" className="form-control" aria-describedby="emailHelp" required />
            </div>
            <div className="col">
              <label for="exampleInputEmail1" className="form-label">
                Last Name
              </label>
              <input type="email" placeholder="Last Name" id="Username" className="form-control" aria-describedby="emailHelp" required />
            </div>
          </div>
          <div className="row align-items-start">
            <div className="col-lg-6">
              <label for="exampleInputEmail1" className="form-label">
                Mobile Number
              </label>
              <input type="email" placeholder="08xxxxxxxxx" id="Username" className="form-control" aria-describedby="emailHelp" required />
            </div>
            <div className="col-lg-6">
              <label for="exampleInputEmail1" className="form-label">
                Birth Date
              </label>
              <input type="date" className="form-control" name="password" placeholder="mm/dd/yyyy" aria-label="Password" id="password" aria-describedby="basic-addon2" required />
            </div>
          </div>
          <div className="row align-items-start">
            <div className="col">
              <label for="exampleInputEmail1" className="form-label">
                Email
              </label>
              <input type="email" placeholder="example100@gmail.com" id="Username" className="form-control" aria-describedby="emailHelp" required />
            </div>
            <div className="col">
              <label for="exampleInputEmail1" className="form-label">
                Password
              </label>
              <input type="password" className="form-control" name="password" placeholder="password" aria-label="Password" id="password" aria-describedby="basic-addon2" required />
              {/* <span id="show-hide">
                <AiFillEye />
              </span> */}
            </div>
          </div>
          <button className="btn btn-primary btn-md" type="submit">
            <p>Sign Up Now</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default FormRegister;
