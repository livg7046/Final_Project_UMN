import React, { Component } from 'react';
import { BrowserRouter as Router, Route, } from "react-router-dom";
import './App.css';
// import Nav from "./components/Nav";
import Title from "./components/Title";
import Question from './pages/QuestionPage';
import Wrapper from "./components/Wrapper";
import Login from "./pages/LoginPage/Login";
import NewUser from "./pages/NewUserPage/NewUser";
import UserPage from "./pages/UserPage";
// import QuestionsData from "./utils/Questions.json";
import GlobalPage from './pages/Global/Global';
import Daily from './pages/Daily/Daily';
import axios from 'axios';

class App extends Component {
  state = {
    user: [],
    profilePic: '',
    image: "https://ucarecdn.com/eda32654-f96e-4081-86b6-11cf46d8d05f/-/crop/1735x1738/1,0/-/preview/"

  }

  componentDidMount = () => {
    this.getUsers();
  }

  getUsers() {
    axios.get(`/api/auth/users/${localStorage.getItem('userId')}`)
    .then(res => {
      const user = res.data;
      this.setState({ user: user });
      console.log(user, "user data");
      // console.log(this.state.user)
      const mappingFunction = p => p.profileUrl;
      // const url = ((this.state.user).map(mappingFunction));
      this.setState({ profilePic: (this.state.user).map(mappingFunction)})
      })
  }


  render() {
    // console.log(this.state.profilePic);
    return (
      <div className="App">
      <Router>
        <Wrapper>
          <Title 
            src={(this.state.profilePic)}/>
          <Route exact path="/" render={(props) => <Login history={props.history} /> } />
          <Route exact path="/newuser" render={(props) => <NewUser history={props.history} /> } />
          <Route exact path="/login" render={(props) => <Login history={props.history} /> } />
          <Route exact path="/question" render={(props) => <Question history={props.history}/> } />
          <Route exact path="/userpage" render={(props) => <UserPage history={props.history}/> } />
          <Route exact path="/global" render={(props) => <GlobalPage history={props.history}/> } />
          <Route exact path="/daily" render={(props) => <Daily history={props.history}/> } />
        </Wrapper>
      </Router>
      </div>
    );
  }
}

export default App;
