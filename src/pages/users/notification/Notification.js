import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import Sidebar from "../../../components/sidebar/Sidebar";

import "./notification.css";
const Notification = () => {
  const navigate = useNavigate();
  const accessToken = sessionStorage.getItem("accessToken");

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
    <div>
      <Navbar />
      <div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
          <div className="col-md-5 border-right">
            <Sidebar />
          </div>
          <div className="col-md-6 border-right">
            <div>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 class="m-b-50 heading-line">
                  Notifications <i class="fa fa-bell text-muted"></i>
                </h4>
              </div>
              <section class="section-50">
                <div class="container">
                  <div class="notification-ui_dd-content">
                    <div class="notification-list notification-list--unread">
                      <div class="notification-list_content">
                        <div class="notification-list_img">
                          <img src="https://i.imgur.com/zYxDCQT.jpg" alt="" />
                        </div>
                        <div class="notification-list_detail">
                          <p>
                            <b>John Doe</b> reacted to your post
                          </p>
                          <p class="text-muted">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Unde, dolorem.
                          </p>
                          <p class="text-muted">
                            <small>10 mins ago</small>
                          </p>
                        </div>
                      </div>
                      <div class="notification-list_feature-img">
                        <img src="https://i.imgur.com/AbZqFnR.jpg" alt="" />
                      </div>
                    </div>
                    <div class="notification-list notification-list--unread">
                      <div class="notification-list_content">
                        <div class="notification-list_img">
                          <img src="https://i.imgur.com/w4Mp4ny.jpg" alt="" />
                        </div>
                        <div class="notification-list_detail">
                          <p>
                            <b>Richard Miles</b> liked your post
                          </p>
                          <p class="text-muted">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Unde, dolorem.
                          </p>
                          <p class="text-muted">
                            <small>10 mins ago</small>
                          </p>
                        </div>
                      </div>
                      <div class="notification-list_feature-img">
                        <img src="https://i.imgur.com/AbZqFnR.jpg" alt="" />
                      </div>
                    </div>
                    <div class="notification-list">
                      <div class="notification-list_content">
                        <div class="notification-list_img">
                          <img src="https://i.imgur.com/ltXdE4K.jpg" alt="" />
                        </div>
                        <div class="notification-list_detail">
                          <p>
                            <b>Brian Cumin</b> reacted to your post
                          </p>
                          <p class="text-muted">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Unde, dolorem.
                          </p>
                          <p class="text-muted">
                            <small>10 mins ago</small>
                          </p>
                        </div>
                      </div>
                      <div class="notification-list_feature-img">
                        <img src="https://i.imgur.com/bpBpAlH.jpg" alt="" />
                      </div>
                    </div>
                    <div class="notification-list">
                      <div class="notification-list_content">
                        <div class="notification-list_img">
                          <img src="https://i.imgur.com/CtAQDCP.jpg" alt="" />
                        </div>
                        <div class="notification-list_detail">
                          <p>
                            <b>Lance Bogrol</b> reacted to your post
                          </p>
                          <p class="text-muted">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Unde, dolorem.
                          </p>
                          <p class="text-muted">
                            <small>10 mins ago</small>
                          </p>
                        </div>
                      </div>
                      <div class="notification-list_feature-img">
                        <img src="https://i.imgur.com/iIhftMJ.jpg" alt="" />
                      </div>
                    </div>
                    <div class="notification-list">
                      <div class="notification-list_content">
                        <div class="notification-list_img">
                          <img src="https://i.imgur.com/zYxDCQT.jpg" alt="" />
                        </div>
                        <div class="notification-list_detail">
                          <p>
                            <b>Parsley Montana</b> reacted to your post
                          </p>
                          <p class="text-muted">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Unde, dolorem.
                          </p>
                          <p class="text-muted">
                            <small>10 mins ago</small>
                          </p>
                        </div>
                      </div>
                      <div class="notification-list_feature-img">
                        <img src="https://i.imgur.com/bpBpAlH.jpg" alt="" />
                      </div>
                    </div>
                  </div>

                  <div class="text-center">
                    <a href="#!" class="dark-link">
                      Load more activity
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Notification;
