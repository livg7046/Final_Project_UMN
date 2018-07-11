import React from "react";
import API from "../../utils/API";

class Test extends React.Component {

    state = {
        search:"",
        photo: "https://vignette.wikia.nocookie.net/uncyclopedia/images/0/01/DramaticQuestionMark.png/revision/latest?cb=20060419021703",
        pics: [],
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log("Searching...");
        API.getRandomGif(this.state.search)
            .then(res => 
                this.setState( { photo: res.data.data[0].images.original.url } )     
            )
            console.log(this.state.photo)
    };

    handleFormSubmit2 = event => {
        event.preventDefault();
        console.log("Searching...");
        API.getManyGif(this.state.search)
            .then(res => 
                // this.setState( { pics: res.data.data.images.original.url } )
                // randomGif(res.data.data)
                // this.setState({pics: res.data.data})
                console.log(res.data.data)
                
                // this.randomGif(res.data.data)
                // this.setState({pics: res.data.data})
            )
            console.log(this.state.pics)
    };

    handleInputChange = event => {
        this.setState({search: event.target.value})
    };

    render() {
        return (
            <div>
                <form>
                    <label> Search:
                        <input 
                            type="text" 
                            name="search"
                            value={this.state.search}
                            onChange={this.handleInputChange}
                        />
                    </label>  
                </form>
                <button 
                    id="getGif"
                    disabled={!(this.state.search)}
                    onClick={this.handleFormSubmit2}
                    >
                    Submit
                </button>
                <div>
                    <img
                        alt="test"
                        src={this.state.photo}
                    />
                </div>
            </div>
        )
    }
};

export default Test;