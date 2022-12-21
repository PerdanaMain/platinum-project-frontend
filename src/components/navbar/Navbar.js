import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import server from "../../server";

import "./navbar.css";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

// Import Images
import flitLogo from "../../assets/landing/flit-4 1 (1).svg";
import flitText from "../../assets/landing/flit-6 1.svg";

const Navbar = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [name, setName] = useState("");

  const accessToken = sessionStorage.getItem("accessToken");

  const navigate = useNavigate();
  const logoutHandler = async () => {
    const token = sessionStorage.getItem("accessToken");
    try {
      await axios.delete(`${server}/v1/api/logout`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      sessionStorage.clear();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    decoder();
  });

  const decoder = () => {
    try {
      if (accessToken) {
        const decoded = jwt_decode(accessToken);
        setFirstName(decoded.firstname);
        setLastName(decoded.lastname);
        setName(firstName + " " + lastName);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <div className="logo d-flex ms-5">
          <a className="navbar-brand" href="/">
            <img src={flitLogo} alt="logo" width="35px" className="pe-2" />
            <img src={flitText} alt="flit" width="35px" />
          </a>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav mx-auto my-3 my-lg-0">
            <a className="nav-link" aria-current="page" href="#search-panel">
              Home
            </a>
            <a className="nav-link" href="#our-service">
              Our Services
            </a>
            <a className="nav-link" href="#why-us">
              Why Us
            </a>
            <a className="nav-link" href="#testimonial">
              Testimonial
            </a>
          </div>
          {!accessToken ? (
            <form className="d-flex">
              <a href="/auth">Sign In</a>
            </form>
          ) : (
            <DropdownButton
              id="dropdown-item-button"
              className="me-5"
              title={name}
            >
              <Dropdown.Item href="/users/profile">Profile</Dropdown.Item>
              <Dropdown.Item href="/users/order">My Order</Dropdown.Item>
              <Dropdown.Item href="/users/wishlist">Wish List</Dropdown.Item>
              <Dropdown.Item href="/users/notification">
                Notification
              </Dropdown.Item>
              <Dropdown.Item href="/users/wallet">Wallet</Dropdown.Item>
              <Dropdown.Item href="/users/history">
                History Payment
              </Dropdown.Item>
              <Dropdown.Item as="button" onClick={logoutHandler}>
                Logout
              </Dropdown.Item>
            </DropdownButton>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
