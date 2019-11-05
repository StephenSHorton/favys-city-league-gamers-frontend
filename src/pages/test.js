import React from "react";

const Test = () => {
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

  const checkUsername = () => {
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
        console.log(xhr.response);
      }
    };

    xhr.onerror = function() {
      alert("Woops, there was an error making the request.");
    };
    xhr.send(
      JSON.stringify({
        username: "Stephen"
      })
    );
  };

  return (
    <div className="test-container">
      <h1>Hello from test!</h1>
      <button onClick={checkUsername}>Make request</button>
    </div>
  );
};

export default Test;
