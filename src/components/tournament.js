import React from "react";
import { Link } from "react-router-dom";

const Tournament = props => {
  const renderLoggedInContent = () => {
    return (
      <div className="tournament-container">
        <div className="left"></div>
        <div className="center">
          <div className="header">
            <h1>Tournaments:</h1>
          </div>
          <div className="scroll-feature"></div>
        </div>
        <div className="right"></div>
      </div>
    );
  };

  const renderNotLoggedInContent = () => {
    return (
      <div className="tournament-container">
        <div className="left"></div>
        <div className="center">
          <div className="please-register">
            <div className="dialog-wrapper">
              <h1>Please Login to use tournament feature.</h1>
              <p>What you'll get access to:</p>
              <div className="list-wrapper">
                <ul>
                  <li>Joining privatetly hosted tournaments</li>
                  <li>Entering to win actual cash depending on tournament</li>
                  <li>Profile perks that display your wins</li>
                </ul>
              </div>
              <div className="link">
                <Link to="/login">Login</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="right"></div>
      </div>
    );
  };

  return (
    <div>
      {props.loggedIn ? renderLoggedInContent() : renderNotLoggedInContent()}
    </div>
  );
};

export default Tournament;
