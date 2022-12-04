import React from "react";
<<<<<<< HEAD
=======
import "../css/index.css";

>>>>>>> a830d3f9a97b68ed9c903bf0989d823a0000e731
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

<<<<<<< HEAD
const Services = () => {
  return (
    <div>
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
    </div>
=======
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
>>>>>>> a830d3f9a97b68ed9c903bf0989d823a0000e731
  );
};

export default Services;
