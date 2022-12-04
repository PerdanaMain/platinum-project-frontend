import { React, useState } from "react";
import RoundTrip from "./roundTrip";
import OneTrip from "./oneTrip";

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
                        Pulang - Pergi
                      </button>
                      <button
                        onClick={(e) => setBtnView(true)}
                        className={
                          "col-md btn-view point-panel-view-top-right btn " +
                          (btnView === true ? "bg-primary" : "")
                        }
                      >
                        Sekali Pergi
                      </button>
                    </div>
                  </div>
                </div>
                <div className="row ">
                  <div className="col-md panel-view point-panel-view-bottom-right">
                    {btnView === false ? <RoundTrip /> : <OneTrip />}
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
