import React from "react";
import "./Nav.css";

const Nav = () => (
    <nav className=" nav navbar navbar-dark bg-dark">
            <h1>
                PicMe
            </h1>
        <div className="container">
            <div className="btn-group btn-group-lg" role="group" aria-label="User-Nav">
                <button type="button" className="btn btn-dark" aria-label="Globe">
                    <i className="fas fa-globe-americas"></i>
                </button>
                {/* <button type="button" class="btn btn-dark" aria-label="Users">
                    <i class="fas fa-users"></i>
                </button> */}
                <button type="button" className="btn btn-dark" aria-label="User">
                    <i className="fas fa-user-circle"></i>
                </button>
            </div>
        </div>
    </nav>
);

export default Nav;