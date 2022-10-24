import React from "react";
import Layout from "../Layout/Layout";
import Card from "../Card/Card";
import Title from "../Card/Title";
import Button from "../Buttons/Button";
import button from "../Buttons/Button.module.css";
import classes from "./User.module.css";
import style from "../Card/Card.module.css";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import { useState, useEffect } from "react";

import { useParams, Link } from "react-router-dom";

function DonorsFormInfo() {
  const { id } = useParams();
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredDNI, setEnteredDNI] = useState("");
  const [enteredPhone, setEnteredPhone] = useState("");
  const [enteredGender, setEnteredGender] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/personal_information/${id}`)
      .then((response) => {
        const data = response.data;
        console.log(data);
        setEnteredFirstName(data.firstName);
        setEnteredLastName(data.lastName);
        setEnteredPhone(data.phone);
        setEnteredDNI(data.identificationNumber);
        setEnteredGender(data.gender);
        setEnteredEmail(data.email);
      });
  }, []);

  return (
    <Layout>
      <Card className={style.filter}>
        <div className={classes.title}>
          <Title>Información donante</Title>
        </div>
        <form>
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
              />
            </div>
          </div>
          <div className={button.button_div_right}>
            <Link to="/donors">
              <Button>Volver</Button>
            </Link>
          </div>
        </form>
      </Card>
    </Layout>
  );
}

export default DonorsFormInfo;
