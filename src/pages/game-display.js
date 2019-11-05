import React from "react";

import Lol from "./games/league-of-legends/lol";
import Fortnite from "./games/fortnite/fortnite";
import Apex from "./games/apex-legends/apex";
import Cod from "./games/call-of-duty/cod";
import Smash from "./games/super-smash/smash";

const GameDisplay = props => {
  const displayGame = () => {
    const currentGame = props.match.params.slugGame;
    if (currentGame === "lol") {
      return (
        <div>
          <Lol />
        </div>
      );
    } else if (currentGame === "fortnite") {
      return (
        <div>
          <Fortnite />
        </div>
      );
    } else if (currentGame === "apex") {
      return (
        <div>
          <Apex />
        </div>
      );
    } else if (currentGame === "cod") {
      return (
        <div>
          <Cod />
        </div>
      );
    } else if (currentGame === "smash") {
      return (
        <div>
          <Smash />
        </div>
      );
    }
  };
  return <div className="game-display-container">{displayGame()}</div>;
};

export default GameDisplay;
