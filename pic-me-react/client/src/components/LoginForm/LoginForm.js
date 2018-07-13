import React from "react";

const Login = () => (
    <div className="container">
    <br></br>
    {/* <h3>Login Now</h3> */}
    <br></br>
    <form>
        <div className="form-group">
            {/* <label for="loginUsernameInput"><h5>Username</h5></label> */}
            <input type="text" className="form-control" id="loginUsernameInput" placeholder="Enter Username"></input>
        </div>
        <div className="form-group">
            {/* <label for="loginPasswordInput"><h5>Password</h5></label> */}
            <input type="text" className="form-control" id="loginPasswordInput" placeholder="Enter Password"></input>
        </div>
        <button className="btn btn-primary">Login</button>
        <br></br>
        <br></br>
        <h5>Don't have an account yet? <a href="/newuser">Create an account now!</a></h5>
        {/* <button className="btn btn-primary">Create New Account</button> */}

    </form>
    </div>
);

export default Login;