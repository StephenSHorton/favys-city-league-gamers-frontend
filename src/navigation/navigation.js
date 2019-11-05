import React from "react";
import { Link } from "react-router-dom";

// TODO
// 1. get navlinks instead of links for "current page" styling

const Navigation = props => {
  React.useEffect(() => {}, [props.loggedIn]);
  return (
    <div className="navigation-container">
      <div className="logo">
        <Link to="/">Favy's City League Gamers</Link>
      </div>
      <div className="navigation-links-container">
        <div className="navigation-link">
          <Link to="/test">Test</Link>
        </div>
        <div className="navigation-link">
          <Link to="/">Home</Link>
        </div>
        <div className="navigation-link">
          <Link to="/search">Search</Link>
        </div>
        <div className="navigation-link">
          <Link to="/arenaplay">Arena Play</Link>
        </div>
        <div className="navigation-link">
          <Link to="/about">About</Link>
        </div>
        {props.loggedIn ? (
          <div className="navigation-link-logout">
            <Link to="/login" onClick={() => props.setLoggedIn(false)}>
              Logout
            </Link>
          </div>
        ) : (
          <div className="navigation-link">
            <Link to="/login">Login</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navigation;
