import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/Landing";
import FormLogin from "./pages/Login";
import FormRegister from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/notFound";
import User from "./pages/UserProfile";
import Booking from "./pages/booking";

import "./css/index.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<FormLogin />} />
      <Route path="/regist" element={<FormRegister />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="/user" element={<User />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
}

export default App;
