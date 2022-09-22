import React from "react";
import ReactDOM from "react-dom";
import Card from "../Card/Card";
import Button from "../Buttons/Button";
import classes from "../Modal/Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const Overlay = (props) => {
  return (
    <Card className={classes.modal}>
      <div className={classes.header}>
        <h2>{props.response}</h2>
      </div>
      <footer className={classes.actions}>
        <Button label="Cerrar" onClick={props.onConfirm}>
          Cerrar
        </Button>
      </footer>
    </Card>
  );
};

const ResponseModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal( <Overlay response={props.response} onConfirm={props.onConfirm}/>, document.getElementById("overlay-root"))}
    </React.Fragment>
  );
};

export default ResponseModal;
