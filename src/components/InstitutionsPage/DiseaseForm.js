import Layout from "../Layout/Layout";
import Card from "../Card/Card";
import Button from "../Buttons/Button";
import Title from "../Card/Title";
import { useState } from "react";
import ErrorModal from "../Modal/ErrorModal";
import ResponseModal from "../Modal/ResponseModal";
import style from "../Card/Card.module.css";
import classes from "./Institution.module.css";
import button from "../Buttons/Button.module.css";
import {Navigate} from "react-router-dom";

function DiseaseForm() {
  const [enteredName, setEnteredName] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const [error, setError] = useState("");

  const [assert, setAssert] = useState("");

  const [redirect, setRedirect] = useState(false);

  const errorHandler = () => {
    setError(null);
  };

  const assertHandler = () => {
    setAssert(null);
    setRedirect(true);
  };

  const submitHandler = async (event) => {
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

    let data= await fetch("http://localhost:8080/api/diseases/", requestOptions);
    if(data.status > 400) {
      setError({
        title: "Algo ha salido mal",
        message: "No se ha podido realizar la operación, por favor comuniquese con el area de sistemas"
      })
      return;
    }

    setAssert({
      title: "Felicitaciones!",
      message: "Se a podido completar la operación con exito"
    })

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
      {assert && (
        <ResponseModal
          title={assert.title}
          message={assert.message}
          onConfirm={assertHandler}
        ></ResponseModal>
      )}
      {redirect && (<Navigate to="/diseases"></Navigate>)}
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
