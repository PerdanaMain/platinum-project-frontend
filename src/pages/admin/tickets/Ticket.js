import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

import Navbar from "../../../components/admin/navbar/Navbar";
import Sidebar from "../../../components/admin/sidebar/Sidebar";
import Table from "react-bootstrap/Table";

import "./ticket.css";
const Ticket = () => {
  const navigate = useNavigate();
  const accessToken = sessionStorage.getItem("accessToken");

  const [userId, setUserId] = useState("");

  useEffect(() => {
    decoder();
  });

  const decoder = () => {
    try {
      if (!accessToken) {
        navigate("/404");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="ticket">
      <Sidebar />
      <div className="ticketContainer">
        <Navbar />
        <div className="content container mt-4">
          <Table striped bordered hover className="mt-4">
            <thead>
              <tr className="text-center">
                <th>No</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Phone</th>
                <th>Birth Date</th>
                <th>Address</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <td>1</td>
                <td>Firman Perdana</td>
                <td>Laki Laki</td>
                <td>074698873</td>
                <td>2010/04/2</td>
                <td>firman@gmail.com</td>
                <td>Surabaya</td>
                <td>
                  <button className="btn btn-outline-danger me-2">
                    Delete
                  </button>
                  <Link
                    className="btn btn-outline-success"
                    to={"/admin/users/id"}
                  >
                    Update
                  </Link>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
