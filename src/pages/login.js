import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookie from "js-cookie";

const Login = props => {
  const [name, setName] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleLogout = () => {
    props.setLoggedIn(false);
    Cookie.remove("USERNAME");
    Cookie.remove("PASSWORD");
    setError(null);
    setName("");
    setPass("");
  };

  const handleSubmit = event => {
    event.preventDefault();
    setIsLoading(true);
    console.log("LOGIN PRESSED");
    axios
      .post("https://favys-city-league-gamers.herokuapp.com/login", {
        username: name,
        password: pass
      })
      .then(response => {
        setIsLoading(false);
        if (response.data === "SUCCESSFUL LOGIN") {
          props.setLoggedIn(true);
          Cookie.set("USERNAME", name, { expires: 3 });
          Cookie.set("PASSWORD", pass);
          props.history.push("/");
        } else {
          setError(
            <div className="error-message">Invalid username or password.</div>
          );
        }
      })
      .catch(error => {
        console.log("Login error: ", error);
        setIsLoading(false);
      });
  };

  return (
    <div className="login">
      <div className="grid-container">
        <div className="space-left"></div>
        <div className="space-center">
          {props.loggedIn ? (
            <div className="login-container logged-in">
              <h1>You're logged in</h1>
              <button onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <div className="login-container">
              <p>Login</p>
              {error}
              {isLoading ? (
                <h1>Logging in...</h1>
              ) : (
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    onChange={e => setName(e.target.value)}
                    value={name}
                    placeholder="Username"
                  />
                  <input
                    type="password"
                    onChange={e => setPass(e.target.value)}
                    value={pass}
                    placeholder="Password"
                  />
                  <button type="submit">Login</button>
                </form>
              )}
            </div>
          )}
        </div>
        <div className="space-right"></div>
      </div>
      <div className="sign-up">
        <Link to="/signup">Don't have an account? Sign up!</Link>
      </div>
      <div className="forgot-password">
        <Link to="/forgot">Forgot password</Link>
      </div>
    </div>
  );
};

export default Login;
