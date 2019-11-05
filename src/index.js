import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles/main.scss";

import Navigation from "./navigation/navigation";
import Home from "./pages/home";
import ArenaPlay from "./pages/arena-play";
import About from "./pages/about";
import Login from "./pages/login";
import SignUp from "./pages/sign-up";
import Search from "./pages/search";
import Profile from "./pages/profile";

import Test from "./pages/test";

import Game from "./pages/game-display";

// This is going to be a brief note on what the page will be for.

// 1) why should people visit my site?

// -Create a community of city league gamers
// -Create profiles to show off your skills
// -Create teams and Clans for city league tournaments.
// -Create tournaments for all city league gamers
// -Publish updates for games
// -Show games that are coming out soon.

// This site will be tournament driven and have additional things for the players.

// Let me know if you have any questions

//PROBLEMS: Database can be edited by anyone who looks up enpoints in the code

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState(null);

  React.useEffect(() => {}, [loggedIn]);
  return (
    <div className="App">
      <Router>
        <div>
          <Navigation
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
            currentUser={currentUser}
          />

          <Switch>
            <Route
              exact
              path="/test"
              render={props => <Test {...props} loggedIn={loggedIn} />}
            />
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
