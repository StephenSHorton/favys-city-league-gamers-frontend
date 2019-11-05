import React from "react";

import lolImg from "./lol.jpg";

const Lol = props => {
  return (
    <div className={`lol-container`}>
      <img
        style={{
          width: "100%"
        }}
        src={lolImg}
        alt="Header Image"
      ></img>
    </div>
  );
};

export default Lol;
