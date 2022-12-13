import React from "react";
import Layout from "../Layout/Layout";
import Card from "../Card/Card";
import Button from "../Buttons/Button";
import Title from "../Card/Title";
import ErrorModal from "../Modal/ErrorModal";
import ResponseModal from "../Modal/ResponseModal";
import style from "../Card/Card.module.css";
import classes from "./Institution.module.css";
import button from "../Buttons/Button.module.css";

import TextField from "@material-ui/core/TextField";

import { useState } from "react";
import { Navigate } from "react-router-dom";

function AuthorityForm() {
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

  const [assert, setAssert] = useState("");

  const [redirect, setRediret] = useState(false);

  const assertHandler = () => {
    setAssert(null);
    setRediret(true);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    if (
      enteredLocation.trim().length === 0 ||
      enteredName.trim().length === 0 ||
      enteredPhone.trim().length === 0
    ) {
      setError({
        title: "Error",
        message:
          "Los campos no pueden estar vacios para registrar una autoridad",
      });
      setEnteredName("");
      setEnteredLocation("");
      setEnteredPhone("");
      return;
    }
    const jsonBody = {
      label: enteredName,
      phone: enteredPhone,
      location: enteredLocation,
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(jsonBody),
    };

    let data = await fetch(
      "http://localhost:8080/api/authorities/",
      requestOptions
    );
    if (data.status > 400) {
      setError({
        title: "Error",
        message:
          "No se ha podido crear la autoridad, por favor comuniquese con el area de sistemas",
      });
      return;
    }
    setAssert({
      title: "Felicitaciones",
      message: "Se ha podido crear la autoridad con exito",
    });

    setEnteredName("");
    setEnteredLocation("");
    setEnteredPhone("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Layout title="Autoridad">
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
      {redirect && <Navigate to="/authorities"></Navigate>}
      <Card className={style.filter}>
        <div className={classes.title}>
          <Title>Registrar autoridad</Title>
        </div>
        <form onSubmit={submitHandler}>
          <div className={classes.input_div}>
            <label>Nombre</label>
            <TextField
              id="text-field group"
              style={{ width: "35rem" }}
              required
              variant="outlined"
              inputProps={{
                style: { width: "35rem" },
              }}
              type="text"
              placeholder="Ingrese nombre de la autoridad"
              value={enteredName}
              onChange={nameChangeHandler}
            />
          </div>
          <div className={classes.input_div}>
            <label>Ubicación</label>
            <TextField
              id="text-field group"
              style={{ width: "35rem" }}
              variant="outlined"
              inputProps={{
                style: { width: "35rem" },
              }}
              type="text"
              placeholder="Ingrese ubicación de la autoridad"
              value={enteredLocation}
              onChange={locationChangeHandler}
            />
          </div>
          <div className={classes.input_div}>
            <label>Teléfono</label>
            <TextField
              id="text-field group"
              style={{ width: "35rem" }}
              variant="outlined"
              inputProps={{
                style: { width: "35rem" },
              }}
              type="text"
              placeholder="Ingrese teléfono de la autoridad"
              value={enteredPhone}
              onChange={phoneChangeHandler}
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

export default AuthorityForm;
