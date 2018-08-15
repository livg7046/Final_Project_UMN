import React, { Component } from 'react';
import { BrowserRouter as Router, Route, } from "react-router-dom";
import './App.css';
import Title from "./components/Title";
import TitleOnly from "./components/TitleOnly";
import Question from './pages/QuestionPage';
import Wrapper from "./components/Wrapper";
import Login from "./pages/LoginPage/Login";
import NewUser from "./pages/NewUserPage/NewUser";
import UserPage from "./pages/UserPage";
import GlobalPage from './pages/Global/Global';
import axios from 'axios';

class App extends Component {
  state = {
    user: [],
    profilePic: '',
    image: "https://ucarecdn.com/eda32654-f96e-4081-86b6-11cf46d8d05f/-/crop/1735x1738/1,0/-/preview/"

  }

  componentDidMount = () => {
    //this.getUsers();
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
          
          <Route exact path="/" render={(props) => (
            <div>
            <TitleOnly />
            <Login history={props.history} /> 
            </div>
          )} />

          <Route exact path="/newuser" render={(props) => (
            <div>
            <TitleOnly />
            <NewUser history={props.history} /> 
            </div>
          )} />
          
          <Route exact path="/login" render={(props) => (
            <div>
            <TitleOnly />
            <Login history={props.history} /> 
            </div>
          )} />

          <Route exact path="/question" render={(props) => (
            <div>
            <Title src={(this.state.profilePic)}/>
            <Question history={props.history} /> 
            </div>
          )} />

          <Route exact path="/userpage" render={(props) => (
            <div>
              <Title src={(this.state.profilePic)}/>
              <UserPage history={props.history}/>  
              </div>
            ) }/>

          <Route exact path="/global" render={(props) => (
            <div>
              <Title src={(this.state.profilePic)}/>
              <GlobalPage history={props.history}/>  
              </div>
            ) }/>

        </Wrapper>
      </Router>

      </div>
    );
  };
};

export default App;
