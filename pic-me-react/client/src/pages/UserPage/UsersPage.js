import React, { Component } from "react";
import axios from 'axios';
import Nav from "../../components/Nav";
import ImageCard from "../../components/ImageCard/ImageCard";
import CommentForm from "../../components/CommentForm";
import './UsersPage.css';


// const UserPage = props => {
//     console.log(props)

class UserPage extends Component {

    state={
        userImages: [ ],
        mostRecentUserImage: '',
        userName: '',
        userId: '',
        imageUrl: 'https://vignette.wikia.nocookie.net/uncyclopedia/images/0/01/DramaticQuestionMark.png/revision/latest?cb=20060419021703',
        caption:'',

    };

    logout = () => {
        localStorage.removeItem('jwtToken');
        window.location.reload();
        console.log("Logout!");
        this.props.history.push("/login")
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
                    // this.props.history.push("/login");
                }
            });
    };
    render() {
        return (
            <div className="container">
                <Nav onClick={() => this.logout()} />
                <ImageCard photo={this.state.mostRecentUserImage.url} /*clicked={this.handleLikeClick()}*//>
                <CommentForm />
        
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
}
    

export default UserPage;