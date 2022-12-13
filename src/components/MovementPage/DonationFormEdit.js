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
import { Navigate, useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  option: {
    "&:hover": {
      backgroundColor: "grey",
    },
  },
});

function DonationFormEdit() {
  const { id } = useParams();

  const styles = useStyles();

  const [institutions, setInstitutions] = useState([]);

  const [donors, setDonors] = useState([]);

  const [donationDate, setDonationDate] = useState("");

  const [receivedDate, setReceivedDate] = useState("");

  const [error, setError] = useState("");

  const [assert, setAssert] = useState("");

  const [redirect, setRedirect] = useState(false);

  const [users, setUsers] = useState([]);

  const [selectedUser, setSelectedUser] = useState([]);

  const [selectedDonor, setSelectedDonor] = useState([]);

  const [selectedInstitution, setSelectedInstitution] = useState([]);

  const [institutionInputValue, setInstitutionInputValue] = useState([]);

  const [userInputValue, setUserInputValue] = useState([]);

  const [donorInputValue, setDonorInputValue] = useState([]);

  const errorHandler = () => {
    setError(null);
  };

  const assertHandler = () => {
    setAssert(null);
    setRedirect(true);
  };

  useEffect(() => {
    axios.get(`http://localhost:8080/api/donations/${id}`).then((response) => {
      setInstitutionInputValue(response.data.institution.name);
      const fullName =
        response.data.user.personalInformation.firstName +
        " , " +
        response.data.user.personalInformation.lastName;
      const donorFullName =
        response.data.personalInformation.firstName +
        " , " +
        response.data.personalInformation.lastName;
      setUserInputValue(fullName);
      setDonorInputValue(donorFullName);
      setDonationDate(response.data.creationDate);
      setReceivedDate(response.data.updateDate);

    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:8080/api/users/").then((response) => {
      const autocompleteUsers = response.data.map((user) => {
       
        const fullName =
          user.personalInformation.firstName +
          " , " +
          user.personalInformation.lastName;
        return {
          label: fullName,
          id: user.id,
        };
      });
      setUsers(autocompleteUsers);
    });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/personal_information/donors")
      .then((response) => {
        const autocompleteDonors = response.data.map((donor) => {
          const fullName = donor.firstName + " , " + donor.lastName;
          return {
            label: fullName,
            id: donor.id,
          };
        });
        setDonors(autocompleteDonors);
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

  const creationDateChangeHandler = (event) => {
    setDonationDate(event.target.value);
  };

  const receivedDateChangeHandler = (event) => {
    setReceivedDate(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:8080/api/donations/${id}`, {
        institution: { id: selectedInstitution.id },
        user: { id: selectedUser.id },
        personalInformation: { id: selectedDonor.id },
        creationDate: donationDate,
        updateDate: receivedDate,
      })
      .then((response) => {
        setAssert({
          title: "Felicitaciones",
          message: "La operación se ha completado con exito",
        });
      });
  };

  return (
    <Layout title="Donaciones">
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
      {redirect && <Navigate to="/donations"></Navigate>}
      <Card className={style.filter}>
        <div className={classes.title}>
          <Title>Editar donación</Title>
        </div>
        <form className={classes.creation_delivery} onSubmit={submitHandler}>
          <div>
            <label>Comedor</label>
            <Autocomplete
              options={institutions}
              inputValue={institutionInputValue}
              required={true}
              onInputChange={(_event, newInputValue) => {
                setInstitutionInputValue(newInputValue);
              }}
              getOptionLabel={(option) => option.label}
              style={{ width: "35rem" }}
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
              value={selectedInstitution}
              onChange={(_event, newInstitution) => {
                setSelectedInstitution(newInstitution);
              }}
            ></Autocomplete>
          </div>
          <div>
            <p>
              <b>Fecha donación</b>
            </p>
            <div className={classes.wrapper_date}>
              <div className={classes.space_margin}>
                <label>Fecha de donacion</label>
                <TextField
                  id="text-field group"
                  style={{ width: "35rem" }}
                  variant="outlined"
                  required={true}
                  inputProps={{
                    style: { width: "35rem" },
                  }}
                  type="date"
                  value={donationDate}
                  onChange={creationDateChangeHandler}
                />
              </div>
              <div className={classes.space_margin}>
                <label>fecha de retiro de donacion</label>
                <TextField
                  id="text-field group"
                  style={{ width: "35rem" }}
                  variant="outlined"
                  required={true}
                  inputProps={{
                    style: { width: "35rem" },
                  }}
                  type="date"
                  value={receivedDate}
                  onChange={receivedDateChangeHandler}
                />
              </div>
            </div>

            <p>
              <b>Información personal</b>
            </p>
            <div className={classes.wrapper_date}>
              <div className={classes.space_margin}>
                <label>Donante</label>
                <Autocomplete
                  options={donors}
                  inputValue={donorInputValue}
                  required={true}
                  onInputChange={(_event, newInputValue) => {
                    setDonorInputValue(newInputValue);
                  }}
                  getOptionLabel={(option) => option.label}
                  style={{ width: "35rem" }}
                  classes={{
                    option: styles.option,
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      placeholder="Seleccione usuario que realizo la entrega"
                    />
                  )}
                  placeholder="Quien realizo la donacion"
                  value={selectedDonor}
                  onChange={(_event, newDonor) => {
                    setSelectedDonor(newDonor);
                  }}
                ></Autocomplete>
              </div>
              <div className={classes.space_margin}>
                <label>Voluntario</label>
                <Autocomplete
                  options={users}
                  inputValue={userInputValue}
                  required={true}
                  onInputChange={(_event, newInputValue) => {
                    setUserInputValue(newInputValue);
                  }}
                  getOptionLabel={(option) => option.label}
                  style={{ width: "35rem" }}
                  classes={{
                    option: styles.option,
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      placeholder="Seleccione usuario que realizo la entrega"
                    />
                  )}
                  placeholder="Usuario que retiro la donacion"
                  value={selectedUser}
                  onChange={(_event, newUser) => {
                    setSelectedUser(newUser);
                  }}
                ></Autocomplete>
              </div>
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
export default DonationFormEdit;
