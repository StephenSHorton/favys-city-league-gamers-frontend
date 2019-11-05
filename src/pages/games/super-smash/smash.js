import React from "react";

import smashImg from "./smash.png";

const Smash = props => {
  return (
    <div className={`smash-container`}>
      <img
        style={{
          width: "100%"
        }}
        src={smashImg}
        alt="Header Image"
      ></img>
    </div>
  );
};

export default Smash;
