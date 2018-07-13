import React from "react";

const Login = () => (
    <div className="jumbotron">
    <h2>Login Component</h2>
    <br></br>
    <form>
        <div className="form-group">
            <label for="loginUsernameInput">Username</label>
            <input type="text" className="form-control" id="loginUsernameInput" placeholder=""></input>
        </div>
        <div className="form-group">
            <label for="loginPasswordInput">Password</label>
            <input type="text" className="form-control" id="loginPasswordInput" placeholder=""></input>
        </div>
        <button className="btn btn-primary">Login Now</button>
        <br></br>
        <br></br>

        <button className="btn btn-primary">Create New Account</button>

    </form>
    </div>
);

export default Login;