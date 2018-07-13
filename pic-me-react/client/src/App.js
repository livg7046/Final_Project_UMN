import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Test from "./pages/Test";
import Nav from "./components/Nav";
import Question from './pages/QuestionPage';
import Wrapper from "./components/Wrapper";
import Login from "./pages/LoginPage/login";
import NewUserForm from "./pages/LoginPage/newUserForm";
import QuestionsData from './utils/Questions.json';
// import _ from "underscore";


class App extends Component {
  state = {
    question: ""
  };

  componentDidMount = () => {
    // this.setState( { question: _.shuffle(QuestionsData)})

    const random = (arr) => Math.floor(Math.random() * arr.length)
    this.setState( { question: QuestionsData[random(QuestionsData)].text }, () => console.log(this.state.question) )

  };

  // randomQuestion(array) {
  //   let j = Math.floor(Math.random() * array.length);
  //   console.log(j);
  //   let question = this.state.questions[j];
  //   return question;
  // }
  render() {
    // var question = (this.randomQuestion(this.state.questions)).question;
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

        <Nav/>
        <Wrapper>
            <Route exact path="/question" render={() => <Question question={this.state.question}/>} />
        </Wrapper>
        <Test/>


        <br></br>
        <Login />
        <br></br>
        <NewUserForm />

      </div>
    </Router>
    );
  }
}

export default App;
