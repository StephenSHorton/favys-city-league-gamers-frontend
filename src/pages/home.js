import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <div className="left">
        <div className="game-links">
          <div className="link">
            <Link to="/game/lol">League of Legends</Link>
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
      <div className="center">
        <div className="center-box">
          <h1>CONTENT</h1>
        </div>
      </div>
      <div className="right">
        <div className="game-links">
          <div className="link">
            <Link to="/game/lol">League of Legends</Link>
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
        <div className="top-streamers">
          <h1>TOP STREAMERS</h1>
          <div className="link">
            <a href="https://www.twitch.tv/imyourfavy/" target="_blank">
              @ImYourFavy
            </a>
          </div>
          <div className="link">
            <a href="https://www.twitch.tv/Myth/" target="_blank">
              @Myth
            </a>
          </div>
          <div className="link">
            <a href="https://www.twitch.tv/TSM_VISS/" target="_blank">
              @TSM_VISS
            </a>
          </div>
          <div className="link">
            <a href="https://www.twitch.tv/PostMalone/" target="_blank">
              @PostMalone
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
