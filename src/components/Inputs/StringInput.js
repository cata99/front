import "./StringInput.css";
function StringInput (props){

    const stringHandler = () =>{
        console.log("String Change");
    }

    return (
        <div className="string-input">
        <label>{props.label}</label>
        <input type="text" className="string-input" onChange={stringHandler}></input>
        </div>
    )
}

export default StringInput;