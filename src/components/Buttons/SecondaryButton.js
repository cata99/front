import React  from 'react';
import classes from "./Button.module.css";
function SecondaryButton(props) {
  return (
    <button
      className={classes.secondary_button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default SecondaryButton;
