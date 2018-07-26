import React from "react";
import "./ImageCard.css";
// import Btn from "../Btn";

const ImageCard = props => (

    <div className="container">
        <div className="imageCard">
            <img 
                src = {props.photo ? props.photo : "https://instantedgemarketing.com/wp-content/uploads/2016/10/bigstock-Question-Mark-Asking-Confusion-108659435.jpg"}
                alt = "gif"
                user = {props.user}
                caption = {props.caption}
                likes = {props.likes}    
            />
            <div className="like-btn">
                <button className="btn like" type="button" onClick={props.onClick}><i className="far fa-heart fa-3x"></i></button>
                {/*<button className="btn thumbsup" type="button"><i className="fas fa-thumbs-up fa-2x"></i></button>*/}
            </div>
        </div>
        <div className = "imageProps">
            <div className = "caption">
                <h5>{props.caption}</h5>
            </div>
            <div className = "user">
                <h5>Posted By {props.user}</h5>
            </div>
            <div className = "like-amt">
                <h5>Likes {props.likes}</h5>
            </div>
        </div>
    </div>
);

export default ImageCard;