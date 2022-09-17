import { useState } from "react";
import "./StringInput.css";
function StringInput (props){

  
const classes= 'string-input '+ props.className
    return (
        <div className="string-input">
        <label>{props.label}</label>
        <input type="text" className={classes} onChange={stringHandler}></input>
        </div>
    )
}

export default StringInput;