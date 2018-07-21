import React, { Component } from "react";
import axios from 'axios';
import "./Login.css"
// import { Link } from 'react-router-dom';
// import createHistory from "history/createBrowserHistory";
// const history = createHistory();

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
          
          this.setState({ message: 'Login success!'});

          console.log(result);
          console.log(this.state);
          console.log(this.props);

          localStorage.setItem('jwtToken', result.data.token);
          localStorage.setItem('userId', result.data.userId);
          localStorage.setItem('userName', result.data.userName);
          
          this.props.history.push('/question');
        })
        .catch((error) => {
          if(error.response.status === 401) {
            this.setState({ message: 'Login failed. Username or password do not match' });
            console.log(this.state.message);
          }
        });

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
              <button className="btn" id="loginBtn">Login</button>
              <br></br>
              <br></br>
              <h5>Don't have an account yet? <a href="/newuser"id="link">Create an account now!</a></h5>
          </form>
        </div>
      )
    }
  }

  export default Login;
  
