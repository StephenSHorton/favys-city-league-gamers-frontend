import React from "react";

import Tournament from "../components/tournament/tournament";

const GameDisplay = props => {
  const displayGame = () => {
    const currentGame = props.match.params.slugGame;
    if (currentGame === "lol") {
      return (
        <div className={props.match.params.slugGame}>
          <Tournament
            currentGame={props.match.params.slugGame}
            loggedIn={props.loggedIn}
          />
        </div>
      );
    } else if (currentGame === "fortnite") {
      return (
        <div className={props.match.params.slugGame}>
          <Tournament
            currentGame={props.match.params.slugGame}
            loggedIn={props.loggedIn}
          />
        </div>
      );
    } else if (currentGame === "apex") {
      return (
        <div className={props.match.params.slugGame}>
          <Tournament
            currentGame={props.match.params.slugGame}
            loggedIn={props.loggedIn}
          />
        </div>
      );
    } else if (currentGame === "cod") {
      return (
        <div className={props.match.params.slugGame}>
          <Tournament
            currentGame={props.match.params.slugGame}
            loggedIn={props.loggedIn}
          />
        </div>
      );
    } else if (currentGame === "smash") {
      return (
        <div className={props.match.params.slugGame}>
          <Tournament
            currentGame={props.match.params.slugGame}
            loggedIn={props.loggedIn}
          />
        </div>
      );
    }
  };
  return <div className="game-display-container">{displayGame()}</div>;
};

export default GameDisplay;
