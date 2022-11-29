import React from "react";
import "../css/index.css";
const Promotion = () => {
  return (
    <section id="promotion">
      <div className="container pb-5">
        <div className="row">
          <div className="col-md desc-pr">
            <p>
              Terbang <span>Lebih Hemat</span> ke berbagai destinasi
            </p>
            <p className="flit-tagline">#easy way to flight</p>
            <a className="btn-tagline">
              <button className="btn btn-primary ">Info Lebih Lanjut</button>
            </a>
          </div>
          <div className="col-md">
            <div className="container mt-5">
              <div className="text-center">
                <h1>BEST DEAL</h1>
                <p>Harga hemat dan potongan tambahan hingga Rp. 400.000 hanya di 10 Desember 2022 hingga 31 Januari 2023</p>
              </div>
              <div>
                <img src="./assets/landing/Promo.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotion;
