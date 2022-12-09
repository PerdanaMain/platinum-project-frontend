import { React, useState } from "react";
import axios from "axios";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Search = (props) => {
  const airports = props.data;

  const [btnView, setBtnView] = useState(false);
  const [dari, setDari] = useState("");
  const [ke, setKe] = useState("");
  const [pergi, setPergi] = useState("");
  const [pulang, setPulang] = useState("");

  const [err, setErr] = useState(null);
  const [flightResult, setFlightResult] = useState({
    roundTrip: {
      firstTrip: "",
      secondTrip: "",
    },
    oneTrip: "",
  });

  const [firstTicket, setFirstTicket] = useState({
    ticket_id: "",
    departureAirport: "",
    arrivalAirport: "",
    departureDate: "",
    price: "",
  });
  const [secondTicket, setSecondTicket] = useState({
    ticket_id: "",
    departureAirport: "",
    arrivalAirport: "",
    departureDate: "",
    price: "",
  });
  const [passArr, setPassArr] = useState([]);
  const [passenger, setPassenger] = useState({
    firstname: "",
    lastname: "",
    id_number: "",
    age: "",
  });

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const roundTripHandler = async (e) => {
    e.preventDefault();
    console.log({ dari, ke, pergi, pulang });

    if (dari === "") {
      setErr("Please fill the departure airport");
      return setShow(true);
    }
    if (ke === "") {
      setErr("Please fill the arrival airport");
      return setShow(true);
    }
    if (pergi === "") {
      setErr("Please fill the departure date");
      return setShow(true);
    }
    if (pulang === "") {
      setErr("Please fill the arrival date");
      return setShow(true);
    }
    try {
      // const get = await axios.get(
      //   `https://platinum-project-backend-production.up.railway.app/v1/api/tickets/search?departure=${dari}&arrival=${ke}&datedeparture=${dari}`
      // );
      const get = await axios.get(
        `https://platinum-project-backend-production.up.railway.app/v1/api/tickets`
      );
      const secondGet = await axios.get(
        "https://platinum-project-backend-production.up.railway.app/v1/api/tickets"
      );
      setFlightResult({
        roundTrip: {
          firstTrip: get.data.data,
          secondTrip: secondGet.data.data,
        },
      });
      console.log(flightResult);
      console.log(flightResult.oneTrip);
    } catch (error) {
      console.log(error);
    }
  };
  const oneTripHandler = async (e) => {
    e.preventDefault();
    console.log({ dari, ke, pergi });

    if (dari === "") {
      setErr("Please fill the departure airport");
      return setShow(true);
    }
    if (ke === "") {
      setErr("Please fill the arrival airport");
      return setShow(true);
    }
    if (pergi === "") {
      setErr("Please fill the departure date");
      return setShow(true);
    }

    try {
      // const get = await axios.get(
      //   `https://platinum-project-backend-production.up.railway.app/v1/api/tickets/search?departure=${dari}&arrival=${ke}&datedeparture=${dari}`
      // );
      const get = await axios.get(
        `https://platinum-project-backend-production.up.railway.app/v1/api/tickets`
      );

      setFlightResult({
        oneTrip: get.data.data,
      });
      console.log(flightResult);
      console.log(flightResult.roundTrip);
    } catch (error) {
      console.log(error);
    }
  };
  const addPassengerHandler = () => {
    setPassArr((prevPass) => [
      ...prevPass,
      {
        firstname: "Firman",
        lastname: "Perdana",
        id_number: "123",
        age: 20,
      },
    ]);
    console.log(passArr);
  };

  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  const [countPassOne, setCountPassOne] = useState("");
  const [countPassTwo, setCountPassTwo] = useState("");

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
                        Round Trip
                      </button>
                      <button
                        onClick={(e) => setBtnView(true)}
                        className={
                          "col-md btn-view point-panel-view-top-right btn " +
                          (btnView === true ? "bg-primary" : "")
                        }
                      >
                        One Trip
                      </button>
                    </div>
                  </div>
                </div>
                <div className="row ">
                  <div className="col-md panel-view point-panel-view-bottom-right">
                    {btnView === false ? (
                      <div className="container py-3">
                        <form onSubmit={roundTripHandler} className="row ">
                          <div className="row mb-3">
                            <div className="col-md">
                              <label htmlFor="dari">Departure Airport</label>
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
                            <div className="col-md sm-sm">
                              <label htmlFor="ke">Arrival Airport</label>
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
                            <div className="col-md ">
                              <label htmlFor="pergi">Departure Date</label>
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
                            <div className="col-md sm-sm">
                              <label htmlFor="pulang">
                                Round Departure Date
                              </label>
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
                                Get The Flight
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
                              <label htmlFor="dari">Departure Airport</label>
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
                            <div className="col-md sm-sm">
                              <label htmlFor="ke">Arrival Airport</label>
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
                              <label htmlFor="pergi">Departure Date</label>
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
                                Get The Flight
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

      <div className="container mt-4">
        {/* Flight Result */}
        {flightResult.oneTrip === undefined &&
        flightResult.roundTrip.firstTrip !== "" ? (
          <div className="row row-sm">
            <div className="col-md-5 col-sm-5">
              <div className="container card">
                <div className="card-header">
                  <h1>Ticket Information</h1>
                </div>
                <div className="card-body mb-3">
                  <h3 className="text-center">Round Trip Ticket</h3>
                  <div className="container card mb-3">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-6">
                          <p>
                            {firstTicket.departureAirport}{" "}
                            {firstTicket.departureAirport !== "" ? " -> " : ""}
                            {firstTicket.arrivalAirport}
                          </p>
                        </div>
                        <div className="col-md-6">
                          {firstTicket.price !== "" ? (
                            <div>
                              <p>Harga Tiket</p>
                              <p>
                                {formatter.format(parseInt(firstTicket.price))}
                              </p>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="row">
                          <div className="col-md">
                            <label htmlFor="passenger">Passenger</label>
                          </div>
                          <div className="col-md">
                            <input
                              type="number"
                              id="passenger"
                              className="form-control"
                              value={countPassOne}
                              onChange={(e) => {
                                setCountPassOne(parseInt(e.target.value));
                              }}
                              max={6}
                              min={1}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row border-top mt-2">
                        <div className="col-md mt-2">
                          <p className="fw-bold">Total</p>
                        </div>
                        <div className="col-md mt-2">
                          <p className="fw-bold">
                            {formatter.format(
                              parseInt(firstTicket.price) * countPassOne
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="container card mb-3">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-6">
                          <p>
                            {secondTicket.departureAirport}{" "}
                            {secondTicket.departureAirport !== "" ? " -> " : ""}
                            {secondTicket.arrivalAirport}
                          </p>
                        </div>
                        <div className="col-md-6">
                          {secondTicket.price !== "" ? (
                            <div>
                              <p>Harga Tiket</p>
                              <p>
                                {formatter.format(parseInt(secondTicket.price))}
                              </p>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <div className="col-md">
                              <label htmlFor="passenger">Passenger</label>
                            </div>
                            <div className="col-md">
                              <input
                                type="number"
                                id="passenger"
                                className="form-control"
                                value={countPassTwo}
                                onChange={(e) => {
                                  setCountPassTwo(parseInt(e.target.value));
                                }}
                                max={6}
                                min={1}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row border-top mt-2">
                          <div className="col-md mt-2">
                            <p className="fw-bold">Total</p>
                          </div>
                          <div className="col-md mt-2">
                            <p className="fw-bold">
                              {formatter.format(
                                parseInt(secondTicket.price) * countPassTwo
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-2 border-top">
                    <div className="col-md mt-2">
                      <p className="fw-bold">Total</p>
                    </div>
                    <div className="col-md mt-2">
                      <p className="fw-bold">
                        {formatter.format(
                          parseInt(firstTicket.price) * countPassOne +
                            parseInt(secondTicket.price) * countPassTwo
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="row">
                {firstTicket.ticket_id === "" ? (
                  Object.values(flightResult.roundTrip.firstTrip).map(
                    (data, index) => (
                      <div className="col-md-12 mb-3" key={index}>
                        <div className="row card mx-1">
                          <div className="col-md">
                            <div className="card-header">
                              <h2 className="text-center">
                                {data.flight.DepartureTerminal.code} to{" "}
                                {data.flight.ArrivalTerminal.code}
                              </h2>
                              <p className="text-center">
                                {data.flight.DepartureTerminal.country} -{" "}
                                {data.flight.ArrivalTerminal.country}
                              </p>
                            </div>
                          </div>
                          <div className="col-md">
                            <div className="card-body text-center">
                              <div className="row">
                                <div className="col-md">
                                  <p>Tanggal Tiba : </p>
                                  <p>
                                    {data.flight.departureTime.slice(0, 5)} -{" "}
                                    {data.flight.arrivalTime.slice(0, 5)}
                                  </p>
                                </div>
                                <div className="col-md pt-4">
                                  <p>
                                    {formatter.format(parseInt(data.price))}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md">
                            <div class="d-grid">
                              <button
                                class="btn btn-primary"
                                type="button"
                                onClick={() => {
                                  setFirstTicket({
                                    ticket_id: data.id,
                                    departureAirport:
                                      data.flight.DepartureTerminal.code,
                                    arrivalAirport:
                                      data.flight.ArrivalTerminal.code,
                                    departureDate: data.departureDate,
                                    price: data.price,
                                  });
                                }}
                              >
                                Book Now
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  )
                ) : secondTicket.ticket_id === "" ? (
                  Object.values(flightResult.roundTrip.secondTrip).map(
                    (data, index) => (
                      <div className="col-md-12 mb-3" key={index}>
                        <div className="row card mx-1">
                          <div className="col-md">
                            <div className="card-header">
                              <h2 className="text-center">
                                {data.flight.DepartureTerminal.code} to{" "}
                                {data.flight.ArrivalTerminal.code}
                              </h2>
                            </div>
                          </div>
                          <div className="col-md">
                            <div className="card-body text-center">
                              <div className="row">
                                <div className="col-md">
                                  <p>Tanggal Tiba : </p>
                                  <p>
                                    {data.flight.departureTime.slice(0, 5)} -{" "}
                                    {data.flight.arrivalTime.slice(0, 5)}
                                  </p>
                                </div>
                                <div className="col-md pt-4">
                                  <p>
                                    {formatter.format(parseInt(data.price))}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md">
                            <div class="d-grid">
                              <button
                                class="btn btn-primary"
                                type="button"
                                onClick={() => {
                                  setSecondTicket({
                                    ticket_id: data.id,
                                    departureAirport:
                                      data.flight.DepartureTerminal.code,
                                    arrivalAirport:
                                      data.flight.ArrivalTerminal.code,
                                    departureDate: data.departureDate,
                                    price: data.price,
                                  });
                                }}
                              >
                                Book Now
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  )
                ) : countPassOne !== "" ? (
                  <div className="col-md mb-3">
                    <div className="container card">
                      <div className="card-header text-center">
                        <h2>Passenger Identity</h2>
                      </div>
                      {[...Array(countPassOne + countPassTwo)].map((e, i) => (
                        <div className="card-body border-bottom">
                          <div className="row mb-2">
                            <div className="col-md-4">
                              <label className="py-2" htmlFor="firstname">
                                First Name
                              </label>
                            </div>
                            <div className="col-md-8">
                              <input
                                type="text"
                                id="firstname"
                                className="form-control"
                                value={passenger.firstname}
                                onChange={(e) => {
                                  setPassenger({ firstname: e.target.value });
                                }}
                              />
                            </div>
                          </div>
                          <div className="row mb-2">
                            <div className="col-md-4">
                              <label className="py-2" htmlFor="lastname">
                                Last Name
                              </label>
                            </div>
                            <div className="col-md-8">
                              <input
                                type="text"
                                id="lastname"
                                className="form-control"
                                value={passenger.lastname}
                                onChange={(e) => {
                                  setPassenger({ lastname: e.target.value });
                                }}
                              />
                            </div>
                          </div>
                          <div className="row mb-2">
                            <div className="col-md-4">
                              <label className="py-2" htmlFor="idnumber">
                                ID Number
                              </label>
                            </div>
                            <div className="col-md-8">
                              <input
                                type="text"
                                id="idnumber"
                                className="form-control"
                                value={passenger.id_number}
                                onChange={(e) => {
                                  setPassenger({ id_number: e.target.value });
                                }}
                              />
                            </div>
                          </div>
                          <div className="row mb-2">
                            <div className="col-md-4">
                              <label className="py-2" htmlFor="age">
                                Age
                              </label>
                            </div>
                            <div className="col-md-8">
                              <input
                                type="number"
                                id="age"
                                className="form-control"
                                value={passenger.age}
                                onChange={(e) => {
                                  setPassenger({ age: e.target.value });
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      ))}

                      <div className="d-grid card-footer">
                        <button
                          className="btn btn-primary"
                          onClick={addPassengerHandler}
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        ) : flightResult.roundTrip === undefined &&
          flightResult.oneTrip !== "" ? (
          <div className="row row-sm">
            <div className="col-md-5 col-sm-5">
              <div className="container card">
                <div className="card-header">
                  <h1>Ticket Information</h1>
                </div>
                <div className="card-body mb-3">
                  <h3 className="text-center">One Trip Ticket</h3>
                  <div className="container card mb-3">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-6">
                          <p>
                            {firstTicket.departureAirport}{" "}
                            {firstTicket.departureAirport !== "" ? " -> " : ""}
                            {firstTicket.arrivalAirport}
                          </p>
                        </div>
                        <div className="col-md-6">
                          {firstTicket.price !== "" ? (
                            <div>
                              <p>Harga Tiket</p>
                              <p>
                                {formatter.format(parseInt(firstTicket.price))}
                              </p>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="row">
                          <div className="col-md">
                            <label htmlFor="passenger">Passenger</label>
                          </div>
                          <div className="col-md">
                            <input
                              type="number"
                              id="passenger"
                              className="form-control"
                              value={countPassOne}
                              onChange={(e) => {
                                setCountPassOne(parseInt(e.target.value));
                              }}
                              max={6}
                              min={1}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row border-top mt-2">
                        <div className="col-md mt-2">
                          <p className="fw-bold">Total</p>
                        </div>
                        <div className="col-md mt-2">
                          <p className="fw-bold">
                            {formatter.format(
                              parseInt(firstTicket.price) * countPassOne
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row mt-2 border-top">
                    <div className="col-md mt-2">
                      <p className="fw-bold">Total</p>
                    </div>
                    <div className="col-md mt-2">
                      <p className="fw-bold">
                        {formatter.format(
                          parseInt(firstTicket.price) * countPassOne
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="row">
                {firstTicket.ticket_id === "" ? (
                  Object.values(flightResult.oneTrip).map((data, index) => (
                    <div className="col-md-12 mb-3" key={index}>
                      <div className="row card mx-1">
                        <div className="col-md">
                          <div className="card-header">
                            <h2 className="text-center">
                              {data.flight.DepartureTerminal.code} to{" "}
                              {data.flight.ArrivalTerminal.code}
                            </h2>
                            <p className="text-center">
                              {data.flight.DepartureTerminal.country} -{" "}
                              {data.flight.ArrivalTerminal.country}
                            </p>
                          </div>
                        </div>
                        <div className="col-md">
                          <div className="card-body text-center">
                            <div className="row">
                              <div className="col-md">
                                <p>Tanggal Tiba : </p>
                                <p>
                                  {data.flight.departureTime.slice(0, 5)} -{" "}
                                  {data.flight.arrivalTime.slice(0, 5)}
                                </p>
                              </div>
                              <div className="col-md pt-4">
                                <p>{formatter.format(parseInt(data.price))}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md">
                          <div class="d-grid">
                            <button
                              class="btn btn-primary"
                              type="button"
                              onClick={() => {
                                setFirstTicket({
                                  ticket_id: data.id,
                                  departureAirport:
                                    data.flight.DepartureTerminal.code,
                                  arrivalAirport:
                                    data.flight.ArrivalTerminal.code,
                                  departureDate: data.departureDate,
                                  price: data.price,
                                });
                              }}
                            >
                              Book Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : countPassOne !== "" ? (
                  <div className="col-md mb-3">
                    <div className="container card">
                      <div className="card-header text-center">
                        <h2>Passenger Identity</h2>
                      </div>
                      {[...Array(countPassOne)].map((e, i) => (
                        <div className="card-body border-bottom">
                          <div className="row mb-2">
                            <div className="col-md-4">
                              <label className="py-2" htmlFor="firstname">
                                First Name
                              </label>
                            </div>
                            <div className="col-md-8">
                              <input
                                type="text"
                                id="firstname"
                                className="form-control"
                                value={passenger.firstname}
                                onChange={(e) => {
                                  setPassenger({ firstname: e.target.value });
                                }}
                              />
                            </div>
                          </div>
                          <div className="row mb-2">
                            <div className="col-md-4">
                              <label className="py-2" htmlFor="lastname">
                                Last Name
                              </label>
                            </div>
                            <div className="col-md-8">
                              <input
                                type="text"
                                id="lastname"
                                className="form-control"
                                value={passenger.lastname}
                                onChange={(e) => {
                                  setPassenger({ lastname: e.target.value });
                                }}
                              />
                            </div>
                          </div>
                          <div className="row mb-2">
                            <div className="col-md-4">
                              <label className="py-2" htmlFor="idnumber">
                                ID Number
                              </label>
                            </div>
                            <div className="col-md-8">
                              <input
                                type="text"
                                id="idnumber"
                                className="form-control"
                                value={passenger.id_number}
                                onChange={(e) => {
                                  setPassenger({ id_number: e.target.value });
                                }}
                              />
                            </div>
                          </div>
                          <div className="row mb-2">
                            <div className="col-md-4">
                              <label className="py-2" htmlFor="age">
                                Age
                              </label>
                            </div>
                            <div className="col-md-8">
                              <input
                                type="number"
                                id="age"
                                className="form-control"
                                value={passenger.age}
                                onChange={(e) => {
                                  setPassenger({ age: e.target.value });
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                      <div className="d-grid card-footer">
                        <button
                          className="btn btn-primary"
                          onClick={addPassengerHandler}
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      {err === null ? (
        ""
      ) : (
        <Modal show={show}>
          <Modal.Header>
            <Modal.Title>Sorry</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div className="text-danger d-flex align-items-center">
              <i className="fa-solid fa-circle-exclamation"></i>
              <div className="ps-3">{err}</div>
            </div>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </section>
  );
};

export default Search;
