import React from 'react'

const Dropdown = () => {
  return (
    <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
    <ul class="navbar-nav">
      <li class="nav-item dropdown dropstart">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Citra
        </a>
        <ul class="dropdown-menu dropdown-menu-dark">
          <li><a class="dropdown-item" href="/booking">Booking</a></li>
          <li><a class="dropdown-item" href="/wishlist">Wishlist</a></li>
          <li><a class="dropdown-item" href="/payment">E-wallet</a></li>
        </ul>
      </li>
    </ul>
  </div>
  )
}

export default Dropdown