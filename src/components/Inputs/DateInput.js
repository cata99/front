function DateInput (props){
    return (
        <div>
        <label>{props.label}</label>
        <input type="date" className="date input"></input>
        </div>
    )
}

export default DateInput;