import React from "react";
import API from "../../utils/API";

class Test extends React.Component {

    state = {
        photo: "https://vignette.wikia.nocookie.net/uncyclopedia/images/0/01/DramaticQuestionMark.png/revision/latest?cb=20060419021703",

    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log("Searching...");
        API.getRandomGif(this.state.search)
            .then(res => 
                this.setState( { photo: res.data.data[0].images.original.url } ) 
                
            )
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
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
                    id="getDaily"
                    disabled={!(this.state.search)}
                    onClick={this.handleFormSubmit}
                    >
                    Submit
                </button>

                <img
                    alt="test"
                    src={this.state.photo}
                />
            </div>
        )
    }
};

export default Test;