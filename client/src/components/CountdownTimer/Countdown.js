import React from "react";
import "./Countdown.css"

const Countdown = (props) => (
    <div className="countdown">
        <h6 className="timer">{props.hours} : {props.min} : {props.sec}</h6>
            <p>
                {props.currentQ}
            </p>
    </div>
);




export default Countdown;