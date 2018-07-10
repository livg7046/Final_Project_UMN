import React, { Component } from 'react';
import './App.css';

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
  };
  randomQuestion(array) {
    let question = array[Math.floor(Math.random()*array.length)] ;
    // let question = this.state.questions[j];
    console.log(question);
    // console.log(j);
    
    return question;
  }
  render() {
    this.state.question = this.randomQuestion(this.state.questions);
    console.log(this.state.question);
    return (
      <div className="App">
        <nav className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Pic Me!</h1>
        </nav>
        <div className="container">
          <p>
            hereeee{this.state.question}
          </p>
          <form>
            <label> Answer:
            <input type="text" name="name" />
            </label>
            
          </form>
          <button id="getDaily">Get Daily</button>
        </div>
      </div>
    );
  }
}

export default App;
