import React from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";

import Landing from "./pages/landing/Landing";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import NotFound from "./pages/notFound/NotFound";

// Users
import DashboardUser from "./pages/users/dashboard/Dashboard";
import Profile from "./pages/users/profile/Profile";
import Booking from "./pages/users/booking/Booking";
import Order from "./pages/users/order/Order";
import Wishlist from "./pages/users/wishlist/Wishtlist";
import Wallet from "./pages/users/wallet/Wallet";
import History from "./pages/users/history/History";
import Notification from "./pages/users/notification/Notification";
import Payment from "./pages/users/payment/Payment";

// Admins
import DashboardAdmin from "./pages/admin/dashboard/Dashboard";
import Users from "./pages/admin/users/User";
import UpdateUser from "./pages/admin/users/update/Update";
import Tickets from "./pages/admin/tickets/Ticket";
import UpdateTicket from "./pages/admin/tickets/update/Update";
import Bookings from "./pages/admin/bookings/Booking";
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
          <Route path="profile" element={<Profile />} />
          <Route path="booking" element={<Booking />} />
          <Route path="order" element={<Order />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="history" element={<History />} />
          <Route path="notification" element={<Notification />} />
          <Route path="payment/:paymentId" element={<Payment />} />
        </Route>
        <Route path="/admin">
          <Route index element={<DashboardAdmin />} />
          <Route path="users" element={<Users />} />
          <Route path="users/:userId" element={<UpdateUser />} />
          <Route path="tickets" element={<Tickets />} />
          <Route path="tickets/:ticketId" element={<UpdateTicket />} />
          <Route path="bookings" element={<Bookings />} />
        </Route>
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
