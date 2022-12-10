import React from "react";
import Dropdown from "./Dropdown";

const NavbarLogin = () => {
        return (
            <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <div className="logo d-flex ms-5">
                <a className="navbar-brand" href="/">
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
                <div>
                <Dropdown/>
                </div>
                </div>
            </div>
            </nav>
        );
        };

export default NavbarLogin;
