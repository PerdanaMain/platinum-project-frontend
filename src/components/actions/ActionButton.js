import React, { useState } from "react";
import { Stepper, Step } from "react-form-stepper";
import { MdDescription } from "react-icons/md";
import StepWizard from "react-step-wizard";
import { Row, Col, Button, FormGroup, Label, Input } from "reactstrap";

import "./action.css";

const ActionButtons = (props) => {
  const handleBack = () => {
    props.previousStep();
  };

  const handleNext = () => {
    props.nextStep();
  };

  const handleFinish = () => {
    props.lastStep();
  };

  return (
    <div>
      <Row className="mb-5 ">
        {props.currentStep > 1 && (
          <Col className="d-grid ">
            <Button className="btn" onClick={handleBack}>
              Back
            </Button>
          </Col>
        )}
        <Col>
          {props.currentStep < props.totalSteps && (
            <div className="d-grid gap-2 col-7 mx-auto">
              <Button className="btn btn-primary" onClick={handleNext}>
                Next
              </Button>
            </div>
          )}
          {props.currentStep === props.totalSteps && (
            <div className="d-grid">
              <Button className="btn" onClick={handleFinish}>
                Finish
              </Button>
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
};

const One = (props) => {
  const bookingData = props.bookingData;
  const user = props.user;
  const [info1, setInfo1] = useState({});
  const [error, setError] = useState("");

  const onInputChanged = (event) => {
    const targetName = event.target.name;
    const targetValue = event.target.value;

    setInfo1((info1) => ({
      ...info1,
      [targetName]: targetValue,
    }));
  };

  const validate = () => {
    // if (!info1.name) setError("Name is mandatory field");
    // else {
    //   setError("");
    //   props.nextStep();
    //   props.userCallback(info1);
    // }
    setError("");
    props.nextStep();
    props.userCallback(info1);
  };

  // Currency IDR Formatter
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });
  return (
    <div className="container">
      <span style={{ color: "red" }}>{error}</span>
      <div className="row">
        <div className="col-md-6">
          <div className="container card">
            <div className="card-header">
              <h5 className="text-center">Passenger Order Information</h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <label htmlFor="firstname" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstname"
                    className="form-control"
                    value={user.firstname}
                    disabled
                  />
                </div>
                <div className="col-lg-6">
                  <label htmlFor="lastname" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="firstname"
                    className="form-control"
                    value={user.lastname}
                    disabled
                  />
                </div>
                <div className="col-lg-6">
                  <label htmlFor="email" className="form-label">
                    Gender
                  </label>
                  <input
                    type="text"
                    id="email"
                    className="form-control"
                    value={user.gender}
                    disabled
                  />
                </div>
                <div className="col-lg-6">
                  <label htmlFor="mphone" className="form-label">
                    Mobile Phone
                  </label>
                  <input
                    type="text"
                    id="mphone"
                    className="form-control"
                    value={user.phone}
                    disabled
                  />
                </div>
                <div className="col-lg-6-12">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    className="form-control"
                    value={user.email}
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="container card ">
            <div className="card-header">
              <h5 className="text-center">Detal Information</h5>
            </div>
            <div className="card-body">
              <div className="container text-center">
                {bookingData.secondTicket.ticket_id !== "" ? (
                  <>
                    <h2>Round Trip</h2>
                    <div className="row mt-3">
                      <div className="col-md">
                        <p>
                          {bookingData.firstTicket.departureAirport}{" "}
                          <i className="fa-solid fa-arrows-left-right mx-auto"></i>
                          {bookingData.firstTicket.arrivalAirport}
                        </p>
                      </div>
                      <div className="col-md">
                        <p>
                          {bookingData.secondTicket.departureAirport}{" "}
                          <i className="fa-solid fa-arrows-left-right mx-auto"></i>
                          {bookingData.secondTicket.arrivalAirport}
                        </p>
                      </div>
                    </div>
                  </>
                ) : (
                  <h2>One Trip</h2>
                )}
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="psg" className="form-label">
                    Passenger
                  </label>
                  <input
                    type="text"
                    id="psg"
                    className="form-control"
                    value={1}
                    disabled
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="psg" className="form-label">
                    Price
                  </label>
                  <input
                    type="text"
                    id="psg"
                    className="form-control"
                    value={formatter.format(
                      bookingData.firstTicket.price +
                        bookingData.secondTicket.price
                    )}
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <ActionButtons {...props} nextStep={validate} />
      </div>
    </div>
  );
};

const Two = (props) => {
  const [info2, setInfo2] = useState({});
  const [error, setError] = useState("");

  const onInputChanged = (event) => {
    const targetName = event.target.name;
    const targetValue = event.target.value;

    setInfo2((info2) => ({
      ...info2,
      [targetName]: targetValue,
    }));
  };

  const validate2 = () => {
    if (!info2.age) setError("Age is mandatory field");
    else {
      setError("");
      props.nextStep();
      props.userCallback(info2);
    }
  };

  return (
    <div className="container">
      <span style={{ color: "red" }}>{error}</span>
      <h1>This is step 2 content</h1>
      <FormGroup>
        <Label>
          Welcome <b>{props.user.name || ""}</b>
        </Label>
      </FormGroup>
      <FormGroup>
        <Label>Age: </Label>
        <Input
          type="text"
          name="age"
          placeholder="Enter your age"
          onChange={onInputChanged}
        />
      </FormGroup>
      <br />
      <ActionButtons {...props} nextStep={validate2} />
    </div>
  );
};

const Three = (props) => {
  const handleLastStep = () => {
    props.lastStep();
    props.completeCallback();
  };

  return (
    <div className="container">
      <h2>Summary user detail</h2>
      <p>Name: {props.user.name}</p>
      <p>Age: {props.user.age}</p>
      <br />
      <ActionButtons {...props} lastStep={handleLastStep} />
    </div>
  );
};

const Sample = (props) => {
  const [stepWizard, setStepWizard] = useState(null);
  const [user, setUser] = useState({});
  const [activeStep, setActiveStep] = useState(0);

  const assignStepWizard = (instance) => {
    setStepWizard(instance);
  };

  const assignUser = (val) => {
    console.log("parent receive user callback");
    console.log(val);
    setUser((user) => ({
      ...user,
      ...val,
    }));
  };

  const handleStepChange = (e) => {
    console.log("step change");
    console.log(e);
    setActiveStep(e.activeStep - 1);
  };

  const handleComplete = () => {
    alert("You r done. TQ");
  };

  return (
    <div>
      <Stepper activeStep={activeStep}>
        <Step label="Step 1" children={<MdDescription />} />
        <Step label="Personal Detail" />
        <Step label="Confirmation" />
      </Stepper>
      {/* NOTE: IMPORTANT !! StepWizard must contains at least 2 children components, else got error */}
      <StepWizard instance={assignStepWizard} onStepChange={handleStepChange}>
        <One
          userCallback={assignUser}
          bookingData={props.data}
          user={props.user}
        />
        <Two user={user} userCallback={assignUser} />
        <Three user={user} completeCallback={handleComplete} />
      </StepWizard>
    </div>
  );
};

export default Sample;
