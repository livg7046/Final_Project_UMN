import React from "react";
import "./Nav.css";

const Nav = () => (
    <nav class="navbar navbar-dark bg-dark" className="Nav">
            <h1>
                PicMe
            </h1>
            <div class="btn-group btn-group-lg" role="group" aria-label="User-Nav">
            
            <button type="button" class="btn btn-dark" aria-label="Globe">
                <i class="fas fa-globe-americas"></i>
            </button>
            {/* <button type="button" class="btn btn-dark" aria-label="Users">
                <i class="fas fa-users"></i>
            </button> */}
            <button type="button" class="btn btn-dark" aria-label="User">
                <i class="fas fa-user-circle"></i>
            </button>
        </div>
    </nav>
);

export default Nav;