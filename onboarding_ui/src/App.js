import React, { useState } from "react";
import StageCount from "./Stages/StageCount";
import StageOne from "./Stages/StageOne";
import StagesFour from "./Stages/StagesFour";
import StageThree from "./Stages/StageThree";
import StageTwo from "./Stages/StageTwo";
import "./css/Stages.css";
const App = () => {
  // Managing state of stages inside state variable
  const [stage, setStage] = useState(1);
  const [stages, setStages] = useState([]);
  // Function for handling stages
  const handleStages = () => {
    let nStage = stage;
    if (nStage !== 4) {
      setStage(stage + 1);
    } else {
      setStage(1);
    }
    // Down here we are pushing stage count into our empty array 
    //variable which is initially an empty array
    let newStage = stages;
    newStage.push(nStage);
    setStages([...new Set(newStage)]);
  };
  return (
    <>
      <div className="app">
      <div className="main-wrapper">
        <div className="top-section-main-wrapper">
          <div className="top-main-image-container">
            <img
              src="/assets/MainLogo.jpeg"
              alt="Hero Icon"
              className="top-main-image"
              height="25"
              width="25"
            />
          </div>
          <h1 className="designer-name">Eden</h1>
        </div>
        <StageCount stage={stage} stages={stages} />
        {stage == 1 && <StageOne />}
        {stage == 2 && <StageTwo />}
        {stage == 3 && <StageThree />}
        {stage == 4 && <StagesFour />}
        <div className="onboarding-main-button-wrapper">
          <button onClick={() => handleStages()}>
            {stage == 4 ? "Launch Eden" : "Create Workspace"}
          </button>
        </div>
      </div>
      </div>
    </>
  );
};

export default App;
