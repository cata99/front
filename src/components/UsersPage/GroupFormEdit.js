import React from "react";
import Layout from "../Layout/Layout";
import Card from "../Card/Card";
import Title from "../Card/Title";
import Button from "../Buttons/Button";
import button from "../Buttons/Button.module.css";
import classes from "./User.module.css";
import style from "../Card/Card.module.css";
import ErrorModal from "../Modal/ErrorModal";
import ResponseModal from "../Modal/ResponseModal";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";

const useStyles = makeStyles({
  option: {
    "&:hover": {
      backgroundColor: "grey",
    },
  },
});

function GroupFormEdit() {
  const { id } = useParams();

  const styles = useStyles();
  const [enteredName, setEnteredName] = useState("");
  const [institutions, setInstitutions] = useState([]);
  const [selectedInstitution, setSelectedInstitution] = useState(null);

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

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

  const [institutionsInputValue, setInstitutionsInputValue] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/groups/${id}`).then((response) => {
      console.log(response);
      setEnteredName(response.data.label);
      setInstitutionsInputValue(response.data.institution.name);
    });
  }, []);

  const [error, setError] = useState("");

  const [assert, setAssert] = useState("");

  const [redirect, setRedirect] = useState(false);

  const submitHandler = async (event) => {
    event.preventDefault();
    axios
      .post(`http://localhost:8080/api/groups/${id}`, {
        label: enteredName,
        institution: { id: selectedInstitution.id },
      })
      .then((response) => {
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

  return (
    <Layout title="Grupos">
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
      {redirect && <Navigate to="/groups"></Navigate>}
      <Card className={style.filter}>
        <div className={classes.title}>
          <Title>Editar grupo</Title>
        </div>
        <form onSubmit={submitHandler}>
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
                placeholder="Ingrese nombre del grupo"
                value={enteredName}
                onChange={nameChangeHandler}
              />
            </div>
            <div className={classes.column}>
              <label>Institución</label>
              <Autocomplete
                inputValue={institutionsInputValue}
                onInputChange={(_event, newInputValue) => {
                    setInstitutionsInputValue(newInputValue);
                  }}
                options={institutions}
                classes={{
                  option: styles.option,
                }}
                getOptionLabel={(option) => option.label}
                renderInput={(params) => (
                  <TextField
                    {...params}
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
          </div>

          <div className={button.button_div_right}>
            <Button type="submit">Editar</Button>
          </div>
        </form>
      </Card>
    </Layout>
  );
}

export default GroupFormEdit;
