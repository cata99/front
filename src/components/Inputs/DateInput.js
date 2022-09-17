import "./DateInput.css";

function DateInput (props){
    const classes= 'date-input ' + props.className
    return (
        <div className={classes}>
        <label>{props.label}</label>
        <input type="date" className={classes}></input>
        </div>
    )
}

export default DateInput;