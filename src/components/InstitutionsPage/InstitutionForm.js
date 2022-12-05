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
import axios from "axios";
import { Navigate } from "react-router-dom";

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

  const [assert, setAssert] = useState("");

  const [redirect, setRedirect] = useState(false);

  const submitHandler = async (event) => {
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
    axios
      .post("http://localhost:8080/api/institutions/", {
        name: enteredName,
        phone: enteredPhone,
        location: enteredLocation,
      })
      .then((response) => {
        setAssert({
          title: "Felicitaciones",
          message: "La operación se ha completado con exito",
        });
        setEnteredName("");
        setEnteredLocation("");
        setEnteredPhone("");
      })
      .catch((error) => {
        setError({
          title: "Algo ha salido mal!",
          message: "La operación no ha podido completarse, por favor comuniquese con el area de sistemas",
        });
        return;
      });
  };

  const errorHandler = () => {
    setError(null);
  };

  const assertHandler = () => {
    setAssert(null);
    setRedirect(true);
  };

  return (
    <Layout title="Comedores">
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
      {redirect && <Navigate to="/institutions"></Navigate>}
      <Card className={style.filter}>
        <div className={classes.title}>
          <Title>Registrar comedor</Title>
        </div>
        <form onSubmit={submitHandler}>
          <div className={classes.input_div}>
            <label>Nombre</label>
            <TextField
              id="text-field group"
              style={{ width: "35rem" }}
              variant="outlined"
              inputProps={{
                style: { width: "35rem" },
              }}
              type="text"
              placeholder="Ingrese nombre de la institución"
              value={enteredName}
              onChange={nameChangeHandler}
            />
          </div>
          <div className={classes.input_div}>
            <label>Ubicacion</label>
            <TextField
              id="text-field group"
              style={{ width: "35rem" }}
              variant="outlined"
              inputProps={{
                style: { width: "35rem" },
              }}
              type="text"
              placeholder="Ingrese la ubicación de la institución"
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
              placeholder="Ingrese el teléfono de la institución"
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

export default InstitutionForm;
