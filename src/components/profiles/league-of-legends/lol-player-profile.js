import React from "react";
import axios from "axios";

// accountId: "l0-uKKTOkrITk9RqfWREVzs5C8ebwPY91Rv0PB48yH2bTA"
// id: "1VvTF8ojjWd8GmVM_Dqi2VpSQ3W0lOBeJ5livczflBM1Z6w"
// name: "PoppingPopper"
// profileIconId: 581
// puuid: "ky0tDijXxDSlLszbNMIaqn1V344m5vxMHVKc1fgAcRU7VM4fhd2W0FcPmzAWt3fG4VuR8dpF4mvhhQ"
// revisionDate: 1572398636000
// summonerLevel: 201

import defaultIcon from "./29.png";

const LolPlayerProfile = props => {
  const [summonerData, setSummonerData] = React.useState({});
  const [rankedData, setRankedData] = React.useState([{}]);
  // const [icon, setIcon] = React.useState(null);

  React.useEffect(() => {
    // setIcon(summonerData.profileIconId);
    getProfile();
  }, []);

  React.useEffect(() => {
    // setIcon(summonerData.profileIconId);
    getRanked();
  }, [summonerData]);

  const getProfile = () => {
    axios
      .get(
        `https://9rtr3sjcm3.execute-api.us-east-2.amazonaws.com/rgapi-proxy-summoner-name/summoner/na1/${props.username}`
      )
      .then(response => {
        console.log("%cSUCCESS! - Profile Grab", "color:green");
        setSummonerData(response.data);
      })
      .catch(error => {
        console.log("GET PROFILE> ", error);
      });
  };

  const getRanked = () => {
    axios
      .get(
        `https://3uz48f2thj.execute-api.us-east-2.amazonaws.com/rgapi-proxy/summoner/na1/${summonerData.id}`
      )
      .then(response => {
        console.log("%cSUCCESS! - Ranked Grab", "color:green");
        return setRankedData(response.data);
      })
      .catch(error => {
        console.log("GET RANKED> ", error);
      });
  };

  return (
    <div className="player-profile-container">
      <div>
        <img src={defaultIcon} alt="Icon"></img>
        <h1>{`${summonerData.name}`}</h1>
        <h1></h1>
      </div>
      <h1>{`Lvl. ${summonerData.summonerLevel}`}</h1>
      <h1>{`Rank: ${rankedData[0] ? rankedData[0].tier : "Not ranked"} ${
        rankedData[0] ? rankedData[0].rank : ""
      }`}</h1>
    </div>
  );
};

export default LolPlayerProfile;
