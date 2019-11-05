import React from "react";
import { Link } from "react-router-dom";

const ArenaPlay = () => {
  return (
    <div className="arena-play-container">
      <h1>Request tournament hosting here! Choose a game:</h1>
      <div className="links-container">
        <div className="link">
          <Link to="/game/lol/">League of Legends</Link>
        </div>
        <div className="link">
          <Link to="/game/apex">Apex Legends</Link>
        </div>
        <div className="link">
          <Link to="/game/fortnite">Fortnite</Link>
        </div>
        <div className="link">
          <Link to="/game/cod">Call of Duty</Link>
        </div>
        <div className="link">
          <Link to="/game/smash">Super Smash</Link>
        </div>
      </div>
    </div>
  );
};

export default ArenaPlay;
