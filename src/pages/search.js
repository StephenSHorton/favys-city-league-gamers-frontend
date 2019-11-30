import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Search = () => {
  //probably set links to be plural for username across games unless search page for each game
  const [searchTerm, setSearchTerm] = React.useState("");
  const [gameSlug, setGameSlug] = React.useState("");
  const [searchReady, setSearchReady] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleChange = event => {
    setSearchReady(false);
    setSearchTerm(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(searchTerm);
    checkUsername(searchTerm);
  };

  const checkUsername = name => {
    // League of legends
    setIsLoading(true);
    axios
      .get(
        `https://9rtr3sjcm3.execute-api.us-east-2.amazonaws.com/rgapi-proxy-summoner-name/summoner/na1/${name}`
      )
      .then(response => {
        console.log(
          `%c${name} FOUND FROM LEAGUE OF LEGENDS! - Profile Grab`,
          "color:green"
        );
        setGameSlug("lol");
        setSearchReady(true);
        setIsLoading(false);
        return true;
      })
      .catch(error => {
        setIsLoading(false);
        console.log("%cNOTHING FROM LEAGUE OF LEGENDS!", "color:red");
        console.log("RENDERED CONTENT> ", error);
        setSearchReady(false);
        setError(`No username found under: ${searchTerm}`);
        return false;
      });
  };

  const displayLinks = () => {
    return (
      <div className="profile-links-container">
        <p>League of legends:</p>
        <Link to={`/profile/${gameSlug}/${searchTerm}`}>{`${searchTerm}`}</Link>
      </div>
    );
  };

  return (
    <div className="search-container">
      <div className="space-left"></div>
      <div className="space-center">
        <h1>Search for a player</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            onChange={handleChange}
            value={searchTerm}
            placeholder="Search"
          />
          <button type="text">Search</button>
        </form>
        {isLoading ? <h1>Searching...</h1> : null}
        {searchReady === true ? displayLinks(searchTerm) : error}
      </div>
      <div className="space-right"></div>
    </div>
  );
};

export default Search;
