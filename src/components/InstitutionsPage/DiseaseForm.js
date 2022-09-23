import Layout from "../Layout/Layout";
import Card from "../Card/Card";
import Button from "../Buttons/Button";
import Title from "../Card/Title";
import { useState } from "react";
import ErrorModal from "../Modal/ErrorModal";

import style from "../Card/Card.module.css";
import classes from "./Institution.module.css";
import button from "../Buttons/Button.module.css";

function DiseaseForm() {
  const [enteredName, setEnteredName] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const [error, setError] = useState("");

  const errorHandler = () => {
    setError(null);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim().length === 0) {
      setError({
        title: "Nombre invalido!",
        message: "Por favor ingrese un nombre valido para las enfermedades",
      });
      return;
    }

    const jsonBody = {
      label: enteredName,
    };
    
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(jsonBody),
    };
    fetch("http://localhost:8080/api/diseases/", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result));

    setEnteredName("");
  };

  return (
    <Layout title="Enfermedades">
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        ></ErrorModal>
      )}
      <Card className={style.filter}>
        <div className={classes.title}>
          <Title>Registrar enfermedad</Title>
        </div>
        <form onSubmit={submitHandler}>
          <div className={classes.input_div}>
            <label htmlFor="label">Nombre</label>
            <input
              id="label"
              type="text"
              className="name-input"
              value={enteredName}
              onChange={nameChangeHandler}
            ></input>
          </div>
          <div className={button.button_div_right}>
            <Button type="submit">Registrar</Button>
          </div>
        </form>
      </Card>
    </Layout>
  );
}

export default DiseaseForm;
