import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Landing from "./page/Landing";
import Regist from "./page/Register";
import NotFound from "./page/generateNotFound";
import FormLogin from "./page/Login";
import Dashboard from "./page/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<FormLogin />} />
        <Route path="/regist" element={<Regist />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
