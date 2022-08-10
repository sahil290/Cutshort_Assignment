import React from "react";

const StageCount = ({ stages }) => {
  return (
    <>
      <div className="stages-count-wrapper">
        <span id={stages.length == 0 || stages.length > 0 ? "one" : "one-simple"}>1</span>
        <span
          className={stages.length == 0 || stages.length > 0 ? "span-filled" : "span"}
        ></span>
        <span
          className={stages.length == 1 || stages.length > 1 ? "span-filled" : "span"}
        ></span>
        <span id={stages.length == 1 || stages.length > 1 ? "two" : "two-simple"}>2</span>
        <span
          className={stages.length == 1 || stages.length > 1 ? "span-filled" : "span"}
        ></span>
        <span
          className={stages.length == 2 || stages.length > 2 ? "span-filled" : "span"}
        ></span>
        <span id={stages.length == 2 || stages.length > 2 ? "three" : "three-simple"}>3</span>
        <span
          className={stages.length == 2 || stages.length > 2 ? "span-filled" : "span"}
        ></span>
        <span
          className={stages.length == 3 || stages.length > 3 ? "span-filled" : "span"}
        ></span>
        <span id={stages.length == 3 || stages.length > 3 ? "four" : "four-simple"}>4</span>
      </div>
    </>
  );
};

export default StageCount;
