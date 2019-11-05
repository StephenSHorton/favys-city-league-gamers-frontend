import React from "react";

import apexImg from "./apex.jpg";

const Apex = props => {
  return (
    <div className={`apex-container`}>
      <img
        style={{
          width: "100%"
        }}
        src={apexImg}
        alt="Header Image"
      ></img>
    </div>
  );
};

export default Apex;
