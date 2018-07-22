import React, { Component } from "react";
import axios from 'axios';
import Uploader from "../../components/Uploader/Uploader";
import "./NewUserPage.css"

class NewUser extends Component {
    constructor(props) {
      super(props);
      this.state = {
        userName: '',
        password: '',
        url: 'https://vignette.wikia.nocookie.net/the-darkest-minds/images/4/47/Placeholder.png/revision/latest/scale-to-width-down/480?cb=20160927044640'
      };
    };

    handleInputChange = propertyName => (event) => {
      this.setState({
        [propertyName]: event.target.value
      });
    };

    handleFileUpload = url => {
      console.log("String");
      this.setState({url})
      console.log(url)
    }
    
    handleFormSubmit = event => {
      event.preventDefault();
      
      const { userName, password, url } = this.state;
      console.log(userName, password, url);

      axios.post('/api/auth/register', { userName, password, url })
        .then((result) => {
          console.log(userName);
          console.log(password);
          console.log(url)
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

              <div><img id="image-preview" src={this.state.url} alt="alt"></img></div>
              <Uploader id="uploader" onChange={this.handleFileUpload}  name="my_file" data-images-only data-tabs="file camera url" data-crop="1:1"/>

              <br></br>
              <br></br>


              <button onClick={this.handleFormSubmit} className="btn btn-danger" id="submit-btn">Submit</button>
          </form>
          </div>
        </div>
      );
    }
  }

export default NewUser;
