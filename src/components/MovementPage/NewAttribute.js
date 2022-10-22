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
import axios from "axios";
import { useState, useEffect } from "react";
import ResponseModal from "../Modal/ResponseModal";
import { Link, Navigate } from "react-router-dom";

function NewAttribute() {
  const [field, setField] = useState("");

  const fieldChangeHandler = (event) => {
    setField(event.target.value);
  };

  const [unit, setUnit] = useState("");

  const unitChangeHandler = (event) => {
    setUnit(event.target.value);
  };

  const [error, setError] = useState("");

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

    if (field.trim().length === 0 && unit.trim().length === 0) {
      setError({
        title: "Nombre invalido!",
        message: "Por favor ingrese un nombre valido para el atributo",
      });
      return;
    }
    axios
      .post("http://localhost:8080/api/attributes/", {
        field: field,
        unit: unit,
      })
      .then((response) => {
        console.log(response);
        setAssert({
          title: "Felicitaciones",
          message: "La operación se ha completado con exito",
        });
      });

    setField("");
    setUnit("");
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
      {redirect && <Navigate to="/products"></Navigate>}
      <Card className={style.filter}>
        <div className={classes.title}>
          <Title>Nuevo atributo</Title>
        </div>
        <form onSubmit={submitHandler}>
          <div className={classes.new_attribute}>
            <div>
              <label>Campo del atributo</label>
              <TextField
                id="text-field group"
                style={{ width: "33rem" }}
                variant="outlined"
                inputProps={{
                  style: { width: "33rem" },
                }}
                type="text"
                value={field}
                onChange={fieldChangeHandler}
              />
            </div>

            <div>
              <label>Ingrese la unidad en la que se mide</label>
              <TextField
                id="text-field group"
                style={{ width: "33rem" }}
                variant="outlined"
                inputProps={{
                  style: { width: "33rem" },
                }}
                type="text"
                value={unit}
                onChange={unitChangeHandler}
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

export default NewAttribute;
