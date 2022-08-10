import React from "react";
import { TiTick } from "react-icons/ti";
const StagesFour = () => {
  return (
    <>
      <div className="stage-four-main-wrapper">
        <div className="setup-complete-icon">
          <span className="confirm-logo-wrapper">
            <TiTick className="final-tick" />
          </span>
        </div>
        <div className="stage-four-top-section-wrapper">
          <h2>Congratulations, Eden!</h2>
          <h5>You have completed onboarding, you can start using Eden!</h5>
        </div>
      </div>
    </>
  );
};

export default StagesFour;
