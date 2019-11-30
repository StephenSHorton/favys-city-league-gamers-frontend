import React from "react";
import { Link } from "react-router-dom";

import Bracket from "./bracket";

//TODO GET COMPONENT BRACKET.JS TO DISPLAY BRACKET INSTEAD OF HERE.
//https://developer.riotgames.com/docs/lol#riot-games-api_tournament-api

const Tournament = props => {
  const [bracketView, setBracketView] = React.useState(false);

  const renderLoggedInContent = () => {
    return (
      <div className="tournament-container">
        {bracketView ? (
          <div className="bracket-view">
            <div className="left"></div>
            <div className="center">
              <h1 onClick={() => setBracketView(!bracketView)}>Success!</h1>
              <div className="bracket-container">
                <div className="row">
                  <h1>ROW 1</h1>
                  <div className="col">
                    <h1>COL 1</h1>
                  </div>
                </div>
                <div className="row">
                  <h1>ROW 2</h1>
                  <div className="col">
                    <h1>COL 2</h1>
                  </div>
                </div>
                <div className="row">
                  <h1>ROW 3</h1>
                  <div className="col">
                    <h1>COL 3</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="right"></div>
          </div>
        ) : (
          <div className="tournaments-view">
            <div className="left"></div>
            <div className="center">
              <div className="header">
                <h1>Tournaments:</h1>
              </div>
              <div className="scroll-feature">
                <button onClick={() => setBracketView(!bracketView)}>
                  Test Bracket
                </button>
              </div>
            </div>
            <div className="right"></div>
          </div>
        )}
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
