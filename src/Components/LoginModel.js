import React, { useState } from "react";
import ItemsList from "./ItemsList";
import ItemsBlock from "./ItemsBlock";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [singUpForm, setSingupForm] = useState(false);
  const [open, setOpen] = useState(false);

  const handleLogin = () => {
    // Perform login logic here
    const user = getUserFromLocalStorage();

    if (user && user.email === email && user.password === password) {
      alert("welcome To My Page");
      setOpen(true);
    } else {
      alert("Invalid login. Please check your credentials.");
    }
  };

  const handleSignUp = () => {
    // Perform sign-up logic here
    if (email !== "" && password !== "" && password === confirmPassword) {
      // Store user information in local storage

      if (!email && !password && !confirmPassword) {
        alert("Please enter Details");
        return;
      }
      localStorage.setItem("user", JSON.stringify({ email, password }));
      setLoggedIn(true);
      alert("Account Created Succefully");
    } else {
      alert("Invalid sign-up. Please check your inputs.");
    }
  };

  const getUserFromLocalStorage = () => {
    const userString = localStorage.getItem("user");
    return userString ? JSON.parse(userString) : null;
  };

  const renderLoginForm = () => (
    <div>
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Login</button>
      <br />
      <p>
        Don't have an account?{" "}
        <span onClick={() => setLoggedIn(false)}>Sign up here.</span>
      </p>
    </div>
  );

  const renderSignUpForm = () => (
    <div>
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <label>Confirm Password:</label>
      <input
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <br />
      <button onClick={handleSignUp}>Sign Up</button>
      <br />
      <p>
        Already have an account?{" "}
        <span onClick={() => setLoggedIn(true)}>Login here.</span>
      </p>
    </div>
  );

  return (
    <>
      {!open ? (
        <div className="login-container">
          <h2>{"Login / Sign Up"}</h2>
          {isLoggedIn ? renderLoginForm() : renderSignUpForm()}
        </div>
      ) : (
        <div>
          <div>Welocme</div>
          <ItemsBlock setOpen={setOpen} />
        </div>
      )}
    </>
  );
};

export default LoginForm;
