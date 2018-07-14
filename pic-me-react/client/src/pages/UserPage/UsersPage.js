import React from "react";
import Nav from "../../components/Nav";
import ImageCard from "../../components/ImageCard/ImageCard";

const UserPage = props => {
    console.log(props)

    return (
        <div className="container">
            <Nav />
            <ImageCard />
            <h2>""COMMENT FORM GOES HERE"</h2>
    
            {/* <div class="form-check">
                <label class="form-check-label">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
                    Option one is this and that&mdash;be sure to include why it's great </input>
                </label>
            </div>
            <div class="form-check">
                <label class="form-check-label">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
                Option two can be something else and selecting it will deselect option one </input>
            </label>
            </div>
    
            */}
        </div> 
    );
} 

export default UserPage;