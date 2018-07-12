import React from "react";

const LikeBtn = props => (
    <span
        onClick={props.onClick}
        className={`like btn btn-success ${props["data-value"]}`}
        {...props} >
        Like
    </span>
);

export default LikeBtn;