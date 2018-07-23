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
// import QuestionsData from "./utils/Questions.json";
import GlobalPage from './pages/Global/Global';
import Daily from './pages/Daily/Daily';

class App extends Component {
  state = {
    user: {
      image: "https://ucarecdn.com/eda32654-f96e-4081-86b6-11cf46d8d05f/-/crop/1735x1738/1,0/-/preview/"
    }
  }
  render() {
    console.log(this.props, ' are props')
    return (
      <div className="App">
      <Router>
        <Wrapper>
          <Title 
            src={this.state.user.image}/>
          <Route exact path="/" render={(props) => <Login history={props.history} />} />
          <Route exact path="/newuser" render={(props) => <NewUser history={props.history} />} />
          <Route exact path="/login" render={(props) => <Login history={props.history} />} />
          <Route exact path="/question" render={(props) => <Question history={props.history}/>} />
          <Route exact path="/test" render={() => ( <div><Nav /><Test /></div>) } />
          <Route exact path="/UserPage" render={() => ( <div><UserPage /></div>) } />
          <Route exact path="/global" render={() => ( <div><GlobalPage history={this.props.history}/></div>) } />
          <Route exact path="/daily" render={() => ( <div><Daily /></div>) } />
        </Wrapper>
      </Router>
      </div>
    );
  }
}

export default App;
