import React from "react";

import fortniteImg from "./fortnite.jpg";

const Fortnite = props => {
  return (
    <div className={`fortnite-container`}>
      <img
        style={{
          width: "100%"
        }}
        src={fortniteImg}
        alt="Header Image"
      ></img>
    </div>
  );
};

export default Fortnite;
