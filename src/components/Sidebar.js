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
          <a href>
            <img
              src="./assets/landing/flit-logo.png"
              width={50}
              alt=""
              className="icon"
            />
            <span className="description-header">
              {" "}
              <img src="./assets/landing/flit-teks.png" width={50} alt="" />
            </span>
          </a>
        </div>
        <div className="illustration"></div>
      </div>
      <div className="main">
        <div className="list-item">
          <a href>
            <img
              src="./assets/dashboard/icon-dashboard.svg"
              alt=""
              className="icon"
            />
            <span className="description">Dashboard</span>
          </a>
        </div>
        <div className="list-item">
          <a href>
            <img
              src="./assets/dashboard/icon-analytics.png"
              alt=""
              className="icon"
            />
            <span className="description">Users</span>
          </a>
        </div>
        <div className="list-item">
          <a href>
            <img
              src="./assets/dashboard/icon-category.svg"
              alt=""
              className="icon"
            />
            <span className="description">Ticket</span>
          </a>
        </div>
        <div className="list-item">
          <a href>
            <img
              src="./assets/dashboard/icon-team.svg"
              alt=""
              className="icon"
            />
            <span className="description">Booking</span>
          </a>
        </div>
        <div className="list-item">
          <a href>
            <img
              src="./assets/dashboard/icon-event.svg"
              alt=""
              className="icon"
            />
            <span className="description">Airport</span>
          </a>
        </div>
        <div className="list-item">
          <img src="./assets/dashboard/icon-event.svg" alt="" class="icon" />
          <button className="btn" onClick={logoutHandler}>
            <span className="description">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
