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
import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";

function AuthorityFormEdit() {
  const { id } = useParams();
  const [authObject, setAuthObject] = useState({
    phone: "",
    label: "",
    location: "",
  });

  useEffect(() => {
    const fetchAuthority = async () => {
      let data = await fetch(`http://localhost:8080/api/authorities/${id}`);
      data = await data.json();
      setAuthObject(data);
      console.log(data);
    };

    fetchAuthority();
  }, []);

  const [error, setError] = useState("");

  const [assert, setAssert] = useState("");

  const [redirect, setRediret] = useState("");

  const assertHandler = () => {
    setAssert(null);
    setRediret(true);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    if (
      authObject.label.trim().length === 0 ||
      authObject.location.trim().length === 0 ||
      authObject.phone.trim().length === 0
    ) {
      setError({
        title: "Error",
        message: "Los campos no pueden estar vacios para editar un comedor",
      });
      return;
    }
    const jsonBody = {
      label: authObject.label,
      phone: authObject.phone,
      location: authObject.location,
    };
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(jsonBody),
    };
    console.log(requestOptions);
    let data = await fetch(
      `http://localhost:8080/api/authorities/${id}`,
      requestOptions
    );
    if (data.status > 400) {
      setError({
        title: "Error de respuesta",
        message:
          "Lo siento, no se pudo guardar su cambio, por favor comuniquese con el area de sistemas",
      });
      return;
    }
    setAssert({
      title: "Felicitaciones",
      message: "Su autoridad ha podido ser actualizada",
    });
    data = await data.json();
    setAuthObject(data);
    console.log(data);
  };

  const errorHandler = () => {
    setError(null);
  };

  const labelHandleChange = (value, label) => {
    setAuthObject({ ...authObject, [label]: value });
  };
  const phoneHandleChange = (value, phone) => {
    setAuthObject({ ...authObject, [phone]: value });
  };
  const locationHandleChange = (value, location) => {
    setAuthObject({ ...authObject, [location]: value });
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
          <Title>Editar autoridad</Title>
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
              placeholder="Ingrese nombre de la autoridad"
              value={authObject.label}
              onChange={(e) => labelHandleChange(e.target.value, "label")}
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
              value={authObject.location}
              onChange={(e) => locationHandleChange(e.target.value, "location")}
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
              placeholder="Ingrese el teléfono de la autoridad"
              value={authObject.phone}
              onChange={(e) => phoneHandleChange(e.target.value, "phone")}
            />
          </div>
          <div className={button.button_div_right}>
            <Button type="submit">Editar</Button>
          </div>
        </form>
      </Card>
    </Layout>
  );
}

export default AuthorityFormEdit;
