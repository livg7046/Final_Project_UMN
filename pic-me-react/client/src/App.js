import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Test from "./pages/Test";
import Nav from "./components/Nav";
import Title from "./components/Title";

import Question from './pages/QuestionPage';
import Wrapper from "./components/Wrapper";

import Login from "./pages/LoginPage/Login";
import NewUser from "./pages/NewUserPage/NewUser";



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
    let j = Math.floor(Math.random() * array.length);
    console.log(j);
    let question = this.state.questions[j];
    return question;
  }
  render() {
    var question = (this.randomQuestion(this.state.questions)).question;
    return (
    //   <Router>
    //     <div className="App">
    //       <Nav />
    //       <Wrapper />
    //       {/* <Question question={this.state.question}/> */}
    //       <Route exact path="/question" component={Question} />
    //     </Wrapper>
    //     <Test />
    //   </div>
    //   </Router >
    <Router>
      <div className="App">
        <Wrapper>
          <Title/>
          <Route exact path="/newuser" render={() => <NewUser />} />
          <Route exact path="/login" render={() => <Login />} />
          <Route exact path="/question" render={() => <Question question={question}/>} />
          <Route exact path="/test" render={() => ( <div><Nav /><Test /></div>) } />
        </Wrapper>
      </div>
    </Router>
    );
  }
}

export default App;
