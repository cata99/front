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
import { makeStyles } from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";

import { Navigate } from "react-router-dom";


const useStyles = makeStyles({
  option: {
    "&:hover": {
      backgroundColor: "grey",
    },
  },
});

function DonorForm() {
  
  const styles = useStyles();
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


  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const [error, setError] = useState("");

  const [assert, setAssert] = useState("");

  const [redirect, setRedirect] = useState(false);

  const [gender, setGender] = useState("");

  
  const genders = [
    { label: "Femenino" },
    { label: "Masculino" },
    { label: "No binario" },
    { label: "Otro" },
  ];

  const submitHandler = async (event) => {
    event.preventDefault();
    debugger
    axios
      .post("http://localhost:8080/api/personal_information/", {
        firstName: enteredFirstName,
        lastName: enteredLastName,
        phone: enteredPhone,
        gender: gender.label,
        email: enteredEmail,
        identificationNumber: enteredDNI,
      })
      .then((response) => {
        setAssert({
          title: "Felicitaciones",
          message: "La operaci??n se ha completado con exito",
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
    <Layout title="Donantes">
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
      {redirect && <Navigate to="/donors"></Navigate>}
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
                required={true}
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
                required={true}
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
                required={true}
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
              <label>G??nero</label>
              <Autocomplete
                options={genders}
                getOptionLabel={(option) => option.label}
                classes={{
                  option: styles.option,
                }}
                required={true}
                style={{ width: "35rem" }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    placeholder="Seleccione g??nero"
                  />
                )}
                value={gender}
                onChange={(_event, newGender) => {
                  setGender(newGender);
                }}
              ></Autocomplete>
            </div>
          </div>
          <div className={classes.third_row}>
            <div className={classes.column}>
              <label>Tel??fono</label>
              <TextField
                id="text-field group"
                style={{ width: "35rem" }}
                variant="outlined"
                required={true}
                inputProps={{
                  style: { width: "35rem" },
                }}
                type="text"
                placeholder="Ingrese tel??fono del donante"
                value={enteredPhone}
                onChange={phoneChangeHandler}
              />
            </div>
            <div className={classes.column}>
              <label>Email</label>
              <TextField
                id="text-field group"
                style={{ width: "35rem" }}
                required={true}
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
