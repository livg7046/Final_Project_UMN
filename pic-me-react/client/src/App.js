import React, { Component } from 'react';
import './App.css';
import Test from "./pages/Test";

class App extends Component {
  state = {
    question: "What is your favorite Movie?",
    questions: [
      {
        "question": "Who is your favorite Celebrity?",
        "id": 1,
      },
      {
        "question": "What did you dream about late night?",
        "id": 2,
      },
      {
        "question": "What are you doing today?",
        "id": 3,
      },
      {
        "question": "What is your favorite food?",
        "id": 4,
      },
      {
        "question": "What is the scariest thing you've ever done?",
        "id": 5,
      }
      ]
  }
  randomQuestion(array) {
    let j = [Math.floor(Math.random()*array.length)];
    console.log(j);
    let question = this.state.questions[j];
    return question;
  }
  render() {
    this.state.question = (this.randomQuestion(this.state.questions)).question;
    return (
      <div className="App">
        <nav className="App-header">
          <h1 className="App-title">Pic Me!</h1>
        </nav>
        <div className="container">
          <p>
            {this.state.question}
          </p>
          <form>
            <label> Answer:
            <input type="text" name="name" />
            </label>
            
          </form>
          <button id="getDaily">Get Daily</button>
        </div>
        <Test/>
      </div>
    );
  }
}

export default App;
