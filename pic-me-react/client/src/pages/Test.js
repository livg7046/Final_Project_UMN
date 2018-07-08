import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card";

class Test extends Component {
    state = {
        image: ""
    };

    componentDidMount() {
        this.loadImage();
    }

    loadImage = () => {
        API.getRandomGif()
            .then(res => 
                this.setState({
                    image: res.data.message
                })
            )
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <Card image={this.state.image} />
            </div>
        )
    }
}

export default Test;