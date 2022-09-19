import Card from "../Card/Card";
import Layout from "../Layout/Layout";
import Button from "../Buttons/Button";
import Title from "../Card/Title";
import ErrorModal from "../Modal/ErrorModal";
import classes from "./Movement.module.css";
import button from "../Buttons/Button.module.css";
import style from "../Card/Card.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function TypeForm() {
  const [enteredType, setEnteredType] = useState("");

  const typeChangeHandler = (event) => {
    setEnteredType(event.target.value);
  };

  const [error, setError] = useState('');

  const errorHandler = () => {
    setError(null);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredType.trim().length === 0) {
      setError({
        title: "Nombre invalido!",
        message: "Por favor ingrese un nombre valido para las enfermedades",
      });
      return;
    }

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
      <Card className={style.filter}>
        <div className={classes.title}>
          <Title>Asociar Producto</Title>
        </div>
        <form onSubmit={submitHandler}>
          <div className={classes.input_div}>
            <label>Tipo de producto</label>
            <input type="text" value={enteredType} onChange={typeChangeHandler}></input>
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
