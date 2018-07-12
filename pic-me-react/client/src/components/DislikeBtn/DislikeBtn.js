import React from "react";

const DislikeBtn = props => (
    <span
        onClick={props.onClick}
        className={`dislike btn btn-danger ${props["data-value"]}`}
        {...props} >
        Dislike
    </span>
);

export default DislikeBtn;