import React, { Component } from "react";
// import LoginForm from "../../components/LoginForm/LoginForm"
import { Route , Router } from 'react-router-dom';
import axios from 'axios';
import Question from "../QuestionPage/Question";

  class Login extends Component {

    constructor(props) {
      super(props);
      this.state = {
        userName:'',
        password: '',
        message: ''
      };
    }

    onInputChange = propertyName => event => {
      this.setState({
        [propertyName]: event.target.value
      });
    };

    onSubmit = event => {
      event.preventDefault();

      const { userName, password } = this.state;
      console.log(userName, password);

      axios.post('/api/auth/login', { userName, password })
        .then((result) => {
          console.log("_________________")
          console.log(result);
          localStorage.setItem('jwtToken', result.data.token);
          // this.setState({ message: '' });
          this.props.history.push('/question')
        })
      // .catch((error) => {
      //   // if(error.response.status === 401) {
      //     this.setState({ message: 'Login failed. Username or password do not match' });
      //     console.log(this.state.message);
      //   // }
      // });

    }

    render() {
      return (
        <div className="container">
          <br></br>
          <br></br>
          <form className="form-signin" onSubmit={this.onSubmit}>
              <div className="form-group">
                  <input type="text" className="form-control" id="loginUsernameInput" placeholder="Enter Username" name="userName" value={this.state.userName} onChange={this.onInputChange("userName")} required></input>
              </div>
              <div className="form-group">
                  <input type="password" className="form-control" id="loginPasswordInput" placeholder="Enter Password" name="password" value={this.state.password} onChange={this.onInputChange("password")} required></input>
              </div>
              <button className="btn btn-primary">Login</button>
              <br></br>
              <br></br>
              <h5>Don't have an account yet? <a href="/newuser">Create an account now!</a></h5>
          </form>
        </div>
      )
    }
  }

  export default Login;
  
