import React from "react";

const Question = props => (
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

export default Question;