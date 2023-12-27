import React from "react";
import "./Involvement.css";

const Involvement = ({ Designation, OrgName, Period, Description }) => {
  return (
    <div className="involve-card">
      <div className="org">
        <h2>{Designation}</h2>
        <p>{OrgName}</p>
        <p>{Period}</p>
      </div>
      <div className="description">
        <p>{Description}</p>
      </div>
    </div>
  );
};

export default Involvement;
