import React, { Component } from "react";
import Nav from "../../components/Nav";
import questions from "../../utils/Questions.json";
import moment from "moment";
import axios from 'axios';
import API from "../../utils/API";

class Question extends Component {
    state = {
        questions,
        currentQ: questions[0].question,
        time: new Date().toLocaleString(),
        currentDate: moment(new Date()).format("M/DD/YYYY"),
        search:"",
        photo: "https://vignette.wikia.nocookie.net/uncyclopedia/images/0/01/DramaticQuestionMark.png/revision/latest?cb=20060419021703",
        days: 0,
        hours: 0,
        min: 0,
        sec: 0,
        user: '',
        userId: ''
    };
    
    componentDidMount = () => {
        // axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        console.log(localStorage.getItem('jwtToken'))
        console.log(localStorage.getItem('userName'))
        console.log(localStorage.getItem('userId'))
        this.setState({user: localStorage.getItem('userName')})
        this.setState({userId: localStorage.getItem('userId')})

        if (localStorage.getItem('jwtToken')===null) {
            this.props.history.push("/login");
        }

        this.intervalID = setInterval(
            () => this.tick(),
            1000
        );
        
        this.intervalID = setInterval(() => this.tick(), 1000);
        this.dateID = setInterval(() => this.dateTicker(moment().add(1,'days').startOf('day')), 1000)
    };
    componentWillUnmount() {
        clearInterval(this.intervalID);
        clearInterval(this.dateID)
    };

    stop() {
        clearInterval(this.dateID)
        // make pretty things appear
    }

    dateTicker(midnight) {
        let diff = (Date.parse(midnight) - Date.parse(new Date())) / 1000;
        
        if (diff <= 0) this.stop();

        const timeLeft = {
            days: 0,
            hours: 0,
            min: 0,
            sec: 0
        };
    
        if (diff >= 86400) { // 24 * 60 * 60
        timeLeft.days = Math.floor(diff / 86400);
        diff -= timeLeft.days * 86400;
        }
        if (diff >= 3600) { // 60 * 60
        timeLeft.hours = Math.floor(diff / 3600);
        diff -= timeLeft.hours * 3600;
        }
        if (diff >= 60) {
        timeLeft.min = Math.floor(diff / 60);
        diff -= timeLeft.min * 60;
        }
        timeLeft.sec = diff;
    
        this.setState({...this.state, ...timeLeft})
        // console.log(this.state)
    
    }

    tick() {
        /* condition to check if current time is midnight.  iF so, run this.randomQuestion*/
        this.setState({
            time: new Date().toLocaleString()
        });
        // const currentDate = moment(new Date()).format("M/DD/YYYY");
        if (this.state.time ===`${this.state.currentDate}, 9:13:00 PM`) {
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
    };

    logout = () => {
        localStorage.removeItem('jwtToken');
        window.location.reload();
        console.log("Logout!")
    };

    handleShareButton = event => {
        let photoObject = {
            url: this.state.photo,
            caption: this.state.search,
            user: this.state.user,
            userId: this.state.userId,
            likes: 0,
            date: this.state.currentDate
        };

        console.log(photoObject);

        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        axios.post('/api/photo', photoObject)
            .then(res => {
            
                console.log(res);
            })

        this.props.history.push("/global");
        
        // API.saveUserImage({
        //     photoObject
        // })
        // .then(res => console.log(res))
        // .catch(err => console.log(err));
    };
    
    render() {
        return (
            <div className="container">
                <Nav onClick={() => this.logout()} />
                {/* <h1 className="clock">{this.state.time}</h1> */}
                <h2 className="clock">{this.state.currentDate}</h2>
                <h3 className="timer">{this.state.hours} Hours {this.state.min} Minutes {this.state.sec} Seconds Remaining!
                </h3>
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
                            Search
                        </button>  
                    </form>
                </div>
                
                <div>
                    <img
                        alt="404 Please Search Again"
                        src={this.state.photo}
                    />
                </div>
                    {/* <form>
                        <label> Answer:
                        <input type="text" name="name" />
                        </label>
                    </form>
                <button id="getDaily">Get Daily</button> */}

                <div className="Randomize">
                    <button class="btn btn-danger btn-lg" id="randomize-btn" onClick={this.handleFormSubmit}>Randomize</button>
                </div>
                <div className="Share">
                    <button class="btn btn-danger btn-lg" id="share-btn" onClick={this.handleShareButton}>Share </button>
                </div>
                <div className="Noshare">
                    <button class="btn btn-danger btn-lg" id="noshare-btn">Not Today</button>
                </div>
            </div>
        )};
}

export default Question;
