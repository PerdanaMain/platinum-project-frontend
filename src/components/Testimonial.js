import React from "react";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import "../css/index.css";

const Testimonial = () => {
  return (
    <section id="testimonial">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-5">
            <img
              src="./assets/landing/Group 1342.svg"
              alt="person pict"
              width={400}
              className="ms-5"
            />
          </div>
          <div className="col-md-7">
            <div className="row mt-2 testimonial-tagline">
              <p className="p-biru"> What They Say</p>
              <p className="p-normal">what our customer say about us</p>
              <OwlCarousel
                className="owl-theme "
                loop
                items={1}
                autoplay
                nav
                dots
              >
                <div className="item testimonial-carousel">
                  <p>
                    "Saat yang tepat dari penghargaan tertinggi yang diberikan
                    Flit Airlines untuk membernya untuk menikmati layanan yang
                    perfect untuk member dalam pelayanan sebelum terbang. Flit
                    Airlines terus terdepan.”
                  </p>
                  <div className="details">
                    <img
                      src="./assets/landing/Group 1345.svg"
                      alt="testimonial person"
                      className="testimonial-img"
                    />
                    <span class="name">Novi PS</span>&nbsp;&nbsp;
                    <span class="job">• Backpackers</span>
                    <img
                      src="./assets/landing/Ratings.svg"
                      alt="rate"
                      className="rating"
                    />
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
