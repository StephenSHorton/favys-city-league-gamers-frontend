import React from "react";
import { Link } from "react-router-dom";

import Bracket from "./bracket";

//props = currentGame, loggedIn

const Tournaments = props => {
  const [tournamentPressed, setTournamentPressed] = React.useState(false);
  const [match, setMatch] = React.useState(
    `${props.currentGame} test match 01/01/2019 singleplayers(4)`
  );

  React.useEffect(() => {
    console.log(`${match} => bracket view: ${tournamentPressed}`);
  }, [tournamentPressed]);

  const renderLoggedInContent = () => {
    return (
      <div className="tournament-container">
        <div className="left"></div>
        <div className="center">
          {tournamentPressed ? (
            <div className="tournament-bracket-container">
              <Bracket match={match} />
              <button onClick={() => setTournamentPressed(!tournamentPressed)}>
                Back
              </button>
            </div>
          ) : (
            <div className="tournaments-list">
              <div className="header">
                <h1>Tournaments:</h1>
              </div>
              <div className="scroll-feature">
                <p onClick={() => setTournamentPressed(!tournamentPressed)}>
                  {match}
                </p>
              </div>
            </div>
          )}
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

export default Tournaments;
