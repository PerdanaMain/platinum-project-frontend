import React, { useState } from "react";
import { Stepper, Step } from "react-form-stepper";
import { MdDescription } from "react-icons/md";
import StepWizard from "react-step-wizard";
import { Row, Col, Button, FormGroup, Label, Input } from "reactstrap";

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
      <Row>
        {props.currentStep > 1 && (
          <Col>
            <Button onClick={handleBack}>Back</Button>
          </Col>
        )}
        <Col>
          {props.currentStep < props.totalSteps && <Button onClick={handleNext}>Next</Button>}
          {props.currentStep === props.totalSteps && <Button onClick={handleFinish}>Finish</Button>}
        </Col>
      </Row>
    </div>
  );
};

const One = (props) => {
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
    if (!info1.name) setError("Harap isi form tersebut");
    else {
      setError("");
      props.nextStep();
      props.userCallback(info1);
    }
  };

  return (
    <div>
      <div>
        <h5 className="done">Data Pemesan</h5>
        <div className="card">
          <span className="text-center" style={{ color: "red" }}>
            {error}
          </span>
          <div className="card-body">
            <div className="container">
              <div className="row align-items-start">
                <div className="col">
                  <FormGroup>
                    <Label className="text-dark">Nama Depan & Tengah: </Label>
                    <Input type="text" name="name" placeholder="Enter your name" onChange={onInputChanged} />
                    <div className="font">tanpa gelar dan tanda baca</div>
                  </FormGroup>
                </div>
                <div className="col">
                  <FormGroup>
                    <Label className="text-dark">Nama Belakang: </Label>
                    <Input type="text" name="name" placeholder="Enter your name" onChange={onInputChanged} />
                    <div className="font">tanpa gelar dan tanda baca</div>
                  </FormGroup>
                </div>
                <div className="form-check form-check-inline ms-3">
                  <input className="form-check-input" type="radio" name="gender" id="inlineRadio1" value="perempuan" />
                  <label className="form-check-label" for="inlineRadio1">
                    Tidak punya nama belakang
                  </label>
                </div>
                <br />
              </div>
              <div className="row align-items-start">
                <div className="col">
                  <label className="form-check-label" for="inlineRadio1">
                    No. Handphone
                  </label>
                  <div className="dropdown d-flex">
                    <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      +62
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          +55
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          +54
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          +1
                        </a>
                      </li>
                    </ul>
                    <Input type="text" name="number" placeholder="Enter your number" onChange={onInputChanged} />
                  </div>
                  <div className="font">contoh : +6285432198765</div>
                </div>
                <div className="col">
                  <div className="mb-3">
                    <label className="form-check-label" for="inlineRadio1">
                      Email
                    </label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div className="font">contoh : example@gmail.com</div>
                  </div>
                </div>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
      <div>
        <br />
        <h5 className="done">Detail Traveller</h5>
        <div className="card">
          <div className="card-header form-atas">Details</div>
          <div className="card-body">
            <div className="container">
              <div className="row align-items-start">
                <div className="col">
                  <label className="form-check-label" for="inlineRadio1">
                    Title
                  </label>
                  <div className="dropdown d-flex">
                    <Input type="text" name="number" />
                    <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          +55
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          +54
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          +1
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col"></div>
              </div>
              <div className="row align-items-start">
                <div className="col">
                  <FormGroup>
                    <Label className="text-dark">Nama Depan & Tengah: </Label>
                    <Input type="text" name="name" placeholder="Enter your name" onChange={onInputChanged} />
                    <div className="font">tanpa gelar dan tanda baca</div>
                  </FormGroup>
                </div>
                <div className="col">
                  <FormGroup>
                    <Label className="text-dark">Nama Belakang: </Label>
                    <Input type="text" name="name" placeholder="Enter your name" onChange={onInputChanged} />
                    <div className="font">tanpa gelar dan tanda baca</div>
                  </FormGroup>
                </div>
                <div className="form-check form-check-inline ms-3">
                  <input className="form-check-input" type="radio" name="gender" id="inlineRadio1" value="perempuan" />
                  <label className="form-check-label" for="inlineRadio1">
                    Tidak punya nama belakang
                  </label>
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="button-klik">
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
    <div>
      <span style={{ color: "red" }}>{error}</span>
      <h1>This is step 2 content</h1>
      <FormGroup>
        <Label>
          Welcome <b>{props.user.name || ""}</b>
        </Label>
      </FormGroup>
      <FormGroup>
        <Label>Age: </Label>
        <Input type="text" name="age" placeholder="Enter your age" onChange={onInputChanged} />
      </FormGroup>
      <br />
      <ActionButtons {...props} nextStep={validate2} />
    </div>
  );
};

const Three = (props) => {
  console.log("step3 receive user object");
  console.log(props.user);

  const handleLastStep = () => {
    props.lastStep();
    props.completeCallback();
  };

  return (
    <div>
      <h2>Summary user detail</h2>
      <p>Name: {props.user.name}</p>
      <p>Age: {props.user.age}</p>
      <br />
      <ActionButtons {...props} lastStep={handleLastStep} />
    </div>
  );
};

const Sample = () => {
  const [, setStepWizard] = useState(null);
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
        <One userCallback={assignUser} />
        <Two user={user} userCallback={assignUser} />
        <Three user={user} completeCallback={handleComplete} />
      </StepWizard>
    </div>
  );
};

export default Sample;
