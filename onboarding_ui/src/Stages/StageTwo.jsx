import React from "react";

const StageTwo = () => {
  return (
    <>
      <div className="stage-two-main-wrapper">
        <div className="stage-two-top-section-wrapper">
          <h2>Lets setup a home for all your work</h2>
          <h5>You can always create another workspace later.</h5>
        </div>
        <div className="stage-two-inputs-main-wrapper">
          <div className="stage-two-workspace-section">
            <label htmlFor="workspace-name" className="workspace-name">
              Workspace Name
            </label>
            <input className="workspace-name-input-container" placeholder="Eden" type="text" />
          </div>
          <div>
            <label htmlFor="full-name" className="full-name">
              Workspace URL <span>(optional)</span>
            </label>
            <div className="example-url-wrapper">
              <div className="example-url">www.eden.com.</div>
              <input className="workspace-url-input-container" placeholder="Example" type="text" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StageTwo;
