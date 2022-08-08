import { Link } from "react-router-dom";
import Footer from ".//Footer";

import PostForm from "./PostForm";
import Posts from "./Posts";

function Parent({ user }) {
  if (user) {
    return (
      <div className="text-center">
        <h1 className="shadow p-4 m-5 bg-white rounded">
          Welcome, {user.username}!
        </h1>
        <PostForm />
        <Posts />
        <Footer />
      </div>
    );
  } else {
    return (
      <div>
        <div className="head-text">
          <div className="head-image">
            <img className="w-100" src="https://bloggingfordevs.com/images/trends-images/ruby-blogs.png" alt="Freedom Blog" />
          </div>
          <div class="text-on-image shadow rounded">
          <h3 className="py-4  text-white display-6">Please Login or Sign Up</h3>
          <div>
            <div className="mb-5 ">
              <Link to="/signup">
                <button class="btn btn-outline-light my-sm-0 mx-4">
                  Sign Up
                </button>
              </Link>

              <Link to="/login">
                <button class="btn btn-outline-light my-sm-0 mx-4">
                  Login
                </button>
              </Link>
            </div>
          </div>
          </div>
        </div>

        {/* <div className="text-center bg-danger home">
          <img
            className="w-75"
            src="https://bloggingfordevs.com/images/trends-images/ruby-blogs.png"
            alt="ruby blog"
          />


        </div> */}
      </div>
    );
  }
}

export default Parent;
