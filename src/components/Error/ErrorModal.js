import React from "react";
import Card from "../Card/Card";
import Button from "../Buttons/Button";
import classes from "../Error/ErrorModal.module.css";

function ErrorModal(props) {
  return (
    <div className={classes.backdrop} onClick={props.onConfirm}>
      <Card className={classes.modal}>
        <div className={classes.header}>
          <h2>{props.title}</h2>
        </div>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button label="Cerrar" onClick={props.onConfirm}></Button>
        </footer>
      </Card>
    </div>
  );
}

export default ErrorModal;
