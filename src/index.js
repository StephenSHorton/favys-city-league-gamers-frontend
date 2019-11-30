import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cookie from "js-cookie";
import axios from "axios";

import "./styles/main.scss";

import Navigation from "./navigation/navigation";
import Home from "./pages/home";
import ArenaPlay from "./pages/arena-play";
import About from "./pages/about";
import Login from "./pages/login";
import SignUp from "./pages/sign-up";
import Search from "./pages/search";
import Profile from "./pages/profile";

import Game from "./pages/game-display";
import Admin from "./pages/admin";

//PROBLEMS: Database can be edited by anyone who looks up enpoints in the code
//        : Admin controls can be tampered with by editing html.. Backend will need to authenticate

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState("LOADING...");

  React.useEffect(() => {}, [loggedIn]);

  const handleCookies = () => {
    axios
      .post("https://favys-city-league-gamers.herokuapp.com/login", {
        username: Cookie.get("USERNAME"),
        password: Cookie.get("PASSWORD")
      })
      .then(response => {
        if (response.data === "SUCCESSFUL LOGIN") {
          setLoggedIn(true);
          setCurrentUser(Cookie.get("USERNAME"));
        }
      })
      .catch(error => {
        console.log("Login error: ", error);
      });
  };

  return (
    <div className="App">
      {Cookie.get("PASSWORD") ? handleCookies() : null}
      <Router>
        <div>
          <Navigation
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
          />

          <Switch>
            <Route path="/admin" component={Admin} />
            <Route
              exact
              path="/"
              render={props => <Home {...props} loggedIn={loggedIn} />}
            />
            <Route
              path="/arenaplay"
              render={props => <ArenaPlay {...props} loggedIn={loggedIn} />}
            />
            <Route
              path="/about"
              render={props => <About {...props} loggedIn={loggedIn} />}
            />
            <Route
              path="/login"
              render={props => (
                <Login
                  {...props}
                  setLoggedIn={setLoggedIn}
                  loggedIn={loggedIn}
                />
              )}
            />
            <Route path="/signup" component={SignUp} />
            <Route
              path="/search"
              render={props => <Search {...props} loggedIn={loggedIn} />}
            />

            <Route
              path="/game/:slugGame"
              render={props => <Game {...props} loggedIn={loggedIn} />}
            />

            <Route
              path="/profile/:slugGame/:slugUsername"
              component={Profile}
            />
          </Switch>
        </div>
      </Router>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
