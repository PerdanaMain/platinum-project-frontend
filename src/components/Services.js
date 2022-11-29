import React from "react";
import "../css/index.css";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import "../css/index.css";

const Services = () => {
  return (
    <section id="our-service" className="mt-4">
      <div className="desc-slides">
        <h1>Our Service</h1>
      </div>
      <div className="container">
        <OwlCarousel className="owl-theme" loop margin={10} autoplay nav dots>
          <div className="item">
            <img src="./assets/landing/service 1.svg" alt="" />
          </div>
          <div className="item">
            <img src="./assets/landing/service 2.svg" alt="" />
          </div>
          <div className="item">
            <img src="./assets/landing/service 3.svg" alt="" />
          </div>
        </OwlCarousel>
      </div>
    </section>
  );
};

export default Services;
