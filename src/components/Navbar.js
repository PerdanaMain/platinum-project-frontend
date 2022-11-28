import React from "react";
import "../css/index.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <div className="logo d-flex ms-5">
          <a className="navbar-brand" href="#">
            <img
              src="./assets/landing/flit-4 1 (1).svg"
              alt="logo"
              width="35px"
              className="pe-2"
            />
            <img src="./assets/landing/flit-6 1.svg" alt="flit" width="35px" />
          </a>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="ourservice" id="">
                Our Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Why Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Testimonial
              </a>
            </li>
          </ul>
          <form class="d-flex">
            <a href="#">Sign Up</a>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
