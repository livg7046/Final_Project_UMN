
import React, { Component } from "react";
import axios from 'axios';
import Nav from "../../components/Nav";
import ImageCard from "../../components/ImageCard/ImageCard";
// import CommentForm from "../../components/CommentForm";

class Global extends Component {

    state = {
        userName: '',
        userId: '',
        imageUrl: '',
        imageId: '',
        allImages: [ ]
    };

    componentDidMount = () => {

        this.setState({userName: localStorage.getItem('userName')})
        this.setState({userId: localStorage.getItem('userId')})
        
        this.getAllPhotos();
    };

    handleLikeClick = event => {
        event.preventDefault();
        console.log("like button clicked");
    
        console.log(this.state.likes);
        
        this.setState({
            likes: this.state.likes + 1
        }, () => {
            console.log(this.state.likes);
        //     photoLikesObject = {
        //     likes: this.state.likes
        // };
let photoLikesObject = {
    likes: this.state.likes
};
        axios.put('/api/photo/5b591f2cbdc6d60a7473ddf6', photoLikesObject)
        .then(res => {
            console.log("in then statement");
            // console.log(this.state.likes)
            console.log(res);
            console.log(res.data);
        });
        //     return photoLikesObject;
        });        
        
        
        // console.log(photoLikesObject);
        // this.setState((likes, props) => ({
        //     counter: likes.counter + props.increment
        // })); 
    };

    handleInputChange = event => {
        event.preventDefault();
        this.setState({comment: event.target.value})
    };

    getComments = () => {
        this.setState( { imageId: this.state.mostRecentUserImage._id }, () => {
            // console.log(this.state)

            const url = `/api/photo/${this.state.imageId}/comments`;
            // console.log(url)
    
            axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    
            axios.get(url)
                .then(res => {
                    console.log(res.data, 'comment data')

                    // const commentData = res.data.map(res.data.comments)
                    // console.log(commentData)
                    // this.setState({comments: res.data.comments})
                    // console.log(this.state.comments.body)
                })
        })

    };

    handleCommentAdd = (event) => {
        event.preventDefault();
        
        let commentObject = {
            author: this.state.userId,
            authorUserName: this.state.userName,
            body: this.state.comment,
        };

        console.log(commentObject);

        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');

        axios.post(`/api/photo/${this.state.imageId}/comments`, commentObject)
            .then(res => {
                console.log(res);
            })
    };

    getAllPhotos = () => {
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        axios.get('/api/photo')
            .then(res => {
                console.log(res.data)
                this.setState({allImages: res.data})
            })
    };

    logout = () => {
        localStorage.removeItem('jwtToken');
        window.location.reload();
        console.log("Logout!")
    };

    render() {
        return (

            <div className="container">

                <Nav onClick={() => this.logout()} />
                <h1>Global Leaderboard</h1>
                {this.state.allImages.map(image => (

                    <ImageCard
                        id={image._id}
                        key={image._id}
                        photo={image.url}
                        user={image.user}
                        likes={image.likes}
                        caption={image.caption}
                    />
                    /* <CommentForm 
                        onClick={this.handleCommentAdd}
                        name="comment"
                        value={this.state.comment}
                        onChange={this.handleInputChange}
                    /> */
                ))}

            </div> 
        );
    };

};

export default Global;