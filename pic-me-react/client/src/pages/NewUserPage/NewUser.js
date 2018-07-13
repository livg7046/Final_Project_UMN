import React from "react";

const NewUserForm = () => (
    <div className="jumbotron">
    <h2>New User Form</h2>
    <br></br>
    <form>
        <div className="form-group">
            <label for="loginUsernameCreate">Enter New Username</label>
            <input type="text" className="form-control" id="loginUsernameCreate" placeholder=""></input>
        </div>
        <div className="form-group">
            <label for="loginPassword1Create">Enter New Password</label>
            <input type="text" className="form-control" id="loginPassword1Create" placeholder=""></input>
        </div>
        <div className="form-group">
            <label for="loginPassword2Create">Re-Enter New Password</label>
            <input type="text" className="form-control" id="loginPassword2Create" placeholder=""></input>
        </div>
        <button className="btn btn-primary">Submit</button>
    </form>
    </div>
);

export default NewUserForm;
