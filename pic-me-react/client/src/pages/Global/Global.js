
import React, { Component } from "react";
import axios from 'axios';
import Nav from "../../components/Nav";
import ImageCard from "../../components/ImageCard/ImageCard";
import CommentForm from "../../components/CommentForm";

class Global extends Component {

    state={
        userImages: [ ],
        mostRecentUserImage: '',
        userName: '',
        userId: '',
        imageUrl: 'https://vignette.wikia.nocookie.net/uncyclopedia/images/0/01/DramaticQuestionMark.png/revision/latest?cb=20060419021703',
        caption:'',
        comments: [],
        likes: "",
        imageId: '',
        comment: ''

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
                console.log(this.state.userImages)

                // Retrieve the last image from the userImages array
                this.setState({
                    mostRecentUserImage: (res.data[res.data.length-1]),
                    userImages: res.data
                }, () => {
                    this.getComments();
                });
                console.log(this.state.mostRecentUserImage);
            })
            .catch((error) => {
                if(error.response.status === 401) {
                    this.props.history.push("/login");
                }
            });
    };

    handleInputChange = event => {

        event.preventDefault();
        console.log(event);
        this.setState({comment: event.target.value})
    };

    getComments = () => {
        this.setState( { imageId: this.state.mostRecentUserImage._id }, () => {
            console.log(this.state, 'getting comments')

            const url = `/api/photo/${this.state.imageId}`;
            console.log(url)
    
            axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    
            axios.get(`/api/photo/${this.state.imageId}/comments`)
                .then(res => {
                    console.log(res.data.comments);
                    this.setState({comments: res.data.comments})
                })
        })

    }

    handleCommentAdd = (event) => {
        event.preventDefault();
        console.log("comment test")
        
        let commentObject = {
            author: this.state.userId,
            body: this.state.comment,
        };

        console.log(commentObject);

        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');

        axios.post(`/api/photo/${this.state.imageId}/comments`, commentObject)
            .then(res => {
                console.log(res);
            })
    }

    render() {
        return (

            <div className="container">
                <Nav />
                <div className="Pic">
                    <img 
                    src={this.state.mostRecentUserImage.url} 
                    alt="alt"/>
                </div>
                <ImageCard />
                <CommentForm 
                    onClick={this.handleCommentAdd}
                    name="comment"
                    value={this.state.comment}
                    onChange={this.handleInputChange}
                    />
            </div> 
        );
    };
};

export default Global;