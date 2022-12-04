import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Landing from "./components/Landing";
import FormLogin from "./components/Login";
import FormRegister from "./components/Register";
import Dashboard from "./components/Dashboard";
import NotFound from "./components/notFound";

import "./css/index.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<FormLogin />} />
      <Route path="/regist" element={<FormRegister />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
}

export default App;
