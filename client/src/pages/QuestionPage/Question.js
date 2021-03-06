import React, { Component } from "react";
// import Nav from "../../components/Nav";
import questions from "../../utils/Questions.json";
import moment from "moment";
import axios from 'axios';
import API from "../../utils/API";
import './Question.css';
import Countdown from "../../components/CountdownTimer";

class Question extends Component {
    state = {
        questions,
        currentQ: questions[0].text,
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

    getDayOfYear = () => {
        var now = new Date();
        var start = new Date(now.getFullYear(), 0, 0);
        var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
        var oneDay = 1000 * 60 * 60 * 24;
        var day = Math.floor(diff / oneDay);
        return day
    };

    componentDidMount = () => {

        // axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');

        this.setState({
            user: localStorage.getItem('userName'),
            userId: localStorage.getItem('userId'), 
            currentQ: localStorage.getItem('question') || questions[this.getDayOfYear() % (questions.length-1)].text
        })

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

    componentWillUnmount = () => {
        clearInterval(this.intervalID);
        clearInterval(this.dateID)
    };

    stop = () => {
        clearInterval(this.dateID)
        // make pretty things appear
    };

    dateTicker = (midnight) => {
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
    
    };

    tick= () => {
        /* condition to check if current time is midnight.  iF so, run this.randomQuestion*/
        this.setState({
            time: new Date().toLocaleString()
        });
        // const currentDate = moment(new Date()).format("M/DD/YYYY");
        if (this.state.time ===`${this.state.currentDate}, 7:51:00 PM`) {
            this.randomQuestion()
        }
        
    };

    handleFormSubmit = event => {

        event.preventDefault();

        console.log("Searching...");
        
        API.getMany(this.state.search)
            .then(res => {
                console.log(res.data.data.length)
                if (res.data.data.length > 0) {
                    
                    const random = (arr) => Math.floor(Math.random() * arr.length)
                    this.setState( { photo: res.data.data[random(res.data.data)].images.original.url }, () => console.log(this.state.photo))
                } else  
                    this.setState({photo: "http://www.arihav.com/products/pictures/pna.jpg"});
            })
};
    

    handleInputChange = event => {
        event.preventDefault();
        this.setState({search: event.target.value})
    };

    randomQuestion = () => {
        let j = Math.floor(Math.random()*questions.length);
        console.log(j);
        let quest = questions[j].text;
        console.log(this.state.currentQ);
        
        if (this.state.currentQ === quest) {
            this.randomQuestion() 
        } else {
            localStorage.setItem('question', quest);
            this.setState({currentQ:quest})
        } 
    };

    logout = () => {
        localStorage.removeItem('jwtToken');
        window.location.reload();
        console.log("Logout!")
    };

    handleShareButton = () => {

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

        this.props.history.push("/userpage");
    };
    
    render() {
        return (
            <div className="container">
                <Countdown
                    hours={this.state.hours}
                    min={this.state.min}
                    sec={this.state.sec}
                    currentQ={this.state.currentQ}
                />
                <form>
                    <label>
                        <input 
                            type="text" 
                            name="search"
                            className="form-control"
                            id="answer"
                            placeholder="Answer"
                            value={this.state.search}
                            onChange={this.handleInputChange}
                        />
                    </label>
                    <button
                        className="btn btn-danger"
                        id="getGif"
                        disabled={!(this.state.search)}
                        onClick={this.handleFormSubmit}>
                        Search
                    </button>  
                </form>
                <div>
                    <img
                        alt="404 Please Search Again"
                        src={this.state.photo}
                    />
                </div>

                {/* <div className="Share"> */}
                    <button className="btn btn-danger btn-lg" id="share-btn" onClick={this.handleShareButton}>Share </button>
                {/* </div> */}
                {/* <div className="Noshare"> */}
                    <button className="btn btn-danger btn-lg" id="noshare-btn" onClick={() =>{this.props.history.push("/global")}}>Not Today</button>
                {/* </div> */}
                {/*<button onClick={this.randomQuestion.bind(this)}>New Question</button>*/}
            </div>
            
        )};
}

export default Question;
