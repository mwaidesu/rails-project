
import { Link } from "react-router-dom";
import Footer from ".//Footer";

import PostForm from "./PostForm";
import Posts from "./Posts";

function Parent({ user }) {
  if (user) {
    return (
      <div className="text-center">
        <h1 className="shadow p-4 m-5 bg-white rounded">Welcome, {user.username}!</h1>
        <PostForm />
        <Posts />
        <Footer />
      </div>
    );
  } else {
    return (
      <div className="text-center my-5">
        <h3 className="mt-4">Please Login or Sign Up</h3>
        <div>
          <div className="">
            <Link to="/signup"><h2>Sign Up</h2></Link>
          </div>

          <div>
            <Link to="/login"><h2>Login</h2></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Parent;
