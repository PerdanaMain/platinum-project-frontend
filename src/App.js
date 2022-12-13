import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/Landing";
import FormLogin from "./pages/Login";
import FormRegister from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import NotFound from "./pages/notFound";
import Pesanan from "./pages/DataPesanan";

import "./css/index.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<FormLogin />} />
      <Route path="/regist" element={<FormRegister />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404" />} />
      <Route path="/bookingdata" element={<Pesanan />} />
    </Routes>
  );
}

export default App;
