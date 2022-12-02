import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/index.css";
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
    <div class="sidebar">
      <div class="header">
        <div class="list-item">
          <a href>
            <img
              src="./assets/landing/flit-logo.png"
              width={50}
              alt=""
              class="icon"
            />
            <span class="description-header">
              {" "}
              <img src="./assets/landing/flit-teks.png" width={50} alt="" />
            </span>
          </a>
        </div>
        <div class="illustration"></div>
      </div>
      <div class="main">
        <div class="list-item">
          <a href>
            <img
              src="./assets/dashboard/icon-dashboard.svg"
              alt=""
              class="icon"
            />
            <span class="description">Dashboard</span>
          </a>
        </div>
        <div class="list-item">
          <a href>
            <img
              src="./assets/dashboard/icon-analytics.png"
              alt=""
              class="icon"
            />
            <span class="description">Users</span>
          </a>
        </div>
        <div class="list-item">
          <a href>
            <img
              src="./assets/dashboard/icon-category.svg"
              alt=""
              class="icon"
            />
            <span class="description">Ticket</span>
          </a>
        </div>
        <div class="list-item">
          <a href>
            <img src="./assets/dashboard/icon-team.svg" alt="" class="icon" />
            <span class="description">Booking</span>
          </a>
        </div>
        <div class="list-item">
          <a href>
            <img src="./assets/dashboard/icon-event.svg" alt="" class="icon" />
            <span class="description">Airport</span>
          </a>
        </div>
        <div class="list-item">
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
