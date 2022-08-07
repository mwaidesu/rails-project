import React from "react";
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-light bg-danger justify-content-between py-4">
        <h1 class="navbar-brand text-white mx-4">Nairuby</h1>

        <Link to="/new">
        <button class="btn btn-outline-light my-2 my-sm-0 mx-4" type="submit">
            New Article
          </button>
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
