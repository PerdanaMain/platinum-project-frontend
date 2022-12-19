import React from "react";

import Navbar from "../../../../components/admin/navbar/Navbar";
import Sidebar from "../../../../components/admin/sidebar/Sidebar";

import "./update.css";
const Update = () => {
  return (
    <div className="update">
      <Sidebar />
      <div className="updateContainer">
        <Navbar />
        <div className="top">
          <h1>Update User, (Nama Lengkap)</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              alt="no-profile"
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">Image :</label>
                <input type="file" id="file" className="form-control" />
              </div>
              <div className="formInput">
                <label htmlFor="firstname">First Name</label>
                <input type="text" id="firstname" className="form-control" />
              </div>
              <div className="formInput">
                <label htmlFor="lastname">Last Name</label>
                <input type="text" id="lastname" className="form-control" />
              </div>
              <div className="formInput">
                <label htmlFor="phone">Phone</label>
                <input type="text" id="phone" className="form-control" />
              </div>
              <div className="formInput">
                <label htmlFor="birthdate">Birth Date</label>
                <input type="date" id="birthdate" className="form-control" />
              </div>
              <div className="formInput">
                <label htmlFor="address">Address</label>
                <input type="text" id="address" className="form-control" />
              </div>
              <div className="formInput">
                <label htmlFor="city">City</label>
                <input type="text" id="city" className="form-control" />
              </div>
              <div className="formInput">
                <label htmlFor="country">Country</label>
                <input type="text" id="Country" className="form-control" />
              </div>
              <button className="btn btn-success">Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
