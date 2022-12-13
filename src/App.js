import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/Landing";
import FormLogin from "./pages/Login";
import FormRegister from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import NotFound from "./pages/notFound";
import UserDashboard from "./pages/UserDashboard";
import Wishlist from "./components/Wishlist";
import Payment from "./components/Payment";
import NoBooking from "./components/NoBooking";
import Booking from "./components/Booking";
import { DetailBooking } from "./components/DetailBooking";
import Pemesanan from "./components/Pemesanan";
import HistoryTransaksi from "./components/HistoryTransaksi";
import { TopUpSaldo } from "./components/TopUpSaldo";
import JumlahSaldo from "./components/JumlahSaldo";
import "./css/index.css";

function App() {
  return (
    <Routes>
      <Route path="/saldo" element={<JumlahSaldo/>}/>
      <Route path="/topup" element={<TopUpSaldo/>}/>
      <Route path="/history" element={<HistoryTransaksi/>}/>
      <Route path="/pemesanan" element={<Pemesanan/>}/>
      <Route path="/detailbooking" element={<DetailBooking/>}/>
      <Route path="/payment" element={<Payment/>}/>
      <Route path="/wishlist" element ={<Wishlist/>} />
      <Route path="/booking" element={<Booking/>} />
      <Route path="/nobooking" element={<NoBooking/>} />
      <Route path="/userdashboard" element={<UserDashboard/>} />
      <Route path="/landing" element={<Landing/>} />
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<FormLogin />} />
      <Route path="/regist" element={<FormRegister />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
}

export default App;
