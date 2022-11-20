import React from "react";
import Card from "../Card/Card";
import Layout from "../Layout/Layout";
import Button from "../Buttons/Button";
import Title from "../Card/Title";
import ErrorModal from "../Modal/ErrorModal";
import classes from "./Movement.module.css";
import button from "../Buttons/Button.module.css";
import style from "../Card/Card.module.css";
import TextField from "@material-ui/core/TextField";
import ResponseModal from "../Modal/ResponseModal";
import { Navigate } from "react-router-dom";
import { useState } from "react";

function TypeForm() {
  const [enteredType, setEnteredType] = useState("");

  const typeChangeHandler = (event) => {
    setEnteredType(event.target.value);
  };

  const [error, setError] = useState('');
  
  const [redirect, setRedirect] = useState(false);

  const [assert, setAssert] = useState("");

  const errorHandler = () => {
    setError(null);
  };

  const assertHandler = () => {
    setAssert(null);
    setRedirect(true);
  };

  const submitHandler = (event) => {
    event.preventDefault();


    const jsonBody = {
      label: enteredType,
    };
    console.log(jsonBody)

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(jsonBody),
    };
    fetch("http://localhost:8080/api/product_types/", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result));
      setAssert({
        title: "Felicitaciones",
        message: "La operación se ha completado con exito",
      });

      setEnteredType('');
  };

  return (
    <Layout>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        ></ErrorModal>
      )}
      {assert && (
        <ResponseModal
          title={assert.title}
          message={assert.message}
          onConfirm={assertHandler}
        ></ResponseModal>
      )}
      {redirect && <Navigate to="/product_form"></Navigate>}
      <Card className={style.filter}>
        <div className={classes.title}>
          <Title>Asociar Producto</Title>
        </div>
        <form onSubmit={submitHandler}>
          <div className={classes.input_div}>
            <label>Tipo de producto</label>
            <TextField
                  id="text-field group"
                  style={{ width: "35rem" }}
                  required={true}
                  variant="outlined"
                  inputProps={{
                    style: { width: "35rem" },
                  }}
                  placeholder="Ejemplo: Perecedero, muebles, entre otros"
                  type="text"
                  value={enteredType}
                  onChange={typeChangeHandler}
                />
          </div>
          <div className={button.button_div_right}>
            <Button type="submit">Registrar</Button>
          </div>
        </form>
      </Card>
    </Layout>
  );
}

export default TypeForm;
