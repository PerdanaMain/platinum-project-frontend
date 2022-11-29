import React from "react";
import "../css/index.css";
const bookingView = () => {
  return (
    <div className="container py-3">
      <form className="row">
        <div className="col-md">
          <div className="form-group mb-3">
            <div className="form-check form-check-inline">
              <input
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
                className="form-check-input"
                checked
              />
              <label htmlFor="inlineRadio1" className="form-check-label">
                Pulang Pergi
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="sekali-jalan"
                className="form-check-input"
              />
              <label htmlFor="inlineRadio2" className="form-check-label">
                Sekali Jalan
              </label>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md">
            <label htmlFor="dari">Dari</label>
            <input
              type="text"
              className="form-control"
              placeholder="Dari"
              aria-label="Dari"
              id="dari"
            />
          </div>
          <div className="col-md">
            <label htmlFor="ke">Ke</label>
            <input
              type="text"
              className="form-control"
              placeholder="Ke"
              aria-label="Ke"
              id="ke"
            />
          </div>
          <div className="col-md-2">
            <label htmlFor="pergi">Pergi</label>
            <input
              type="date"
              className="form-control"
              placeholder="Pergi"
              aria-label="Pergi"
              id="pergi"
            />
          </div>
          <div className="col-md-2">
            <label htmlFor="pulang">Pulang</label>
            <input
              type="date"
              className="form-control"
              placeholder="Pulang"
              aria-label="Pulang"
              id="pulang"
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md">
            <label htmlFor="penumpang">Penumpang</label>
            <select name="" id="penumpang" className="form-select">
              <option value="">
                Dewasa
                <input type="number" />
              </option>
            </select>
          </div>
          <div className="col-md">
            <label htmlFor="kelas">Kelas Penerbangan</label>
            <input
              type="text"
              className="form-control"
              placeholder="Kelas Penerbangan"
              aria-label="Ke"
              id="kelas"
            />
          </div>
          <div className="col-md">
            <button className="btn btn-primary mt-4">Book Now</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default bookingView;
