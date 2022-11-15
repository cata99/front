import React from "react";
import Card from "../Card/Card";
import Layout from "../Layout/Layout";
import Button from "../Buttons/Button";
import Title from "../Card/Title";
import classes from "../InstitutionsPage/Institution.module.css";
import ErrorModal from "../Modal/ErrorModal";
import button from "../Buttons/Button.module.css";
import style from "../Card/Card.module.css";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import axios from "axios";
import { useState, useEffect } from "react";
import ResponseModal from "../Modal/ResponseModal";
import {  Navigate, useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  option: {
    "&:hover": {
      backgroundColor: "grey",
    },
  },
});

function AddDisease() {
  const { id } = useParams(id);
  const styles = useStyles();

  const [institutions, setIntitution] = useState([]);

  const [enteredInstitution, setEnteredInstitution] = useState("");

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

  useEffect(() => {
    axios.get("http://localhost:8080/api/institutions/").then((response) => {
      const autocompleteInstitutions = response.data.map((institution) => {
        console.log(institution);
        return {
          label: institution.name,
          id: institution.id,
        };
      });
      setIntitution(autocompleteInstitutions);
    });
  }, []);
  
  const submitHandler = (event) => {
    event.preventDefault();
    axios.post("http://localhost:8080/api/institutions_disease/", {
      institution: {
        id: enteredInstitution.id,
      },
      disease: {
        id: id,
      },
    });

    setAssert({
      title: "Felicitaciones",
      message: "La operación se ha completado con exito",
    });
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
      {redirect && <Navigate to="/diseases"></Navigate>}
      <Card className={style.filter}>
        <div className={classes.title}>
          <Title>Asociar enfermedad al comedor</Title>
        </div>
        <form onSubmit={submitHandler}>
          <div className={classes.attribute_div}>
            <div>
              <label>Instituciones</label>
              <Autocomplete
                options={institutions}
                getOptionLabel={(option) => option.label}
                style={{ width: "33rem" }}
                classes={{
                  option: styles.option,
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    placeholder="Seleccione institución"
                  />
                )}
                value={enteredInstitution}
                onChange={(_event, institution) => {
                  setEnteredInstitution(institution);
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

export default AddDisease;
