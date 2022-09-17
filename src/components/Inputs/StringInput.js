import { useState } from "react";
import "./StringInput.css";
function StringInput (props){

    const [EnteredString, setEnteredString]= useState('');

    const stringHandler = () =>{
        setEnteredString(event.target.value);
    }

    return (
        <div className="string-input">
        <label>{props.label}</label>
        <input type="text" className="string-input" onChange={stringHandler}></input>
        </div>
    )
}

export default StringInput;