import React from "react";

import LolPlayerProfile from "../components/profiles/league-of-legends/lol-player-profile";

const Profile = props => {
  return (
    <div className="profile-container">
      <LolPlayerProfile username={props.match.params.slugUsername} />
    </div>
  );
};

export default Profile;
