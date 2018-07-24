import React from "react";
import "./Nav.css";

const Nav = (props) => (
    <nav className=" nav navbar navbar-dark">
        <div className="container">
            <div className="btn-group btn-group-lg" role="group" aria-label="User-Nav">
                <button type="button" className="btn btn-light btn-nav" aria-label="Globe"><a href="/Global">
                    <i className="fas fa-globe-americas"></i></a>
                </button>
                {/* <button type="button" class="btn btn-light btn-nav" aria-label="Users">
                    <i class="fas fa-users"></i>
                </button> */}
                <button type="button" className="btn btn-light btn-nav" aria-label="User"><a href="/UserPage">
                    <i className="fas fa-user-circle"></i></a>
                </button>
                <button type="button" className="btn btn-light btn-nav" aria-label="Logout" {...props}>
                    <i className="fas fa-user-times"></i>
                </button>
            </div>
        </div>
    </nav>
);

export default Nav;