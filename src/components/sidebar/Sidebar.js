import React from "react";

const Sidebar = () => {
  return (
    <div className="card card-default">
      <div className="card-header">
        <h2>Menu</h2>
      </div>
      <div class="nav nav-sidebar mb-2">
        <li class="nav-item">
          <a href="/users/profile" class="nav-link" data-abc="true">
            Profile
          </a>
        </li>
        <li class="nav-item">
          <a href="/users/order" class="nav-link" data-abc="true">
            Pesanan Saya
          </a>
        </li>
        <li class="nav-item">
          <a href="/users/notification" class="nav-link" data-abc="true">
            Notification
          </a>
        </li>
        <li class="nav-item">
          <a href="/users/wallet" class="nav-link" data-abc="true">
            E-wallet
          </a>
        </li>
        <li class="nav-item">
          <a href="/users/wishlist" class="nav-link" data-abc="true">
            Wishlist
          </a>
        </li>
        <li class="nav-item">
          <a href="/users" class="nav-link" data-abc="true">
            Booking
          </a>
        </li>
      </div>
    </div>
  );
};

export default Sidebar;
