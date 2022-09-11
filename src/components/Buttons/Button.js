import './Button.css';
function Button(props) {
  const classes='button ' + props.className
  return <button className={classes}>{props.label}</button>;
}

export default Button;
