import React, { Component } from "react";
import axios from 'axios';
import Nav from "../../components/Nav";
import ImageCard from "../../components/ImageCard/ImageCard";
// import CommentForm from "../../components/CommentForm";
import './UsersPage.css';

class UsersPage extends Component {

    state={
        userImages: [ ],
        mostRecentUserImage: '',
        userName: '',
        userId: '',
        imageUrl: '',
        caption:'',
        comments: [],
        likes: "",
        imageId: '',
        comment: ''

    };

    componentDidMount = () => {

        console.log('hi', localStorage.getItem('userName'))
        // console.log(localStorage.getItem('userId'))
        this.setState({user: localStorage.getItem('userName')})
        this.setState({userId: localStorage.getItem('userId')})
        const url = `/api/photo/${localStorage.getItem('userId')}`;
        // console.log(url)
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        axios.get(url) 
            .then(res => {

                // console.log(res.data);
                // console.log(this.state.userImages)

                // Retrieve the last image from the userImages array
                this.setState({
                    mostRecentUserImage: (res.data[res.data.length-1]),
                    userImages: res.data
                }, () => {
                    console.log(this.state.userImages)
                    this.getComments();
                    
                });
                // console.log(this.state.mostRecentUserImage);
            })
            .catch((error) => {
                if(error.response.status === 401) {
                    this.props.history.push("/login");
                }
            });
    };

    handleInputChange = event => {

        event.preventDefault();
        this.setState({comment: event.target.value})
    };

    getComments = () => {
        this.setState( { imageId: this.state.mostRecentUserImage._id }, () => {
            console.log('getting comments')
            console.log(this.state)

            const url = `/api/photo/${this.state.imageId}/comments`;
            // console.log(url)
    
            axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    
            axios.get(url)
                .then(res => {
                    console.log(res.data, 'comment data');

                    // const commentData = res.data.map(res.data.comments)
                    // console.log(commentData)
                    // this.setState({comments: res.data.comments})
                    // console.log(this.state.comments.body)
                })
        })
    };

    // handleCommentAdd = (event) => {
    //     event.preventDefault();
        
    //     let commentObject = {
    //         author: this.state.userId,
    //         body: this.state.comment,
    //     };

    //     console.log(commentObject);

    //     axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');

    //     axios.post(`/api/photo/${this.state.imageId}/comments`, commentObject)
    //         .then(res => {
    //             console.log(res);
    //         })
    // };

    logout = () => {
        localStorage.removeItem('jwtToken');
        window.location.reload();
        console.log("Logout!")
    };

    render() {
        return (

            <div className="container">
                <Nav onClick={() => this.logout()} />
                {/* <div className="Pic">
                    <img 
                    src={this.state.mostRecentUserImage.url} 
                    alt="alt"/>
                </div> */}
                <ImageCard photo={this.state.mostRecentUserImage.url}/>
                {/* <CommentForm 
                    onClick={this.handleCommentAdd}
                    name="comment"
                    value={this.state.comment}
                    onChange={this.handleInputChange}
                    /> */}
            </div> 
        );
    };
};

export default UsersPage;