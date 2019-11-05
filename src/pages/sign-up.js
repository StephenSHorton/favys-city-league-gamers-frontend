import React from "react";

const SignUp = props => {
  const [name, setName] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [confirmPass, setConfirmPass] = React.useState("");
  const [error, setError] = React.useState(null);

  const createCORSRequest = (method, url) => {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
      // XHR for Chrome/Firefox/Opera/Safari.
      xhr.open(method, url, true);
    } else {
      // CORS not supported.
      xhr = null;
    }
    return xhr;
  };

  const createUser = () => {
    var url = "https://favys-city-league-gamers.herokuapp.com/user";
    var xhr = createCORSRequest("POST", url);
    if (!xhr) {
      console.log("CORS not supported");
      alert(
        "There is a problem with our servers right now, please try again another time. We're sorry for the inconvenience"
      );
      return;
    }
    xhr.setRequestHeader("Content-type", "application/json");
    // Response handlers.
    xhr.onreadystatechange = function() {
      if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        console.log(xhr.response);
      }
    };

    xhr.onerror = function() {
      alert("Woops, there was an error making the request.");
    };
    xhr.send(
      JSON.stringify({
        username: name,
        password: pass,
        clan: "",
        rank: "",
        status: ""
      })
    );
  };

  const checkFields = () => {
    const regex = /^[A-Za-z0-9_]+$/;
    if (!regex.test(pass)) {
      if (pass === confirmPass) {
        if (pass.length > 7) {
          createUser();
          props.history.push("/login");
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
    console.log("CHECKING USERNAME: ", name);

    var url = "https://favys-city-league-gamers.herokuapp.com/usernamecheck";
    var xhr = createCORSRequest("POST", url);
    if (!xhr) {
      console.log("CORS not supported");
      alert(
        "There is a problem with our servers right now, please try again another time. We're sorry for the inconvenience"
      );
      return;
    }
    xhr.setRequestHeader("Content-type", "application/json");
    // Response handlers.
    xhr.onreadystatechange = function() {
      if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        if (xhr.response === "USERNAME IS NOT TAKEN") {
          checkFields();
        } else {
          console.log(xhr.response);
          setError(<div className="error-message">Username is taken.</div>);
        }
      }
    };

    xhr.onerror = function() {
      alert("Woops, there was an error making the request.");
    };
    xhr.send(
      JSON.stringify({
        username: name
      })
    );
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
