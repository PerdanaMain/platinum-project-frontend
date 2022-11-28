import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./page/Landing";
import Login from "./page/Login";
import Regist from "./page/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/regist" element={<Regist />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
