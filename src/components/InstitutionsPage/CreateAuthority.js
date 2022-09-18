import Layout from "../Layout/Layout";
import Card from "../Card/Card";
import Button from "../Buttons/Button";
import Title from "../Card/Title";

import style from "../Card/Card.module.css";
import classes from "./Institution.module.css";
import button from "../Buttons/Button.module.css";

import { useState } from "react";

function CreateAuthority() {
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

  const submitHandler = (event) => {
    const jsonBody = {
      label: enteredName,
      phone: enteredPhone,
      location: enteredLocation,
    };
    event.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(jsonBody),
    };
    console.log(requestOptions);
    fetch("http://localhost:8080/api/authorities/", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result));

    setEnteredName("");
    setEnteredLocation("");
    setEnteredPhone("");
  };

  return (
    <Layout>
      <Card className={style.filter}>
        <div className={classes.title}>
          <Title>Registrar autoridad</Title>
        </div>
        <form onSubmit={submitHandler}>
          <div className={classes.input_div}>
            <label>Nombre</label>
            <input
              type="text"
              className="name-input"
              value={enteredName}
              onChange={nameChangeHandler}
            ></input>
          </div>
          <div className={classes.input_div}>
            <label>Ubicacion</label>
            <input
              type="text"
              className="location-input"
              value={enteredLocation}
              onChange={locationChangeHandler}
            ></input>
          </div>
          <div className={classes.input_div}>
            <label>Teléfono</label>
            <input
              type="text"
              className="phone-input"
              value={enteredPhone}
              onChange={phoneChangeHandler}
            ></input>
          </div>
          <div className={button.button_div_right}>
            <Button>Registrar</Button>
          </div>
        </form>
      </Card>
    </Layout>
  );
}

export default CreateAuthority;
