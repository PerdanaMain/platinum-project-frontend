import React from "react";

const mainContent = (props) => {
  return (
    <div class="main-content">
      <h1 className="m-3">Welcome, {props.name}</h1>
    </div>
  );
};

export default mainContent;
