import React, { Component } from "react";
import NewUserForm from "../../components/NewUserForm/NewUserForm"

class NewUser extends Component {
    state = {
      userName: "test",
      password1: "test",
      password2: "test"
    };
  

    render() {
      return (
        <div>
          <NewUserForm />
        </div>
      );
    }
  }
  
  export default NewUser;
