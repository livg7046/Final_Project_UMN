import React from "react";


const Alert = () => (
<div className="alert alert-danger alert-dismissible" id="alert" role="alert">
                <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="false">&times;</span></button>
                <strong>Log-in failed.</strong> Incorrect ID and/or password. Please try again. 
              </div>
);

export default Alert;