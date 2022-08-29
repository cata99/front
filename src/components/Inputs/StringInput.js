function StringInput (props){
    return (
        <div>
        <label>{props.label}</label>
        <input type="text" className="string input"></input>
        </div>
    )
}

export default StringInput;