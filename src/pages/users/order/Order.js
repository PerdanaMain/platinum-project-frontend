import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

//components
import Navbar from "../../../components/navbar/Navbar";
import Sidebar from "../../../components/sidebar/Sidebar";
import Footer from "../../../components/footer/Footer";

//image
import Note from "../../../assets/dashboard/Vector.svg";

import server from "../../../server";
import "./order.css";

const Order = () => {
  const navigate = useNavigate();
  const accessToken = sessionStorage.getItem("accessToken");

  const [order, setOrder] = useState("");

  useEffect(() => {
    decoder();
    getOrder();
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
  const getOrder = async () => {
    try {
      const get = await axios.get(`https://${server}/v1/api/bookings `, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setOrder(get.data.data);
    } catch (error) {
      console.log(error.message);
      setOrder("");
    }
  };
  return (
    <div>
      <Navbar />
      <div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
          <div className="col-xl-5 border-right">
            <Sidebar />
          </div>
          <div className="col-xl-7 border-right">
            <div className="pemesanan">
              <div className="part3-booking-hdr">
                <div className="prt-hdr">
                  <div className="desc-tiket">
                    <p>
                      Temukan e-ticket Anda di{" "}
                      <p style={{ color: "blue" }}>
                        <a href="/users" style={{ textDecoration: "none" }}>
                          {" "}
                          Disini{" "}
                        </a>
                      </p>
                    </p>
                  </div>
                </div>
              </div>
              {order !== "" ? (
                <div>
                  <div className="mt-4 mb-3 header-booking">
                    <b>Pembelian dalam Proses</b>
                  </div>
                  <div className="bdr-pesanan">
                    <div className="nomine-bill">
                      &nbsp;&nbsp;
                      <div className="col name-hdr mt-3">
                        No. Pesanan 152514251
                      </div>
                      <div
                        className="col mt-3 price"
                        style={{ justifyContent: "right" }}
                      >
                        <b>Rp 956.000.00,-</b>
                      </div>
                    </div>
                    <div className="air-goals">
                      &nbsp;&nbsp;
                      <div>
                        <img src={Note} alt="note-pict" />
                      </div>
                      <div>
                        <p>Palembang to Jakarta</p>
                      </div>
                    </div>
                    <div className="air-goals">
                      &nbsp;&nbsp;
                      <div>
                        <img src="./assets/dashboard/asuransi.svg" alt="" />
                      </div>
                      <div>
                        <p>Asuransi Perjalanan (Penerbangan)</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="col container-booking-white">
                    <img
                      src={Note}
                      alt="note-pict"
                      width={65}
                      style={{
                        marginLeft: "35px",
                      }}
                    />
                    <div
                      className="teks-white"
                      style={{
                        marginLeft: "50px",
                        marginTop: "20px",
                      }}
                    >
                      <p className="teks-white">
                        <b>Belum Ada Pesanan</b>
                      </p>
                      <p
                        className="teks-white"
                        style={{ fontSize: "13px", textAlign: "justify" }}
                      >
                        Seluruh pesanan anda akan muncul di sini, tapi kinni
                        anda belum punya satu pun. <br />
                        Mari buat pesanan{" "}
                        <a href="/users" style={{ textDecoration: "none" }}>
                          disini
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Order;
