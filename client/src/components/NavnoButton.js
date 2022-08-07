import React from "react";

function NavnoButton() {

// function handleLogout() {
//     fetch("/logout", { method: "DELETE" }).then((r) => {
//       if (r.ok) {
//         setUser();
//       }
//     });
//   }

  return (
    <div>
      <nav class="navbar navbar-light bg-danger justify-content-between py-4">
        <h1 class="navbar-brand text-white mx-4">Nairuby</h1>

        
        {/* <button class="btn btn-outline-light my-2 my-sm-0 mx-4" type="submit" onClick={handleLogout}>
            Login
          </button> */}
      </nav>
    </div>
  );
}

export default NavnoButton;
