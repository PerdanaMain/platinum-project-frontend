import React from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";

import Landing from "./pages/landing/Landing";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import NotFound from "./pages/notFound/NotFound";

// Users
import DashboardUser from "./pages/users/dashboard/Dashboard";
import Booking from "./pages/users/booking/Booking";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Landing />} />
          <Route path="auth" element={<Login />} />
          <Route path="reg" element={<Register />} />
          <Route path="404" element={<NotFound />} />
        </Route>
        <Route path="/users">
          <Route index element={<DashboardUser />} />
          <Route path="booking" element={<Booking />} />
        </Route>
        <Route path="/admin"></Route>
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
