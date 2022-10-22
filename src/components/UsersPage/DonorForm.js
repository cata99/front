import React from "react";
import Layout from "../Layout/Layout";
import Card from "../Card/Card";
import Title from "../Card/Title";
import Button from "../Buttons/Button";
import button from "../Buttons/Button.module.css";
import classes from "./User.module.css";
import style from "../Card/Card.module.css";
import ErrorModal from "../Modal/ErrorModal";
import ResponseModal from "../Modal/ResponseModal";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import { useState } from "react";

import { Navigate } from "react-router-dom";

function DonorForm() {
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredDNI, setEnteredDNI] = useState("");
  const [enteredPhone, setEnteredPhone] = useState("");
  const [enteredGender, setEnteredGender] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");

  const firstNameChangeHandler = (event) => {
    setEnteredFirstName(event.target.value);
  };

  const lastNameChangeHandler = (event) => {
    setEnteredLastName(event.target.value);
  };

  const dniChangeHandler = (event) => {
    setEnteredDNI(event.target.value);
  };

  const phoneChangeHandler = (event) => {
    setEnteredPhone(event.target.value);
  };

  const genderChangeHandler = (event) => {
    setEnteredGender(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const [error, setError] = useState("");

  const [assert, setAssert] = useState("");

  const [redirect, setRedirect] = useState(false);

  const submitHandler = async (event) => {
    event.preventDefault();
    if (
      enteredFirstName === 0 ||
      enteredLastName === 0 ||
      enteredPhone === 0 ||
      enteredGender === 0 ||
      enteredDNI === 0 ||
      enteredEmail === 0
    ){
      setError({
        title: "Error",
        message: "Los campos no pueden estar vacios para registrar un comedor",
      });
      setEnteredFirstName("");
      setEnteredLastName("");
      setEnteredPhone("");
      setEnteredGender("");
      setEnteredDNI("");
      setEnteredEmail("");
      return;
    }
      axios
        .post("http://localhost:8080/api/personal_information/", {
          firstName: enteredFirstName,
          lastName: enteredLastName,
          phone: enteredPhone,
          gender: enteredGender,
          email: enteredEmail,
          identificationNumber: enteredDNI,
        })
        .then((response) => {
          setAssert({
            title: "Felicitaciones",
            message: "La operación se ha completado con exito",
          });
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
      {redirect && <Navigate to="/users"></Navigate>}
      <Card className={style.filter}>
        <div className={classes.title}>
          <Title>Registrar donante</Title>
        </div>
        <form onSubmit={submitHandler}>
          <div className={classes.first_row}>
            <div className={classes.column}>
              <label>Nombre</label>
              <TextField
                id="text-field group"
                style={{ width: "35rem" }}
                variant="outlined"
                inputProps={{
                  style: { width: "35rem" },
                }}
                type="text"
                placeholder="Ingrese apellido del voluntario"
                value={enteredFirstName}
                onChange={firstNameChangeHandler}
              />
            </div>
            <div className={classes.column}>
              <label>Apellido</label>
              <TextField
                id="text-field group"
                style={{ width: "35rem" }}
                variant="outlined"
                inputProps={{
                  style: { width: "35rem" },
                }}
                type="text"
                placeholder="Ingrese apellido del voluntario"
                value={enteredLastName}
                onChange={lastNameChangeHandler}
              />
            </div>
          </div>
          <div className={classes.second_row}>
            <div className={classes.column}>
              <label>DNI</label>
              <TextField
                id="text-field group"
                style={{ width: "35rem" }}
                variant="outlined"
                inputProps={{
                  style: { width: "35rem" },
                }}
                type="text"
                placeholder="Ingrese el DNI del donante"
                value={enteredDNI}
                onChange={dniChangeHandler}
              />
            </div>
            <div className={classes.column}>
              <label>Genero</label>
              <TextField
                id="text-field group"
                style={{ width: "35rem" }}
                variant="outlined"
                inputProps={{
                  style: { width: "35rem" },
                }}
                type="text"
                placeholder="Ingrese el genero del donante"
                value={enteredGender}
                onChange={genderChangeHandler}
              />
            </div>
          </div>
          <div className={classes.third_row}>
            <div className={classes.column}>
              <label>Telefono</label>
              <TextField
                id="text-field group"
                style={{ width: "35rem" }}
                variant="outlined"
                inputProps={{
                  style: { width: "35rem" },
                }}
                type="text"
                placeholder="Ingrese telefono del donante"
                value={enteredPhone}
                onChange={phoneChangeHandler}
              />
            </div>
            <div className={classes.column}>
              <label>Email</label>
              <TextField
                id="text-field group"
                style={{ width: "35rem" }}
                variant="outlined"
                inputProps={{
                  style: { width: "35rem" },
                }}
                type="text"
                placeholder="Ingrese email del donante"
                value={enteredEmail}
                onChange={emailChangeHandler}
              />
            </div>
          </div>
          <div className={button.button_div_right}>
            <Button type="submit">Registrar</Button>
          </div>
        </form>
      </Card>
    </Layout>
  );
}

export default DonorForm;
