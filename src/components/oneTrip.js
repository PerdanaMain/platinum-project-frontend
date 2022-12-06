import React from "react";

const oneTrip = (props) => {
  const airport = props.data;
  return (
    <div>
      <div className="container py-3">
        <form>
          <div className="row mb-3">
            <div className="col-md">
              <label htmlFor="dari">Dari</label>
              <select id="dari" className="form-select">
                {Object.values(airport).map((data, index) => (
                  <option key={index}>
                    {data.city} ({data.code})
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md">
              <label htmlFor="ke">Ke</label>
              <select id="ke" className="form-select">
                {Object.values(airport).map((data, index) => (
                  <option key={index}>
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
                aria-label="Pergi"
                id="pergi"
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

export default oneTrip;
