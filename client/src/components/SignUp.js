import React, { useState } from "react";
// import Navbar from "./Navbar";

function SignUp({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="text-center my-5">
        <h1>Sign Up</h1>
        <div>
        <input
        className="form-control btn text-start my-4 w-50  border border-danger py-3"
          type="text"
          placeholder="Username"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        </div>
       
        <div>
        <input
        className="form-control btn text-start my-4 w-50  border border-danger py-3"
          type="password"
          placeholder="Password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        </div>
    
        <div>
        <input
        className="form-control btn text-start my-4 w-50  border border-danger py-3"
          type="password"
          placeholder="Confirm Password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
        </div>
        <button className="form-control btn  btn-danger text-start my-4 w-50 py-3" type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;