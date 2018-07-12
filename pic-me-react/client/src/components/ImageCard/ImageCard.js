import React from "react";
import "./ImageCard.css";
// import Btn from "../Btn";

const ImageCard = props => (
    <div
        className = "imageCard"
        style = {{
            backgroundImage: props.image ? `url(${props.image})` : "none"
        }}
    >
    </div>
);

export default ImageCard;