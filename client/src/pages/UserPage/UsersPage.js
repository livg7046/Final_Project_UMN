import React, { Component } from "react";
import axios from 'axios';
import Nav from "../../components/Nav";
import ImageCard from "../../components/ImageCard/ImageCard";
import { Input, FormBtn } from "../../components/Form";
// import CommentForm from "../../components/CommentForm";
import './UsersPage.css';

class UsersPage extends Component {

    state = {
        userImages: [ ],
        mostRecentUserImage: '',
        userName: '',
        userId: '',
        imageUrl: '',
        imageId: '',
        caption: '',
    };

    componentDidMount = () => {

        if (localStorage.getItem('jwtToken')===null) {
            this.props.history.push("/login");
        }

        this.setState({user: localStorage.getItem('userName')})
        this.setState({userId: localStorage.getItem('userId')})

        this.getUserImages();
    };

    getUserImages = () => {

        const url = `/api/photo/${localStorage.getItem('userId')}`;

        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');

        axios.get(url)
            .then(res => {
                console.log(`Images`, res.data);
                this.setState({
                    userImages: res.data,
                    mostRecentUserImage: (res.data[res.data.length-1]),
                    
                }, () => {
                    console.log(`Images`, this.state.userImages)
                });
            })
            .catch((error) => {
                if(error.response.status === 401) {
                    this.props.history.push("/login");
                }
            });
    };

    handleInputChange = event => {
        event.preventDefault();
        this.setState({caption: event.target.value})
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
        
        let captionObject = {
            caption: this.state.caption
        };

        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');

        axios.put(`/api/photo/${this.state.mostRecentUserImage._id}`, captionObject)
            .then(res => {
                console.log(res);
            })

            window.location.reload();
    };

    logout = () => {
        localStorage.removeItem('jwtToken');
        window.location.href = "/"
        console.log("Logout!")
    };

    handleLikeClick = id => {

        // event.preventDefault();
        console.log("like button clicked");

        console.log(id)

    };

    render() {
        return (
            <div className="container">
                <Nav onClick={() => this.logout()} />
                <h1>{this.state.user}'s Photo of the Day</h1>
                <ImageCard 
                    photo={this.state.mostRecentUserImage.url}
                    caption={this.state.mostRecentUserImage.caption}
                    likes={this.state.mostRecentUserImage.likes}
                    user="YOU !"
                    handleLikeClick={this.handleLikeClick}
                />
                <form> 
                    <h5>Update Caption Here</h5>
                    <Input
                        value={this.state.caption}
                        onChange={this.handleInputChange}
                    />
                    <FormBtn 
                        disabled={!(this.state.caption)}
                        onClick={this.handleFormSubmit}    
                    >
                        Submit
                    </FormBtn>
                </form>
                
            </div> 
        );
    };
};

export default UsersPage;