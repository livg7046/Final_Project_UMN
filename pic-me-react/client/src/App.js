import React, { Component } from 'react';
import './App.css';
import Test from "./pages/Test";
import Nav from "./components/Nav";
import Login from "./pages/LoginPage/login";
import NewUserForm from "./pages/LoginPage/newUserForm";
import MainContainer from './pages/QuestionPage';

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
    let j = [Math.floor(Math.random()*array.length)];
    console.log(j);
    let question = this.state.questions[j];
    return question;
  }
  render() {
    this.state.question = (this.randomQuestion(this.state.questions)).question;
    return (
      <div className="App">
        <Nav />
        <MainContainer question={this.state.question}/>
        <Test />
        <br></br>
        <Login />
        <br></br>
        <NewUserForm />
      </div>
    );
  }
}

export default App;
