import React from "react";


const Alert = () => (
<div className="alert alert-warning alert-dismissible" id="alert" role="alert">
                <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="false">&times;</span></button>
                <strong>Warning!</strong> Better check yourself, you're not looking too good.
              </div>
);

export default Alert;