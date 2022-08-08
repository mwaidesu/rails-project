import "./App.css";

import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Parent from "./components/Parent";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
// import Article from "./components/Article";

function App() {
  const [user, setUser] = useState(null);
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   fetch("/posts")
  //     .then((r) => r.json())
  //     .then(setPosts);
  // }, []);


  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  // function handleUpdatePost(updatedPost) {
  //   const updatedPosts = posts.map((post) =>
  //     post.id === updatedPost.id ? updatedPost : post
  //   );
  //   setPosts(updatedPosts);
  // }

  return (
    <div className="App">
      <Navbar user={user} setUser={setUser} />
      <main>
        {user ? (
          <Switch>
            <Route path="/">
              <Parent user={user} />
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
              <Parent/>
            </Route>

            {/* <Route path="/posts/:id">
            <Article/>
          </Route> */}
          </Switch>
        )}
      </main>
    </div>
  );
}

export default App;
