import React, { Component } from "react";
// import Nav from "../../components/Nav";
import axios from 'axios';
// import API from "../../utils/API";

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

// const Daily = props => (
//     <div className="container">

//         <div className="Pic">
//             {<img src="http://www.plakahotel.gr/uploads/images/284_2.png" />}
//         </div>

//         <div className="Randomize">
//             <button class="btn btn-danger btn-lg" id="randomize-btn">Randomize</button>
//         </div>
//         <div className="Share">
//             <button class="btn btn-danger btn-lg" id="share-btn">Share</button>
//         </div>
//         <div className="Noshare">
//             <button class="btn btn-danger btn-lg" id="noshare-btn">Don't Share</button>
//         </div>
        
//     </div> 
// );

class Daily extends Component {

    state={
        userImages: [ ],
        mostRecentUserImage: '',
        userName: '',
        userId: '',
        imageUrl: 'https://vignette.wikia.nocookie.net/uncyclopedia/images/0/01/DramaticQuestionMark.png/revision/latest?cb=20060419021703',
        caption:'',

    };

    componentDidMount = () => {
        
        console.log(localStorage.getItem('userName'))
        console.log(localStorage.getItem('userId'))
        this.setState({user: localStorage.getItem('userName')})
        this.setState({userId: localStorage.getItem('userId')})
        const url = `/api/photo/${localStorage.getItem('userId')}`;
        console.log(url)
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        axios.get(url) 
            .then(res => {
                console.log(res.data);
                this.setState({userImages: res.data})
                console.log(this.state.userImages)

                // Retrieve the last image from the userImages array
                this.setState({mostRecentUserImage: (this.state.userImages[this.state.userImages.length-1])});
                console.log(this.state.mostRecentUserImage)

            })
            .catch((error) => {
                if(error.response.status === 401) {
                    this.props.history.push("/login");
                }
            });
    };

    render() {
        return (

            <div className="container">
                <div className="Pic">
                    <img 
                    src={this.state.mostRecentUserImage.url} 
                    alt="alt"/>
                </div>                
            </div> 





        );
    };
};

export default Daily;
