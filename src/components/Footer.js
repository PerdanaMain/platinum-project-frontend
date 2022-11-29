import React from "react";
import "../css/index.css";
const Footer = () => {
  return (
    <footer id="footer">
      <div className="container-md d-flex flex-column flex-lg-row justify-content-between mt-3 mb-3 footer-container pt-5">
        <div className="address footer-child col-4">
          <img src="./assets/landing/flit-2 1.svg" alt="" width={35} />
          <img src="./assets/landing/flit-3 1.svg" alt="" width={35} />
          <p className="flit-tagline">flight with some love</p>
          <p className="flit-tagline-2">
            We kaboom your beauty holiday instantly and memorable.
          </p>
        </div>
        <div className="col-2">
          <p class="header-ftr">For Beginner</p>
          <div class="footer-child">
            <p>New Account</p>
            <p>Start Booking</p>
            <p>Use Payment</p>
          </div>
        </div>
        <div className="col-2 navigation">
          <p class="header-ftr">Explore Us</p>
          <div class="footer-child">
            <p>
              <a href="#home">Home</a>
            </p>
            <p>
              <a href="#promotion">Promotion</a>
            </p>
            <p>
              <a href="#our-service">Our Services</a>
            </p>
            <p>
              <a href="#testimonial">Testimonial</a>
            </p>
          </div>
        </div>
        <div className="col-3 contact">
          <p class="header-ftr">Connect Us</p>
          <div class="footer-child">
            <p>supportflit@airlines.com</p>
            <p>+62 7654 654</p>
            <p>Jakarta, ID</p>
          </div>
        </div>
      </div>
      <p className="copyrigth text-center pb-3" style={{ color: " #575964" }}>
        Copyright 2022 • All rights reserved • Flit
      </p>
    </footer>
  );
};

export default Footer;
