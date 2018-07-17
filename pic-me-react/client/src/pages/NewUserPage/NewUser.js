import React, { Component } from "react";
import NewUserForm from "../../components/NewUserForm/NewUserForm"
import axios from 'axios';
import { Link } from "react-router-dom";

class NewUser extends Component {
    constructor(props) {
      super(props);
      this.state = {
        userName: '',
        password: ''
      };
    }
    // state = {
    //   userName: "",
    //   password1: "",
    //   password2: ""
    // };

    handleInputChange = propertyName => (event) => {
      // Getting the value and name of the input which triggered the change
      // const { name, value } = event.target;
      this.setState({
        [propertyName]: event.target.value
      });
    
      // Updating the input's state
      // this.setState({
      //   [name]: value
      // });
    };
    
    handleFormSubmit = event => {
      event.preventDefault();
      
      const { userName, password } = this.state;
      console.log(userName, password);

      axios.post('/api/auth/register', { userName, password })
        .then((result) => {
          console.log(userName);
          console.log(password);
          console.log(result);
          this.props.history.push("/login");
        })
      // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
      // alert(`Hello ${this.state.userName}. Your password is "${this.state.password}".`);
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
                  <label htmlFor="loginUsernameCreate">Enter New Username</label>
                  <input name="userName" value={this.state.userName} onChange={this.handleInputChange("userName")} type="text" className="form-control" id="loginUsernameCreate" placeholder="" required></input>
              </div>
              <div className="form-group">
                  <label htmlFor="loginPassword1Create">Enter New Password</label>
                  <input name="password1" value={this.state.password} onChange={this.handleInputChange("password")} type="text" className="form-control" id="loginPassword1Create" placeholder="" required></input>
              </div>
              {/* <div className="form-group">
                  <label for="loginPassword2Create">Re-Enter New Password</label>
                  <input name="password2" value={this.state.password2} onChange={this.handleInputChange} type="text" className="form-control" id="loginPassword2Create" placeholder=""></input>
              </div> */}
              <button onClick={this.handleFormSubmit} className="btn btn-primary">Submit</button>
          </form>
          </div>
        </div>
      );
    }
  }

export default NewUser;
