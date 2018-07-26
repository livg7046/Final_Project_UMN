
import React, { Component } from "react";
import axios from 'axios';
import Nav from "../../components/Nav";
import ImageCard from "../../components/ImageCard/ImageCard";
import CommentForm from "../../components/CommentForm";
import { Redirect } from 'react-router-dom'

class Global extends Component {
    constructor(props) {
        super(props);
        this.handleLikeClick = this.handleLikeClick.bind(this);
    };

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
        let photoLikesObject = {
            _id: this.state._id,
            likes: this.state.likes
        };
        
        let l = this.state.likes + 1
        console.log(l);
        // this.setState({
        //     likes: l
        // });
        this.setState((likes, props) => ({
            counter: likes.counter + props.increment
        })); 
        console.log(l);
        // axios.put('/api/photo', photoLikesObject)
        //     .then(res => {
        //         console.log(res);
        //     })
        
        console.log(this.state.likes);
    };

    setRedirect = () => {
        this.setState({
            redirect:true
        })
    };

    logout = () => {
        if (this.state.redirect) {
            console.log("Logout!");
            this.setState({
            userName:'',
            userId:''
        })
        localStorage.removeItem('jwtToken');
        window.location.reload();
        return <Redirect to='/login'/>
        }
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

                // Retrieve the last image from the userImages array
                console.log(this.state.mostRecentUserImage)
                console.log(this.state.mostRecentUserImage.likes)
                this.setState({likes: this.state.mostRecentUserImage.likes})
                console.log(this.state.likes)

                // console.log(res.data);
                // console.log(this.state.userImages)

                // Retrieve the last image from the userImages array
                this.setState({
                    mostRecentUserImage: (res.data[res.data.length-1]),
                    userImages: res.data
                }, () => {
                    this.getComments();
                });
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
    }
    logout = () => {
        localStorage.removeItem('jwtToken');
        window.location.reload();
        console.log("Logout!")
    };

    render() {
        return (

            <div className="container">

                {/* {this.logout()} */}
                <Nav onClick={() => this.setRedirect()} />

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