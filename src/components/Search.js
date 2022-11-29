import { React, useState } from "react";
import BookingView from "./bookingView";
import InfoView from "./infoView";
import "../css/index.css";

const Search = () => {
  const [btnView, setBtnView] = useState(false);
  console.log(btnView);
  return (
    <section className="mb-5" id="search-panel">
      <div className="container search-panel">
        <div className="row" style={{ borderRadius: "20px" }}>
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-1 plane-panel">
                <img src="./assets/landing/panel-plane.svg" alt="plane panel" />
                <p>Penerbangan</p>
              </div>
              <div className="col-md-11">
                <div className="row">
                  <div className="col-md">
                    <div className="row button-view">
                      <button
                        onClick={(e) => setBtnView(false)}
                        className={
                          "col-md btn-view btn " +
                          (btnView === false ? "bg-primary" : "")
                        }
                      >
                        Booking
                      </button>
                      <button
                        onClick={(e) => setBtnView(true)}
                        className={
                          "col-md btn-view point-panel-view-top-right btn " +
                          (btnView === true ? "bg-primary" : "")
                        }
                      >
                        Info Penerbangan
                      </button>
                    </div>
                  </div>
                </div>
                <div className="row ">
                  <div className="col-md panel-view point-panel-view-bottom-right">
                    {btnView === false ? <BookingView /> : <InfoView />}
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
