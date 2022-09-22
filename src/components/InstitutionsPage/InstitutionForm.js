import Layout from "../Layout/Layout";
import Card from "../Card/Card";
import Button from "../Buttons/Button";
import Title from "../Card/Title";
import ErrorModal from "../Modal/ErrorModal";

import style from "../Card/Card.module.css";
import classes from "./Institution.module.css";
import button from "../Buttons/Button.module.css";

import { useState } from "react";

function InstitutionForm() {
  const [enteredName, setEnteredName] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const [enteredPhone, setEnteredPhone] = useState("");

  const phoneChangeHandler = (event) => {
    setEnteredPhone(event.target.value);
  };

  const [enteredLocation, setEnteredLocation] = useState("");

  const locationChangeHandler = (event) => {
    setEnteredLocation(event.target.value);
  };

  const [error, setError] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      enteredLocation.trim().length === 0 ||
      enteredName.trim().length === 0 ||
      enteredPhone.trim().length === 0
    ) {
      setError({
        title: "Error",
        message: "Los campos no pueden estar vacios para registrar un comedor",
      });
      setEnteredName("");
      setEnteredLocation("");
      setEnteredPhone("");
      return;
    }
    const jsonBody = {
      name: enteredName,
      phone: enteredPhone,
      location: enteredLocation,
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(jsonBody),
    };
    console.log(requestOptions);
    fetch("http://localhost:8080/api/institutions/", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result));

    setEnteredName("");
    setEnteredLocation("");
    setEnteredPhone("");
  };

  const errorHandler = () => {
    setError(null);
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
          <Title>Registrar comedor</Title>
        </div>
        <form onSubmit={submitHandler}>
          <div className={classes.input_div}>
            <label>Nombre</label>
            <input
              type="text"
              value={enteredName}
              onChange={nameChangeHandler}
            ></input>
          </div>
          <div className={classes.input_div}>
            <label>Ubicacion</label>
            <input
              type="text"
              value={enteredLocation}
              onChange={locationChangeHandler}
            ></input>
          </div>
          <div className={classes.input_div}>
            <label>Teléfono</label>
            <input
              type="text"
              value={enteredPhone}
              onChange={phoneChangeHandler}
            ></input>
          </div>
          <Card className={style.institution_asociation}>
            <div className={classes.title_asociations}>
              <Title>Autoridad</Title>
            </div>
            <div className={style.right}>
              <Button>Asociar</Button>
            </div>
          </Card>
          <Card className={style.institution_asociation}>
            <div className={classes.title_asociations}>
              <Title>Enfermedad</Title>
            </div>
            <div className={style.right}>
              <Button>Asociar</Button>
            </div>
          </Card>
          <div className={button.button_div_right}>
            <Button type="submit">Registrar</Button>
          </div>
        </form>
      </Card>
    </Layout>
  );
}

export default InstitutionForm;
