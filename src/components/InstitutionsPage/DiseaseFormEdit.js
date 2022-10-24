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

function DiseaseFormEdit() {
  const { id } = useParams();
  const [diseaseObject, setDiseaseObject] = useState({
    label: "",
  });
  useEffect(() => {
    const fecthDisease = async () => {
      let data = await fetch(`http://localhost:8080/api/diseases/${id}`);
      data = await data.json();
      setDiseaseObject(data);
      console.log(data);
    };

    fecthDisease();
  }, []);

  const [error, setError] = useState("");

  const [assert, setAssert] = useState("");

  const [redirect, setRedirect] = useState(false);

  const assertHandler = () => {
    setAssert(null);
    setRedirect(true);
  };

  const errorHandler = () => {
    setError(null);
  };

  const labelHandleChange = (value, label) => {
    setDiseaseObject({ ...diseaseObject, [label]: value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    if (diseaseObject.label.trim().length === 0) {
      setError({
        title: "Error",
        message: "Los campos no pueden estar vacios para editar un comedor",
      });
      return;
    }
    const jsonBody = {
      label: diseaseObject.label,
    };
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(jsonBody),
    };
    console.log(requestOptions);
    let data = await fetch(
      `http://localhost:8080/api/diseases/${id}`,
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
      message: "Su operacion ha podido ser completada",
    });
    data = await data.json();
    setDiseaseObject(data);

    console.log(data);
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
      {assert && (
        <ResponseModal
          title={assert.title}
          message={assert.message}
          onConfirm={assertHandler}
        ></ResponseModal>
      )}
      {redirect && <Navigate to="/diseases"></Navigate>}
      <Card className={style.filter}>
        <div className={classes.title}>
          <Title>Editar enfermedad</Title>
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
              placeholder="Ingrese nombre de la enfermedad"
              value={diseaseObject.label}
              onChange={(e) => labelHandleChange(e.target.value, "label")}
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

export default DiseaseFormEdit;
