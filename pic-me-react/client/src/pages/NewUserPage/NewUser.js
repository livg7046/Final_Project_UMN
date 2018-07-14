import React, { Component } from "react";
import NewUserForm from "../../components/NewUserForm/NewUserForm"

class NewUser extends Component {
    state = {
      userName: "",
      password1: "",
      password2: ""
    };

    handleInputChange = event => {
      // Getting the value and name of the input which triggered the change
      const { name, value } = event.target;
    
      // Updating the input's state
      this.setState({
        [name]: value
      });
    };
    
    handleFormSubmit = event => {
      event.preventDefault();
    
      // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
      alert(`Hello ${this.state.userName}. Your password is "${this.state.password1}".`);
    };

    render() {
      return (
        <div>
          <div className="container">
          <br></br>
          <h3>Create a New Account</h3>
          <br></br>
          <form>
              <div className="form-group">
                  <label for="loginUsernameCreate">Enter New Username</label>
                  <input name="userName" value={this.state.username} onChange={this.handleInputChange} type="text" className="form-control" id="loginUsernameCreate" placeholder=""></input>
              </div>
              <div className="form-group">
                  <label for="loginPassword1Create">Enter New Password</label>
                  <input name="password1" value={this.state.password1} onChange={this.handleInputChange} type="text" className="form-control" id="loginPassword1Create" placeholder=""></input>
              </div>
              <div className="form-group">
                  <label for="loginPassword2Create">Re-Enter New Password</label>
                  <input name="password2" value={this.state.password2} onChange={this.handleInputChange} type="text" className="form-control" id="loginPassword2Create" placeholder=""></input>
              </div>
              <button onClick={this.handleFormSubmit} className="btn btn-primary">Submit</button>
          </form>
          </div>
        </div>
      );
    }
  }

export default NewUser;
