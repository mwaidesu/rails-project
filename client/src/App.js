
import "./App.css";

import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Parent from "./components/Parent";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <div className="App">
    <Navbar user={user} setUser={setUser} />
    <main>
      {user ? (
        <Switch>
          <Route path="/">
            <Parent user={user}/>
          </Route>
        </Switch>
      ) : (
        <Switch>
          <Route path="/signup">
            <SignUp setUser={setUser} />
          </Route>
          <Route path="/login">
            <Login setUser={setUser} />
          </Route>
          <Route path="/">
            <Parent />
          </Route>
        </Switch>
      )}
    </main>
  </div>
  );
}

export default App;
