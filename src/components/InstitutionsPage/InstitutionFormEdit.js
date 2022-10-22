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
import { useParams, Navigate, Link } from "react-router-dom";

function InstitutionFormEdit() {
  const { id } = useParams();
  const [insObject, setInsObject] = useState({
    phone: "",
    name: "",
    location: "",
  });
  useEffect(() => {
    const fetchInstitution = async () => {
      let data = await fetch(`http://localhost:8080/api/institutions/${id}`);
      data = await data.json();
      setInsObject(data);
      console.log(data);
    };

    fetchInstitution();
  }, []);

  const [error, setError] = useState("");

  const errorHandler = () => {
    setError(null);
  };

  const [assert, setAssert] = useState("");

  const [redirect, setRediret] = useState(false);

  const assertHandler = () => {
    setAssert(null);
    setRediret(true);
  };

  const nameHandleChange = (value, name) => {
    setInsObject({ ...insObject, [name]: value });
  };
  const phoneHandleChange = (value, phone) => {
    setInsObject({ ...insObject, [phone]: value });
  };
  const locationHandleChange = (value, location) => {
    setInsObject({ ...insObject, [location]: value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    if (
      insObject.name.trim().length === 0 ||
      insObject.location.trim().length === 0 ||
      insObject.phone.trim().length === 0
    ) {
      setError({
        title: "Error",
        message: "Los campos no pueden estar vacios para editar un comedor",
      });
      return;
    }
    const jsonBody = {
      name: insObject.name,
      phone: insObject.phone,
      location: insObject.location,
    };
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(jsonBody),
    };
    console.log(requestOptions);
    let data = await fetch(
      `http://localhost:8080/api/institutions/${id}`,
      requestOptions
    );
    if (data.status > 400) {
      setError({
        title: "Error",
        message:
          "No se ha podido actualizar la institución, por favor comuniquese con el area de sistemas",
      });
      return;
    }
    data = await data.json();
    setInsObject(data);
    setAssert({
      title: "Felicitaciones",
      message: "Se ha podido crear la autoridad con exito",
    });
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
          <Title>Editar comedor</Title>
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
              value={insObject.name}
              onChange={(e) => nameHandleChange(e.target.value, "name")}
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
              value={insObject.location}
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
              placeholder="Ingrese la ubicación de la institución"
              value={insObject.phone}
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

export default InstitutionFormEdit;
