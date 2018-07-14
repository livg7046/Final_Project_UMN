import React, { Component } from "react";
import Nav from "../../components/Nav";
import questions from "../../utils/Questions.json";
import moment from "moment";

class Question extends Component {
    state = {
        questions,
        currentQ: questions[0].question,
        time: new Date().toLocaleString()  
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