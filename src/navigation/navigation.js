import React from "react";
import { Link } from "react-router-dom";
import Cookie from "js-cookie";

// TODO
// 1. get navlinks instead of links for "current page" styling

const Navigation = props => {
  React.useEffect(() => {
    props.setCurrentUser(Cookie.get("USERNAME"));
  }, [props.loggedIn]);

  const handleLogout = () => {
    console.log("LOGOUT PRESSED");
    Cookie.remove("USERNAME");
    Cookie.remove("PASSWORD");
    props.setLoggedIn(false);
  };

  return (
    <div className="navigation-container">
      <div className="logo">
        <Link to="/">Favy's City League Gamers</Link>
      </div>
      <div className="navigation-links-container">
        {props.currentUser === "TestUser" ||
        props.currentUser === "ImYourFavy" ? (
          <div className="navigation-link-admin">
            <Link to="/admin">Admin</Link>
          </div>
        ) : null}

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
            <Link to="/login" onClick={handleLogout}>
              Logout
            </Link>
          </div>
        ) : (
          <div className="navigation-link">
            <Link to="/login">Login</Link>
          </div>
        )}
        {props.loggedIn ? (
          <div className="user-logged-display">Hello {props.currentUser}!</div>
        ) : null}
      </div>
    </div>
  );
};

export default Navigation;
