import React, { Component } from "react";
import LoginForm from "../../components/LoginForm/LoginForm"

class Login extends Component {
    state = {
      userName: "test",
      password: "test"
    };
  

    render() {
      return (
        <div>
          <LoginForm />
        </div>
      );
    }
  }
  
  export default Login;
  
