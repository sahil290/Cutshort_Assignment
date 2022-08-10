import React, { useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
const StageThree = () => {
  const [selected, setSelected] = useState();
  // Function for handling selected
  const handleSelected = (index) => {
    setSelected(index);
  };
  return (
    <>
      <div className="stage-three-main-wrapper">
        <div className="stage-three-top-section-wrapper">
          <h2>How are you planning to use Eden?</h2>
          <h5>We'll streamline your setup experience accordingly.</h5>
        </div>
        <div className="stage-three-mid-wrapper">
          <div
            className={selected == 1 ? "for-nyself-wrapper-selected" : "for-nyself-wrapper"}
            onClick={() => setSelected(1)}
          >
            <BsFillPersonFill className={selected == 1 ? "single-selected" : "single-person"} />
            <span className="for-myself-text">For myself</span>
            <span className="for-myself-quote">
              Write better. Think more clearly. Stay organized.
            </span>
          </div>
          <div
            className={selected == 2 ? "for-my-team-wrapper-selected" : "for-my-team-wrapper"}
            onClick={() => setSelected(2)}
          >
            <HiUserGroup className={selected == 2 ? "team-selected" : "team"} />
            <span className="for-my-team-text">With my team</span>
            <span className="for-my-team-quote">
              Wikis, docs, tasks and projects, all in one place.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default StageThree;
