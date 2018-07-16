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
import UserPage from "./pages/UserPage";
import QuestionsData from "./utils/Questions.json";
import GlobalPage from './pages/Global/Global';
import Daily from './pages/Daily/Daily';



class App extends Component {
  // state = {
  //   question: ""
  // };

  // componentDidMount = () => {
  //   // this.setState( { question: _.shuffle(QuestionsData)})

  //   const random = (arr) => Math.floor(Math.random() * arr.length)
  //   this.setState( { question: QuestionsData[random(QuestionsData)].text }, () => console.log(this.state.question) )

  // };

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
        <Wrapper>
          <Title/>
          <Route exact path="/newuser" render={() => <NewUser />} />
          <Route exact path="/login" render={() => <Login />} />
          <Route exact path="/question" render={() => <Question />} />
          <Route exact path="/test" render={() => ( <div><Test /></div>) } />
          <Route exact path="/UserPage" render={() => ( <div><UserPage /></div>) } />
          <Route exact path="/Global" render={() => ( <div><GlobalPage /></div>) } />
          <Route exact path="/daily" render={() => ( <div><Daily /></div>) } />

        </Wrapper>
      </div>
    </Router>
    );
  }
}

export default App;
