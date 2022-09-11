import "./DateInput.css";

function DateInput (props){
    return (
        <div className="date-input">
        <label>{props.label}</label>
        <input type="date" className="date-input"></input>
        </div>
    )
}

export default DateInput;