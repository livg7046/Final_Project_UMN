
import React, { Component } from "react";
import axios from 'axios';
import Nav from "../../components/Nav";
import ImageCard from "../../components/ImageCard/ImageCard";
import CommentForm from "../../components/CommentForm";
import { Redirect } from 'react-router-dom'

class Global extends Component {
    // constructor(props) {
    //     super(props);
    //     this.handleLikeClick = this.handleLikeClick.bind(this);
    // };

    state={
        userImages: [ ],
        mostRecentUserImage: '',
        userName: '',
        userId: '',
        imageUrl: '',
        redirect: false,
        likes: 0,
        comments: [
            'Test comment.',
            'This test comment is very llllllllllllllllllllllllllooooooooooooooooooooonnnnnnnnnnnnnnngggggggggggggggggggggg!!!!!',
            'This is the LaSt TeSt CoMmEnT'
        ],
        imageId: '',
        comment: ''
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

    // setRedirect = () => {
    //     this.setState({
    //         redirect:true
    //     })
    // };

    logout = () => {
        localStorage.removeItem('jwtToken');
        window.location.reload();
        return <Redirect to='/login'/>
        };
    


    componentDidMount = () => {

        console.log(localStorage.getItem('userName'))
        // console.log(localStorage.getItem('userId'))
        this.setState({user: localStorage.getItem('userName')})
        this.setState({userId: localStorage.getItem('userId')})
        
        const url = `/api/photo/${localStorage.getItem('userId')}`;
        // console.log(url)
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        axios.get(url) 
            .then(res => {

                console.log(res.data);
                this.setState({userImages: res.data})

                console.log(this.state.userImages)
                this.setState({
                    mostRecentUserImage: (res.data[res.data.length-1]),
                    userImages: res.data
                }, () => {
                    this.getComments();
                });
                // Retrieve the last image from the userImages array
                // console.log(this.state.mostRecentUserImage)
                // console.log(this.state.mostRecentUserImage.likes)
                this.setState({likes: this.state.mostRecentUserImage.likes}, () => {
                    console.log(this.state.mostRecentUserImage)
                console.log(this.state.likes)
                })

                // console.log(res.data);
                // console.log(this.state.userImages)

                // Retrieve the last image from the userImages array

                // console.log(this.state.mostRecentUserImage);
            })
            .catch((error) => {
                if(error.response.status === 401) {
                    // this.props.history.push("/login");
                }
            });

        this.getAllPhotos();
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

    handleCommentAdd = (event) => {
        event.preventDefault();
        
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
    };

    getAllPhotos = () => {
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        axios.get('/api/photo')
            .then(res => {
                console.log(res.data)
            })
    };

    render() {
        return (

            <div className="container">

                {/* {this.logout()} */}
                <Nav onClick={() => this.logout()} />

                <ImageCard photo={this.state.mostRecentUserImage.url} onClick={this.handleLikeClick}/>

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