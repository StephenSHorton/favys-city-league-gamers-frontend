import React from "react";
import axios from "axios";

const SignUp = props => {
  const [name, setName] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [confirmPass, setConfirmPass] = React.useState("");
  const [error, setError] = React.useState(null);

  const createUser = () => {
    console.log("CREATE USER RAN");
    const regex = /^[A-Za-z0-9_]+$/;
    if (!regex.test(pass)) {
      if (pass === confirmPass) {
        if (pass.length > 7) {
          axios
            .post("https://favys-city-league-gamers.herokuapp.com/user", {
              username: name,
              password: pass,
              clan: "",
              rank: "",
              status: ""
            })
            .then(response => {
              props.history.push("/login");
              setError(null);
            })
            .catch(error => {
              console.log("sign up error: ", error);
            });
        } else {
          setError(
            <div className="error-message">
              Password is too small (needs at least 8 characters).
            </div>
          );
        }
      } else {
        setError(<div className="error-message">Passwords do not match.</div>);
      }
    } else {
      setError(
        <div className="error-message">
          Password must contain at least 1 special character ( * % $ # ! ).
        </div>
      );
    }
  };

  const checkUsername = () => {
    console.log("CHECK USERNAME RAN");
    axios
      .post("https://favys-city-league-gamers.herokuapp.com/checkusername", {
        username: name
      })
      .then(response => {
        if (response.data === "USERNAME IS NOT TAKEN") {
          createUser();
          setError(null);
        } else {
          setError(
            <div className="error-message">That username is taken.</div>
          );
        }
      })
      .catch(error => {
        console.log("sign up error: ", error);
      });
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (name.length > 5) {
      checkUsername();
    } else {
      setError(
        <div className="error-message">
          Username must contain at least 5 characters.
        </div>
      );
    }
  };
  return (
    <div className="sign-up-container">
      <div className="space-left"></div>
      <div className="space-center">
        {error}
        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            type="text"
            onChange={event => setName(event.target.value)}
            value={name}
            placeholder=" 15 characters max.."
          />
          <label>Password</label>
          <input
            type="password"
            onChange={event => setPass(event.target.value)}
            value={pass}
            placeholder=" password"
          />
          <label>Confirm Password</label>
          <input
            type="password"
            onChange={event => setConfirmPass(event.target.value)}
            value={confirmPass}
            placeholder=" password"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="space-left"></div>
    </div>
  );
};

export default SignUp;
