import React, { Component } from "react";
import LoginForm from "../../components/LoginForm/LoginForm"

class Login extends Component {
    state = {
      userName: "test",
      passWord: "test"
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
  
