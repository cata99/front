import React from "react";
import Layout from "../Layout/Layout";
import Card from "../Card/Card";
import Button from "../Buttons/Button";
import Title from "../Card/Title";
import button from "../Buttons/Button.module.css";
import classes from "./Movement.module.css";
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

function DeliveryForm() {
  const styles = useStyles();

  const [institutions, setInstitutions] = useState([]);

  const [selectedInstitution, setSelectedInstitution] = useState(null);

  const [selectedDate, setSelectedDate] = useState("");

  const [error, setError] = useState("");

  const [assert, setAssert] = useState("");

  const [redirect, setRedirect] = useState(false);

  const [users, setUsers] = useState([]);

  const [selectedUser, setSelectedUser] = useState([]);

  const errorHandler = () => {
    setError(null);
  };

  const assertHandler = () => {
    setAssert(null);
    setRedirect(true);
  };

  useEffect(() => {
    axios.get("http://localhost:8080/api/users/").then((response) => {
      const autocompleteUsers = response.data.map((user) => {
        console.log(user);
        const fullName =
          user.personalInformation.firstName +
          " , " +
          user.personalInformation.lastName;
        return {
          label: fullName,
          id: user.id,
        };
      });
      console.log(autocompleteUsers);
      setUsers(autocompleteUsers);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:8080/api/institutions/").then((response) => {
      const autocompleteInstitutions = response.data.map((institution) => {
        return {
          label: institution.name,
          id: institution.id,
        };
      });
      setInstitutions(autocompleteInstitutions);
    });
  }, []);

  const dateChangeHandler = (event) => {
    setSelectedDate(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8080/api/deliveries/", {
        user: { id: selectedUser.id },
        date: selectedDate,
        institution: { id: selectedInstitution.id },
      })
      .then((response) => {
        console.log(response);
        setAssert({
          title: "Felicitaciones",
          message: "La operación se ha completado con exito",
        });
      });
  };

  return (
    <Layout title="Entregas">
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
      {redirect && <Navigate to="/deliveries"></Navigate>}
      <Card className={style.filter}>
        <div className={classes.title}>
          <Title>Registrar entrega</Title>
        </div>
        <form className={classes.creation_delivery} onSubmit={submitHandler}>
          <div className={classes.input_div}>
            <label>Comedor</label>
            <Autocomplete
              options={institutions}
              getOptionLabel={(option) => option.label}
              style={{ width: "35rem" }}
              classes={{
                option: styles.option,
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  required={true}
                  variant="outlined"
                  placeholder="Seleccione institución"
                />
              )}
              value={selectedInstitution}
              onChange={(_event, newInstitution) => {
                setSelectedInstitution(newInstitution);
              }}
            ></Autocomplete>
          </div>
          <div className={classes.input_div}>
            <label>Fecha de entrega:</label>
            <TextField
              id="text-field group"
              style={{ width: "35rem" }}
              required={true}
              variant="outlined"
              format="dd/MM/yyyy"
              type="date"
              placeholder="Ingrese nombre del evento"
              value={selectedDate}
              onChange={dateChangeHandler}
            />
          </div>
          <div className={classes.input_div}>
            <div>
              <label>Usuario</label>
              <Autocomplete
                options={users}
                getOptionLabel={(option) => option.label}
                style={{ width: "35rem" }}
                classes={{
                  option: styles.option,
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    required={true}
                    variant="outlined"
                    placeholder="Seleccione usuario que realizo la entrega"
                  />
                )}
                value={selectedUser}
                onChange={(_event, newUser) => {
                  setSelectedUser(newUser);
                }}
              ></Autocomplete>
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

export default DeliveryForm;
