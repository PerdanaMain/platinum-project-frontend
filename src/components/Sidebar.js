import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Sidebar = () => {
  const navigate = useNavigate();
  const logoutHandler = async () => {
    const token = sessionStorage.getItem("accessToken");
    try {
      await axios.delete(
        "https://platinum-project-backend-production.up.railway.app/v1/api/logout",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      sessionStorage.clear();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="sidebar">
      <div className="header">
        <div className="list-item">
          <a href="#" style={{"display":"flex"}}>
            <img
              src="./assets/landing/flit-logo.png"
              width={50}
              alt=""
              className="icon"
            />
            <span className="description-header"><br />
              <p>Citra</p>
            </span>
          </a>
        </div>
        <div className="illustration"></div>
      </div>
      <div className="main">
        <div className="list-item">
          <a href="/booking">
            <img
              src="./assets/dashboard/icon-team.svg"
              alt=""
              className="icon"
            />
            <span className="description">Booking</span>
          </a>
        </div>
        <div className="list-item">
          <a href="/wishlist">
            <img
              src="./assets/dashboard/icon-event.svg"
              alt=""
              className="icon"
            />
            <span className="description">Wishlist</span>
          </a>
        </div>
        <div className="list-item">
          <a href="/payment">
            <img
              src="./assets/dashboard/wallet.svg"
              alt=""
              className="icon"
              style={{"width":"21px", "margin-left":"-5px"}}
            />
            <span className="description">E-wallet</span>
          </a>
        </div>
        <div className="list-item">
          <a href>
            <img
              src="./assets/dashboard/icon-event.svg"
              alt=""
              className="icon"
            />
            <span className="description">Wishlist</span>
          </a>
        </div>
        <div className="list-item">
          <a href>
            <img
              src="./assets/dashboard/icon-event.svg"
              alt=""
              className="icon"
            />
            <span className="description">Wishlist</span>
          </a>
        </div>
        <div className="list-item">
          <a href>
            <img
              src="./assets/dashboard/icon-event.svg"
              alt=""
              className="icon"
            />
            <span className="description">Wishlist</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
