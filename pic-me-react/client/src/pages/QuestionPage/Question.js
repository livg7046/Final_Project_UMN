import React from "react";
import Nav from "../../components/Nav";

const Question = props => {
    console.log(props)

    return (
        <div className="container">
            <Nav />
            <p>
                {props.question}
            </p>
    
            <form>
                <label> Answer:
                <input type="text" name="name" />
                </label>
            </form>
    
            <button id="getDaily">Get Daily</button>
        </div>
    );
} 

export default Question;