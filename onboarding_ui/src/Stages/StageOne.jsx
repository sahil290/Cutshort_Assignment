import React from "react";

const StageOne = () => {
  return (
    <>
      <div className="stage-one-main-wrapper">
        <div className="stage-one-top-section-wrapper">
          <h2 className="welcome-heading">Welcome! First things first...</h2>
          <h5>You can always change them later.</h5>
        </div>
        <div className="stage-one-inputs-main-wrapper">
          <div>
            <label htmlFor="full-name" className="full-name">
              Full Name
            </label>
            <input className="full-name-input-container" placeholder="Steve Jobs" type="text" />
          </div>
          <div>
            <label htmlFor="full-name" className="full-name">
              Display Name
            </label>
            <input className="full-name-input-container" placeholder="Steve" type="text" />
          </div>
        </div>
      </div>
    </>
  );
};

export default StageOne;
