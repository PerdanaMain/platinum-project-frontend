import React from "react";
import "../../css/index.css";

const Search = () => {
  return (
    <section className="mb-5">
      <div className="container">
        <div className="row" style={{ borderRadius: "20px" }}>
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-1 plane-panel">
                <img src="./assets/landing/panel-plane.svg" alt="plane panel" />
                <p>Penerbangan</p>
              </div>
              <div className="col-md-11">
                <div className="row mb-3">
                  <div className="col-md">
                    <div className="row">
                      <div className="col-md btn-view">
                        <button className="btn" style={{ border: "1px solid" }}>
                          Booking
                        </button>
                      </div>
                      <div className="col-md ">Info Penerbangan</div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md">
                    <p>Panel View</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
