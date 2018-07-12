import React from "react";

const Question = props => {
    console.log(props)

    return (
        <div className="container">
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