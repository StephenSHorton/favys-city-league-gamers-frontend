import React from "react";

const Bracket = props => {
  return (
    <div className="bracket-container">
      <h1>{`${props.match}`}</h1>
      <div className="content">
        <div className="layer-1">
          <div className="player-slot">
            <div>Player 1</div>
          </div>
          <div className="player-slot">
            <div>Player 2</div>
          </div>
          <div className="player-slot">
            <div>Player 3</div>
          </div>
          <div className="player-slot">
            <div>Player 4</div>
          </div>
        </div>
        <div className="layer-2">
          <div className="player-slot">
            <div></div>
          </div>
          <div className="player-slot">
            <div></div>
          </div>
        </div>
        <div className="winner">
          <div className="player-slot">
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bracket;
