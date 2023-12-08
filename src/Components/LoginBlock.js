import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import "./Styles.css";
import ItemsBlock from "./ItemsBlock";
// import { GoogleLogin } from "react-google-login";
// Import gapi from the global window object
const { gapi } = window;
import {LoginForm} from "./LoginModel";

const clientId =
  "41312889470-jmuqpfl03hq2k9sqbfcnggl473vrifjg.apps.googleusercontent.com";

const LoginBlock = () => {
  const [showItemsBlock, setShowItemsBlock] = useState(false);

  const handleGoogleClick = () => {
    setShowItemsBlock(true);
  };

  useEffect(() => {
    const loadGoogleApi = async () => {
      // Dynamically load the Google API script
      const script = document.createElement("script");
      script.src = "https://apis.google.com/js/api.js";
      script.async = true;
      script.onload = () => {
        // Initialize the Google API client
        gapi.load("client:auth2", () => {
          gapi.client.init({
            clientId: clientId,
            scope: "",
          });
        });
      };
      document.body.appendChild(script);
    };

    // Call the function to load the Google API script
    loadGoogleApi();
  }, []);

  const onSuccess = (response) => {
    console.log("Login success:", response);
  };

  const onFailure = (error) => {
    console.error("Login failure:", error);
  };

  return (
    <div>
      {showItemsBlock ? (
        <LoginForm />
      ) : (
        <div className="login">
          <div className="Name">
            <h2 className="heading">Sign up/Sign in</h2>
          </div>
          <div className="links">
            {/* <GoogleLogin
              clientId={clientId}
              buttonText="Continue with Google"
              onSuccess={onSuccess}
              onFailure={onFailure}
            /> */}
            <div className="Apple" onClick={handleGoogleClick}>
              <FontAwesomeIcon className="icon" icon={faAdd} />
              <span className="text">Continue with Google</span>
            </div>
            <div className="Apple">
              <FontAwesomeIcon className="icon" icon={faAdd} />
              <span className="text">Continue with Apple</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginBlock;
