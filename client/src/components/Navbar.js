import React from "react";
import { Link } from "react-router-dom";

function Navbar({user,setUser}) {

function handleLogout() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <div>
      <nav class="navbar navbar-light bg-danger justify-content-between py-4">
        
        <Link to="/"><button class="btn btn-outline-light my-2 my-sm-0 mx-4" >Nairuby</button></Link>


<div>
        {user ? (
          <button className="btn btn-outline-light my-2 my-sm-0 mx-4"  onClick={handleLogout}>Logout</button>
        ) : (
          <>
            <Link to="/signup"></Link>
            <Link to="/login"></Link>
          </>
        )}
      </div>
        
      </nav>
    </div>
  );
}

export default Navbar;
