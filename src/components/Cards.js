import React from "react";
import "../css/index.css";
const Cards = () => {
  const coloringgoals = (x) => {
    x.classList.add("bg-white");
    x.classList.add("rounded-24");
    x.childNodes[1].style.display = "none";
    x.childNodes[3].style.display = "block";
  };
  const normalgoals = (x) => {
    x.classList.remove("bg-white");
    x.classList.remove("rounded-24");
    x.childNodes[1].style.display = "block";
    x.childNodes[3].style.display = "none";
  };

  return (
    <div className="container pb-4 px-4">
      <div class="row text-center d-block pt-5 pb-md-4">
        <h1 class="my-3">Why choose us</h1>
        <p>House is commited to helping its clients to reach their goals.</p>
      </div>
      <div className="row py-5 choose">
        <div
          class="col-md-3 p-4"
          onmouseover="coloringgoals(this)"
          onmouseout="normalgoals(this)"
        >
          <img
            src="https://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content-House/taxes.svg"
            alt="taxes"
            class="img-fluid"
          />
          <p class="font-weight-bold mt-4 mb-1 cl-blue">Tax Advantage</p>
          <p class="mb-0">
            Tax advantage which applies to certain accounts or investments.
          </p>
        </div>
        <div
          class="col-md-3 p-4"
          onmouseover="coloringgoals(this)"
          onmouseout="normalgoals(this)"
        >
          <img
            src="https://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content-House/user.svg"
            alt="user"
            class="img-fluid"
          />
          <p class="font-weight-bold mt-4 mb-1 cl-blue">Property Insurance</p>
          <p class="mb-0">
            A series of policies that offer either property protection of
            liability coverage.
          </p>
        </div>
        <div
          class="col-md-3 p-4"
          onmouseover="coloringgoals(this)"
          onmouseout="normalgoals(this)"
        >
          <img
            src="https://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content-House/discount.svg"
            alt="discount"
            class="img-fluid"
          />
          <p class="font-weight-bold mt-4 mb-1 cl-blue">Lowest Commision</p>
          <p class="mb-0">
            No longer have to negatiate commissions and haggle with other
            agents.
          </p>
        </div>
        <div
          class="col-md-3 p-4"
          onmouseover="coloringgoals(this)"
          onmouseout="normalgoals(this)"
        >
          <img
            src="https://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content-House/calendar.svg"
            alt="calendar"
            class="img-fluid"
          />
          <p class="font-weight-bold mt-4 mb-1 cl-blue">House Now</p>
          <p class="mb-0">
            Easy booking system for a host. Try our innovative model.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
