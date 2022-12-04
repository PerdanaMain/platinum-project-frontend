import React from "react";

const roundTrip = () => {
  return (
    <div>
      <div className="container py-3">
        <form className="row">
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
            <div className="col-md-2"></div>
            <div className="col-md-2"></div>
          </div>
          <div className="row mb-3">
            <div className="col-md">
              <label htmlFor="pergi">Pergi</label>
              <input
                type="date"
                className="form-control"
                placeholder="Pergi"
                aria-label="Pergi"
                id="pergi"
              />
            </div>
            <div className="col-md">
              <label htmlFor="pulang">Pulang</label>
              <input
                type="date"
                className="form-control"
                placeholder="Pulang"
                aria-label="Pulang"
                id="pulang"
              />
            </div>
            <div className="col-md">
              <button className="btn btn-primary mt-4">Cek Penerbangan</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default roundTrip;
