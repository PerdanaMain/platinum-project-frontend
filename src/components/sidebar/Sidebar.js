import React from "react";
import "./sidebar.css";
const Sidebar = () => {
  return (
    <div class="col-lg-4 justify-content-right">
      <div className="nav-side-wrap">
        <aside class="user-info-wrapper">
          <div class="user-cover">
            <div
              class="info-label"
              data-toggle="tooltip"
              title=""
              data-original-title="You currently have 290 Reward Points to spend"
            >
              <i class="icon-medal"></i>290 points
            </div>
          </div>
          <div class="user-info">
            <div class="user-avatar">
              <a class="edit-avatar" href=" "></a>
              <img
                src="https://bootdey.com/img/Content/avatar/avatar1.png"
                alt="User"
              />
            </div>
            <div class="user-data">
              <h4>Daniel Adams</h4>
              <span>Joined February 06, 2017</span>
            </div>
          </div>
        </aside>
        <navside class="list-group">
          <a class="list-group-item" href="/users/profile">
            <i class="fa fa-user"></i>Profile
          </a>
          <a class="list-group-item" href="/users/order">
            <i class="fa fa-sticky-note"></i>My Order
          </a>
          <a class="list-group-item" href="/users/notification">
            <i class="fa fa-bell"></i>Notification
          </a>
          <a class="list-group-item" href="/users/wallet">
            <i class="fa fa-dollar"></i>E-Wallet
          </a>
          <a class="list-group-item" href="/users/wishlist">
            <i class="fa fa-heart"></i>Wishlist
          </a>
          <a class="list-group-item" href="/users">
            <i class="fa fa-bookmark"></i>Booking
          </a>
        </navside>
      </div>
    </div>
  );
};

export default Sidebar;
