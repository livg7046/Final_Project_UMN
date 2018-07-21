import React from "react";
import "./ImageCard.css";
// import Btn from "../Btn";

const ImageCard = props => (

    // handleLikeClick() {
        
    //     this.setState({
    //         likes:this.state.likes + 1
    //     });
    // };

    <div className="container">
        <div className="imageCard">
            <img 
                src = {props.photo ? props.photo : "https://4.bp.blogspot.com/-NRb_00TX9rc/VVZcMiW28tI/AAAAAAAAAQ4/mr2EgcSmCWs/s1600/50+THINGS+TO+DO+TOGETHER.png"}
                alt = "gif"
                
            />
            <div className="like-btn">
            <button className="btn like" type="button" onClick={this.handleLikeClick}><i className="fas fa-heart fa-3x"></i></button>
        {/*<button className="btn thumbsup" type="button"><i className="fas fa-thumbs-up fa-2x"></i></button>*/}
            </div>
        </div>
    </div>
);

export default ImageCard;