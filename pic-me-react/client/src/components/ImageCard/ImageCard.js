import React from "react";
import "./ImageCard.css";
// import Btn from "../Btn";

const ImageCard = props => (

    <div className="container">
        <div className="imageCard">
            <img 
                src = {props.photo ? props.photo : "https://instantedgemarketing.com/wp-content/uploads/2016/10/bigstock-Question-Mark-Asking-Confusion-108659435.jpg"}
                alt = "gif"
                
            />
            <div className="like-btn">
            <button className="btn like" type="button" onClick={props.clicked}><i className="far fa-heart fa-3x"></i></button>
        {/*<button className="btn thumbsup" type="button"><i className="fas fa-thumbs-up fa-2x"></i></button>*/}
            </div>
        </div>
    </div>
);

export default ImageCard;