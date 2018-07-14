import React from "react";
import Nav from "../../components/Nav";
import ImageCard from "../../components/ImageCard/ImageCard";
import CommentForm from "../../components/CommentForm";


const GlobalPage = props => {
    console.log(props)

    return (
        <div className="container">
            <Nav />
            <ImageCard />
            <CommentForm />
    
            
        </div> 
    );
} 

export default GlobalPage;