import React, { Component } from "react";
import Nav from "../../components/Nav";
import questions from "../../utils/Questions.json";
import moment from "moment";

class Question extends Component {
    state = {
        questions,
        currentQ: questions[0].question,
        time: new Date().toLocaleString(),
        days: 0,
        hours: 0,
        min: 0,
        sec: 0
    };
    
    componentDidMount = () => {
        
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
        const currentDate = moment(new Date()).format("M/DD/YYYY");
        if (this.state.time ==`${currentDate}, 12:54:30 PM`) {
            this.randomQuestion()
        }
    
    }
    
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
                <h1 className="timer">
                Hours
                {this.state.hours}
                Minutes
                {this.state.min}
                Seconds
                {this.state.sec}
                </h1>
                    <p>
                    {this.state.currentQ}
                    </p>
                    <form>
                        <label> Answer:
                        <input type="text" name="name" />
                        </label>
                    </form>
                <button id="getDaily">Get Daily</button>
            </div>
        );
    }
} 

export default Question;