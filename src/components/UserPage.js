import React from "react";

const UserPage = () => {
  return (
    <div className="container rounded bg-white mt-5 mb-5">
    <div className="row">
        <div className="col-xl-5 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/>
              <span className="font-weight-bold">Edogaru</span>
              <span className="text-black-50">edogaru@mail.com.my</span>
              <span> </span>
            </div>
            <div className="card card-default">
      <div className="card-header">
        <h2>Settings</h2>
      </div>
      <div class="nav nav-sidebar mb-2">
                                      
                                        <li class="nav-item">
                                            <a href="#" class="nav-link" data-abc="true">
                                                Profile
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="#" class="nav-link" data-abc="true">
                                                Pesanan Saya
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="#" class="nav-link" data-abc="true">
                                                Notification
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="#" class="nav-link" data-abc="true">
                                                E-wallet
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="#" class="nav-link" data-abc="true">
                                                Wishlist
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="#" class="nav-link" data-abc="true">

                                                Booking
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="#" class="nav-link" data-abc="true">
                                                
                                                Logout
                                            </a>
                                        </li>
                                      
                                    
                                </div>
    </div>
        </div>
        <div className="col-xl-7 border-right">
            <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="text-right">Profile Settings</h4>
                </div>
                <div className="row mt-2">
                    <div className="col-md-6">
                      <label className="form-label">First Name</label>
                      <input
                        type="text"
                        placeholder="Nina"
                        id="firstname"
                        className="form-control"
                        required
                        name=""
                      />
                      </div>
                    <div className="col-md-6">
                    <label className="form-label">Last Name</label>
                    <input type="text"
                        placeholder="Boobo"
                        id="lastname"
                        className="form-control"
                        required
                        name="email"/>
                      </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-12">
                      <label className="form-label">Email</label>
                    <input 
                        type="text"
                        id="email"
                        className="form-control"
                        required
                        name="email"
                        placeholder="example100@gmail.com"/>
                    </div>
                    <div className="col-md-12">
                      <label className="form-label">No HP</label>
                    <input type="nohp"
                        id="Username"
                        className="form-control"
                        required
                        name="email" 
                        placeholder="08214333846"/>
                    </div>
                    <div className="col-md-12">
                      <label className="form-label">Country</label>
                      <input type="email"
                        id="Username"
                        className="form-control"
                        required
                        name="email" 
                        placeholder="select country"/>
                    </div>
                    <div className="col-md-12">
                      <label className="form-label">Province</label>
                      <input type="email"
                        id="Username"
                        className="form-control"
                        required
                        name="email" 
                        placeholder="select country" />

                    </div>
                    <div className="col-md-12">
                      <label className="form-label">City</label>
                    <input type="email"
                        id="Username"
                        className="form-control"
                        required
                        name="email" 
                        placeholder="select city"/>

                    </div>
                    <div className="col-md-12">
                      <label className="form-label">Address</label>
                      <input type="email"
                        id="Username"
                        className="form-control"
                        required
                        name="email" 
                        placeholder="Perumahan Denanyar Indah Blok-R5"/>

                    </div>
                    <div className="col-md-12">
                      <label className="form-label">Postal Code</label>
                      <input type="email"
                        id="Username"
                        className="form-control"
                        required
                        name="email" 
                        placeholder="098xx"/>

                    </div>
                    <div className="col-md-12">
                      <label className="form-label">Birthday</label>
                      <input type="date"
                        className="form-control"
                        placeholder="mm/dd/yyyy"
                        id="birthday"
                        required
                        name="birthdate"/>

                    </div>
                </div>
                
                    <div className="col-md-12">
                      <label className="form-label">Password</label>
                      <input type="password"
                        className="form-control"
                        name="password"
                        placeholder="password"
                        aria-label="Password"
                        id="password"
                        required/>
                  </div>                
                <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button">Save Profile</button></div>
            </div>
        </div>
        
    </div>
    
<div class="row">
  <div class="col-md-12">

    
    <ul class="stepper stepper-horizontal">

     
      <li class="completed">
        <a href="#!">
          <span class="circle">1</span>
          <span class="label">First step</span>
        </a>
      </li>

      
      <li class="active">
        <a href="#!">
          <span class="circle">2</span>
          <span class="label">Second step</span>
        </a>
      </li>

     
      <li class="warning">
        <a href="#!">
          <span class="circle"><i class="fas fa-exclamation"></i></span>
          <span class="label">Third step</span>
        </a>
      </li>

    </ul>
    

  </div>
</div>

</div>
  );
};

export default UserPage;