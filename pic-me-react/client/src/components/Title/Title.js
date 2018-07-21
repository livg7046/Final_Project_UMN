import React from "react";
import "./Title.css";

const Title = (props) => (
    <nav className="navbar" className="Nav">
        <div className="container row">
            <h1 id="title" className="text-left col-8">PicMe</h1>
            <div className="text-right col-4">
                <button className="btn btn-lg btn-link" >
                    <img className="rounded-circle" id="profile-pic-icon" src={props.src}></img>
                </button>
            </div>
        </div>
    </nav>
);

export default Title;