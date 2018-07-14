import React from "react";

const ScoreMeter = props => (

    <div>
        <h1>Score This Caption!</h1>

        <button
            data-id="1"
            className="btn btn-primary"    
        > 
        1 
        </button>
        
        <button
            data-id="2"
            className="btn btn-primary"
        > 
        2 
        </button>

        <button
            data-id="3"
            className="btn btn-primary"
        > 
        3 
        </button>

        <button
            data-id="4"
            className="btn btn-primary"
        > 
        4 
        </button>

        <button
            data-id="5"
            className="btn btn-primary"
        > 
        5 
        </button>

    </div>

);

export default ScoreMeter;