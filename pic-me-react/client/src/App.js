import React, { Component } from 'react';
import { BrowserRouter as Router, Route, } from "react-router-dom";
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
    console.log(this.props, ' are props')
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
    
      <div className="App">
      <Router>
        <Wrapper>
          <Title/>
          <Route exact path="/newuser" render={(props) => <NewUser history={props.history} />} />
          <Route exact path="/login" render={(props) => <Login history={props.history} />} />
          <Route exact path="/question" render={(props) => <Question history={props.history}/>} />
          <Route exact path="/test" render={() => ( <div><Nav /><Test /></div>) } />
          <Route exact path="/UserPage" render={() => ( <div><UserPage /></div>) } />
          <Route exact path="/Global" render={() => ( <div><GlobalPage history={this.props.history}/></div>) } />
          <Route exact path="/daily" render={() => ( <div><Daily /></div>) } />
        </Wrapper>
      </Router>
      </div>
    );
  }
}

export default App;
