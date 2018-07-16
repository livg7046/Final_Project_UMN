import React from "react";
// import API from "../utils/API";

// class Daily extends Comment {
//     state = {
//         url: "",
//     };

//     componentDidMount() {
//         API.getRandomGif()
//             .then(res => this.setState({url: res.data.url}))
//             .catch(err => console.log(err));
//     }

//     handleInputChange = event => {
//         this.setState({})
//     }
// }

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


