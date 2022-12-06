import { React, useState } from "react";

const Search = (props) => {
  const airports = props.data;
  const tickets = props.ticket;
  const [btnView, setBtnView] = useState(false);
  const [dari, setDari] = useState("");
  const [ke, setKe] = useState("");
  const [pergi, setPergi] = useState("");
  const [pulang, setPulang] = useState("");

  const roundTripHandler = (e) => {
    e.preventDefault();
    console.log({ dari, ke, pergi, pulang });

    for (let i = 0; i < tickets.length; i++) {
      if (tickets[i].flight.departureAirport === parseInt(dari)) {
      }
    }
  };
  const oneTripHandler = (e) => {
    e.preventDefault();
    console.log({ dari, ke, pergi });
  };

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
                          "col-md btn-view btn-left btn " +
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
                    {btnView === false ? (
                      <div className="container py-3">
                        <form onSubmit={roundTripHandler} className="row">
                          <div className="row mb-3">
                            <div className="col-md">
                              <label htmlFor="dari">Dari</label>
                              <select
                                id="dari"
                                className="form-select"
                                value={dari}
                                onChange={(e) => {
                                  setDari(e.target.value);
                                }}
                              >
                                {Object.values(airports).map((data, index) => (
                                  <option key={index} value={data.id}>
                                    {data.city} ({data.code})
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div className="col-md">
                              <label htmlFor="ke">Ke</label>
                              <select
                                id="ke"
                                className="form-select"
                                value={ke}
                                onChange={(e) => {
                                  setKe(e.target.value);
                                }}
                              >
                                {Object.values(airports).map((data, index) => (
                                  <option key={index} value={data.id}>
                                    {data.city} ({data.code})
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col-md">
                              <label htmlFor="pergi">Pergi</label>
                              <input
                                type="date"
                                className="form-control"
                                placeholder="Pergi"
                                id="pergi"
                                value={pergi}
                                onChange={(e) => {
                                  setPergi(e.target.value);
                                }}
                              />
                            </div>
                            <div className="col-md">
                              <label htmlFor="pulang">Pulang</label>
                              <input
                                type="date"
                                className="form-control"
                                placeholder="Pulang"
                                id="pulang"
                                value={pulang}
                                onChange={(e) => {
                                  setPulang(e.target.value);
                                }}
                              />
                            </div>
                            <div className="col-md">
                              <button className="btn btn-primary mt-4">
                                Cek Penerbangan
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    ) : (
                      <div className="container py-3">
                        <form onSubmit={oneTripHandler}>
                          <div className="row mb-3">
                            <div className="col-md">
                              <label htmlFor="dari">Dari</label>
                              <select
                                id="dari"
                                className="form-select"
                                value={dari}
                                onChange={(e) => {
                                  setDari(e.target.value);
                                }}
                              >
                                {Object.values(airports).map((data, index) => (
                                  <option key={index} value={data.id}>
                                    {data.city} ({data.code})
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div className="col-md">
                              <label htmlFor="ke">Ke</label>
                              <select
                                id="ke"
                                className="form-select"
                                value={ke}
                                onChange={(e) => {
                                  setKe(e.target.value);
                                }}
                              >
                                {Object.values(airports).map((data, index) => (
                                  <option key={index} value={data.id}>
                                    {data.city} ({data.code})
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col-md">
                              <label htmlFor="pergi">Tanggal</label>
                              <input
                                type="date"
                                className="form-control"
                                placeholder="Pergi"
                                id="pergi"
                                value={pergi}
                                onChange={(e) => {
                                  setPergi(e.target.value);
                                }}
                              />
                            </div>
                            <div className="col-md">
                              <button className="btn btn-primary mt-4">
                                Cek Penerbangan
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    )}
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
