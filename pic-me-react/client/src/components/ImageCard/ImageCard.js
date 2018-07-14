import React from "react";
import "./ImageCard.css";
// import Btn from "../Btn";

const ImageCard = props => (
    // <div
    //     className = "imageCard"
    //     style = {{
    //         backgroundImage: props.image ? `url(${props.image})` : "none"
    //     }}
    // >
    // </div>

    <img 
        src = {props.photo ? props.photo : "https://vignette.wikia.nocookie.net/uncyclopedia/images/0/01/DramaticQuestionMark.png/revision/latest?cb=20060419021703"}
        alt = "gif"
    />
    
);

export default ImageCard;