import React from "react";

const notFound = () => {
  return (
    <section class="h-100 w-100 bg-white" id="not-found">
      <div className="empty-4-5 container mx-auto d-flex align-items-center justify-content-center flex-column">
        <img
          class="main-img img-fluid"
          src="./assets/notfound/404.svg"
          alt="main"
        />

        <div class="text-center w-100">
          <h1 class="title-text">Opss! Something Missing</h1>
          <p class="title-caption">
            The page you're looking for isn't found. We
            <div className="d-sm-block d-none">
              suggest you Back to Homepage.
            </div>
          </p>
          <div class="d-flex justify-content-center">
            <a
              href="/"
              className="btn btn-back d-inline-flex text-white"
              role={"button"}
            >
              Back to Homepage
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default notFound;
