
import React, { Component } from "react";
import axios from 'axios';
import Nav from "../../components/Nav";
import ImageCard from "../../components/ImageCard/ImageCard";
import CommentForm from "../../components/CommentForm";
import { Redirect } from 'react-router-dom'

class Global extends Component {

    state={
        userImages: [ ],
        mostRecentUserImage: '',
        userName: '',
        userId: '',
        imageUrl: 'https://vignette.wikia.nocookie.net/uncyclopedia/images/0/01/DramaticQuestionMark.png/revision/latest?cb=20060419021703',
        caption:'',
        redirect: false

    };

    handleLikeClick() {
        console.log("like button clicked")
        this.setState({
            likes:this.state.likes + 1
        });
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
                {this.logout()}
                <Nav onClick={() => this.setRedirect()} />

                <ImageCard photo={this.state.mostRecentUserImage.url} /*clicked={this.handleLikeClick()}*//>
                <CommentForm />                
            </div> 
        );
    };
};

export default Global;