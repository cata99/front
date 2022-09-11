import "./CheckboxInput.css"

function CheckboxInput (props){
    return (
        <div className="checkbox-input">
        <label>{props.label}</label>
        <input type="checkbox" className="checkbox-input"></input>
        </div>
    )
}

export default CheckboxInput;