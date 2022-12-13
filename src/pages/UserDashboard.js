import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import NavbarLogin from "../components/NavbarLogin";
import Sidebar from "../components/Sidebar";
import Booking from "../components/Booking";
import Footer from "../components/Footer";
import Wishlist from "../components/Wishlist";
import Payment from "../components/Payment";
import { Saldo } from "../components/TopUpSaldo";
import Pemesanan from "../components/Pemesanan";


const UserDashboard = () => {
    return (
        <div>
            <NavbarLogin />
            <div className="container-dash">
                <Sidebar />
                {/* <Booking/> */}
                {/* <Saldo /> */}
                <Wishlist/>
                {/* {<Payment/>} */}
            </div>
            <Footer/>
        </div>
    )
}

export default UserDashboard