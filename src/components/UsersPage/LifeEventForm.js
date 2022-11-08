import React from "react";
import Layout from "../Layout/Layout";
import Card from "../Card/Card";
import Title from "../Card/Title";
import Button from "../Buttons/Button";
import button from "../Buttons/Button.module.css";
import classes from "./User.module.css";
import style from "../Card/Card.module.css";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import ErrorModal from "../Modal/ErrorModal";
import ResponseModal from "../Modal/ResponseModal";
import axios from "axios";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  option: {
    "&:hover": {
      backgroundColor: "grey",
    },
  },
});

function LifeEventForm() {
  
  const styles = useStyles();
  const [users, setUsers] = useState([]);

  const [selectedUser, setSelectedUser] = useState([]);

  const [selectedDate, setSelectedDate] = useState("");

  const [nameEvent, setNameEvent] = useState("");

  const [error, setError] = useState("");

  const [assert, setAssert] = useState("");

  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8080/api/users/").then((response) => {
      const autocompleteUsers = response.data.map((user) => {

        const fullName =
          user.personalInformation.firstName +
          " , " +
          user.personalInformation.lastName;
        return {
          label: fullName,
          id: user.personalInformation.id,
        };
      });
      console.log(autocompleteUsers);
      setUsers(autocompleteUsers);
    });
  }, []);

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log(nameEvent);
    axios
      .post("http://localhost:8080/api/life_events/", {
        label: nameEvent,
        date: selectedDate,
        personalInformation: { id: selectedUser.id },
      })
      .then((response) => {
        console.log(response);
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

  const dateChangeHandler = (event) => {
    setSelectedDate(event.target.value);
  };

  const nameEventChangeHandler = (event) => {
    setNameEvent(event.target.value);
  };

  return (
    <Layout title="Eventos">
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
      {redirect && <Navigate to="/volunteers"></Navigate>}
      <Card className={style.filter}>
        <div className={classes.title}>
          <Title>Registrar evento</Title>
        </div>
        <>{selectedDate}</>
        <form onSubmit={submitHandler}>
          <div className={classes.first_row}>
            <div className={classes.column}>
              <label>Usuario</label>
              <Autocomplete
                options={users}
                getOptionLabel={(option) => option.label}
                style={{ width: "37rem" }}
                classes={{
                  option: styles.option
                }}
                renderInput={(params) => (
                  <TextField
                  required
                    {...params}
                    variant="outlined"
                    placeholder="Seleccione institución"
                  />
                )}
                value={selectedUser}
                onChange={(_event, newUser) => {
                  setSelectedUser(newUser);
                }}
              ></Autocomplete>
            </div>
            <div className={classes.column}>
              <label>Fecha</label>
              <TextField
                id="text-field group"
                style={{ width: "35rem" }}
                variant="outlined"
                type="date"
                placeholder="Ingrese nombre del evento"
                value={selectedDate}
                onChange={dateChangeHandler}
              />
            </div>
          </div>
          <div className={classes.second_row}>
            <div className={classes.column}>
              <label>Evento</label>
              <TextField
                id="text-field group"
                style={{ width: "37rem" }}
                variant="outlined"
                inputProps={{
                  style: { width: "40rem" },
                }}
                type="text"
                placeholder="Ingrese nombre del evento"
                value={nameEvent}
                onChange={nameEventChangeHandler}
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

export default LifeEventForm;
