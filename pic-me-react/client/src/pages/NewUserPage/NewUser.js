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
    };

    handleInputChange = propertyName => (event) => {
      this.setState({
        [propertyName]: event.target.value
      });
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
              <button onClick={this.handleFormSubmit} className="btn btn-primary">Submit</button>
          </form>
          </div>
        </div>
      );
    }
  }

export default NewUser;
