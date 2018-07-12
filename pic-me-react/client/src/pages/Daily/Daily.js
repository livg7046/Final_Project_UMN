import React from "react";

const Daily = props => (
    <div className="container">

        <div className="Pic">
            {<img src="http://www.plakahotel.gr/uploads/images/284_2.png" />}
        </div>

        <div className="Randomize">
            <button class="btn btn-danger btn-lg" id="randomize-btn">Randomize</button>
        </div>
        <div className="Share">
            <button class="btn btn-danger btn-lg" id="share-btn">Share</button>
        </div>
        <div className="Noshare">
            <button class="btn btn-danger btn-lg" id="noshare-btn">Don't Share</button>
        </div>
        
    </div> 
);

export default Daily;


