import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// components
import Navbar from "../../../components/navbar/Navbar";
import Sidebar from "../../../components/sidebar/Sidebar";
import Footer from "../../../components/footer/Footer";

//images
import Bali from "../../../assets/dashboard/bali.jpg";
import Note from "../../../assets/dashboard/Vector.svg";

import Located from "../../../assets/dashboard/located.png";

import server from "../../../server";

import "./wishlist.css";
const Wishtlist = () => {
  const navigate = useNavigate();
  const accessToken = sessionStorage.getItem("accessToken");
  const [wishlist, setWishlist] = useState("");

  useEffect(() => {
    decoder();
    getWishList();
  }, []);
  const decoder = async () => {
    try {
      if (!accessToken) {
        navigate("/404");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getWishList = async () => {
    try {
      const get = await axios.get(`${server}/v1/api/bookings`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setWishlist(get.data.data);
    } catch (error) {
      console.log(error.message);
      setWishlist("");
    }
  };
  return (
    <div>
      <Navbar />
      <div className="container rounded bg-white my-5">
        <div className="row">
          <div className="col-xl-5 border-right">
            <Sidebar />
          </div>
          <div className="col-xl-7 border-right">
            <div
              className="teks-cont"
              style={{
                marginLeft: "22px",
                fontSize: "23px",
              }}
            >
              <b>My Wishlist</b>
              <p style={{ fontSize: "15px" }} className="hdr2-wishlist">
                Tempat untuk menyimpan <span> item favorit anda!</span>
              </p>
            </div>
            {wishlist !== "" ? (
              <div className="wishlist">
                <div
                  className="teks-cont mt-5"
                  style={{
                    marginLeft: "22px",
                    fontFamily: "Poppins",
                    fontSize: "23px",
                  }}
                >
                  <b>My Wishlist</b>
                  <p style={{ "font-size": "15px" }} className="hdr2-wishlist">
                    Tempat untuk menyimpan <span></span>
                    item favorit anda!
                  </p>
                </div>
                <div>
                  <div className="col container-wishlist">
                    <div className="img-wishlist">
                      <img src={Bali} alt="bali-pict" />
                    </div>
                    <div
                      className="desc-img"
                      style={{
                        marginTop: "20px",
                      }}
                    >
                      <p>Villa</p>
                      <p>
                        <b>Balinese</b>
                      </p>
                      <p style={{ fontSize: "13px" }}>
                        Wednesday, 10th Mai 2023
                      </p>
                      <p style={{ fontSize: "13px" }}>
                        <img src={Located} alt="pict" />
                        Bali, Indonesia
                      </p>
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
                      <b>There's nothing any wishlists</b>
                    </p>
                    <p
                      className="teks-white"
                      style={{ fontSize: "13px", textAlign: "justify" }}
                    >
                      Seluruh wishlist anda akan muncul di sini, tapi kini anda
                      belum punya satu pun. <br />
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
      <Footer />
    </div>
  );
};

export default Wishtlist;
