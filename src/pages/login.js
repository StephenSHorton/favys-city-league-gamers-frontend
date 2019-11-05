import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = props => {
  const [name, setName] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [error, setError] = React.useState(null);

  const handleLogout = () => {
    props.setLoggedIn(false);
    setError(null);
    setName("");
    setPass("");
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log("LOGIN PRESSED");
    axios
      .post("https://favys-city-league-gamers.herokuapp.com/login", {
        username: name,
        password: pass
      })
      .then(response => {
        if (response.data === "SUCCESSFUL LOGIN") {
          props.setLoggedIn(true);
          props.history.push("/");
        } else {
          setError(
            <div className="error-message">Invalid username or password.</div>
          );
        }
      })
      .catch(error => {
        console.log("Login error: ", error);
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
