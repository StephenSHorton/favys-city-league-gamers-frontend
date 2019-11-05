import React from "react";

import codImg from "./cod.jpg";

const Cod = props => {
  return (
    <div className={`cod-container`}>
      <img
        style={{
          width: "100%"
        }}
        src={codImg}
        alt="Header Image"
      ></img>
    </div>
  );
};

export default Cod;
