import React, { useState } from "react";

function Login({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="my-5 text-center">
        <h1>Login</h1>

       <div>
       <input
        className="form-control btn text-start my-4 w-50  border border-danger py-3"
          type="text"
          id="username"
          autoComplete="off"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
       </div>

        <div>
        <input
        className="form-control btn text-start my-4 w-50  border border-danger py-3"
          type="password"
          id="password"
          autoComplete="current-password"
          placeholder ="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </div>
        <button  className="form-control btn btn-danger text-center my-4 w-50  py-3"type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;