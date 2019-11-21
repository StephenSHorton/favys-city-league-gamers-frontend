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

import Game from "./pages/game-display";

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
