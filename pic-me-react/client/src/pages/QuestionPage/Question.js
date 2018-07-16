import React, { Component } from "react";
import Nav from "../../components/Nav";
import questions from "../../utils/Questions.json";
import moment from "moment";
import API from "../../utils/API";

class Question extends Component {
    state = {
        questions,
        currentQ: questions[0].question,
        time: new Date().toLocaleString(),
        search:"",
        photo: "https://vignette.wikia.nocookie.net/uncyclopedia/images/0/01/DramaticQuestionMark.png/revision/latest?cb=20060419021703",
    };
    
    componentDidMount = () => {
        this.intervalID = setInterval(
            () => this.tick(),
            1000
          );
        };
        componentWillUnmount() {
        clearInterval(this.intervalID);
    };
  
    tick() {
        /* condition to check if current time is midnight.  iF so, run this.randomQuestion*/
        this.setState({
            time: new Date().toLocaleString()
        });
        const currentDate = moment(new Date()).format("M/DD/YYYY");
        if (this.state.time ==`${currentDate}, 12:54:30 PM`) {
            this.randomQuestion()
        }
    
    };

    handleFormSubmit = event => {

        event.preventDefault();

        console.log("Searching...");
        
        API.getManyGif(this.state.search)
            .then(res => {
                console.log(res.data.data)
                const randomGiphy = (arr) => Math.floor(Math.random() * arr.length)
                this.setState( { photo: res.data.data[randomGiphy(res.data.data)].images.original.url }, () => console.log(this.state.photo))
            })
    };

    handleInputChange = event => {

        event.preventDefault();
        console.log(event);
        this.setState({search: event.target.value})
    };
    
    randomQuestion() {
        let j = Math.floor(Math.random()*questions.length);
        console.log(j);
        let question = questions[j].question;
        console.log(question);
        // this.setState({currentQ: question});
        if (this.state.currentQ === question) {
            this.randomQuestion() 
        } else {
            this.setState({currentQ:question})
        } 
    }
    
    render() {
        return (
            <div className="container">
                <Nav />
                <h1 className="clock">{this.state.time}</h1>
                    <p>
                    {this.state.currentQ}
                    </p>
                <div>
                    <form>
                        <label> Answer:
                            <input 
                            type="text" 
                            name="search"
                            value={this.state.search}
                            onChange={this.handleInputChange}
                            />
                        </label>
                        <button 
                            id="getGif"
                            disabled={!(this.state.search)}
                            onClick={this.handleFormSubmit}>
                            Submit
                        </button>  
                    </form>
                </div>
                
                <div>
                    <img
                        alt="404 Please Search Again"
                        src={this.state.photo}
                    />
                    {/* <ImageCard
                        src = {this.state.photo}
                    /> */}
                </div>
                    {/* <form>
                        <label> Answer:
                        <input type="text" name="name" />
                        </label>
                    </form>
                <button id="getDaily">Get Daily</button> */}
                        <div className="Randomize">
                <button class="btn btn-danger btn-lg" id="randomize-btn">Randomize</button>
            </div>
            <div className="Share">
                <button class="btn btn-danger btn-lg" id="share-btn">Share</button>
            </div>
            <div className="Noshare">
            <button class="btn btn-danger btn-lg" id="noshare-btn">Don't Share</button>
            </div>
            </div>

        
        )};
}

export default Question;