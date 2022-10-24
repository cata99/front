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
import Autocomplete from "@material-ui/lab/Autocomplete";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import { Switch } from "@mui/material";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useParams, Navigate } from "react-router-dom";

const useStyles = makeStyles({
  option: {
    "&:hover": {
      backgroundColor: "grey",
    },
  },
});

function VolunteerFormEdit() {

  const { id } = useParams();

  const styles = useStyles();

  const [firstName, setFirstName] = useState("");

  const firstNameChangeHandler = (event) => {
    setFirstName(event.target.value);
  };

  const [lastName, setLastName] = useState("");

  const lastNameChangeHandler = (event) => {
    setLastName(event.target.value);
  };

  const [identificationNumber, setIdentificationNumber] = useState("");

  const identificationNumberChangeHandler = (event) => {
    setIdentificationNumber(event.target.value);
  };

  const [phone, setPhone] = useState("");

  const phoneChangeHandler = (event) => {
    setPhone(event.target.value);
  };

  const [gender, setGender] = useState("");

  const genderChangeHandler = (event) => {
    setGender(event.target.value);
  };

  const [email, setEmail] = useState("");

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const [referent, setReferent] = useState(false);

  const referentChangeHandler = (event) => {
    setReferent(!referent);
  };

  const [userName, setUserName] = useState("");

  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const [password, setPassword] = useState("");

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const [groups, setGroups] = useState("");

  const roles = [
    { label: "admin" },
    { label: "voluntario" },
    { label: "referente" },
  ];

  const [role, setRole] = useState("");

  const [selectedGroup, setSelectedGroups] = useState("");

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

  useEffect(() => {
    axios.get("http://localhost:8080/api/groups/").then((response) => {
      const autocompleteGroup = response.data.map((group) => {
       
        return {
          label: group.label,
          id: group.id,
        };
      });
      setGroups(autocompleteGroup);
    });
  }, []);

  const [groupInputValue, setGroupInputValue] = useState([]);
  const [roleInputValue, setRoleInputValue] = useState("");
  const [personalInformationId, setPersonalInformationId] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:8080/api/users/${id}`).then((response) => {
        const data = response.data;
        console.log(data);
        setPersonalInformationId(data.personalInformation.id)
        setFirstName(data.personalInformation.firstName);
        setLastName(data.personalInformation.lastName);
        setIdentificationNumber(data.personalInformation.identificationNumber);
        setGender(data.personalInformation.gender);
        setUserName(data.username);
        setPhone(data.personalInformation.phone);
        setEmail(data.personalInformation.email);
        setPassword(data.password);
        setReferent(data.referent);
        setGroupInputValue(data.group.label)
        if (data.roles[0].name === "ROLE_ADMIN") setRoleInputValue("admin")
        else if(data.roles[0].name === "ROLE_REFERENTE") setRoleInputValue("referente")
        else setRoleInputValue("voluntario");
      });
  }, []);

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log(role.label);
    axios.put(`http://localhost:8080/api/personal_information/${personalInformationId}`, {
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      gender: gender,
      email: email,
      identificationNumber: identificationNumber,
    }).then((response)=> {console.log(response)})
    axios.put(`http://localhost:8080/api/users/${id}`,{
        username: userName,
        group: {
          id: selectedGroup.id,
        },
        referent: referent,
        password: password,
        role: [`${role.label}`],
      })
      .then((response) => {
        console.log(response);
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
      {redirect && <Navigate to="/volunteers"></Navigate>}
      <Card className={style.filter}>
        <div className={classes.title}>
          <Title>Editar voluntario</Title>
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
                placeholder="Ingrese nombre del voluntario"
                value={firstName}
                onChange={firstNameChangeHandler}
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
                value={lastName}
                onChange={lastNameChangeHandler}
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
                placeholder="Ingrese el documento del voluntario"
                value={identificationNumber}
                onChange={identificationNumberChangeHandler}
              />
            </div>
            <div className={classes.column}>
              <label>Usuario</label>
              <TextField
                id="text-field group"
                style={{ width: "35rem" }}
                variant="outlined"
                inputProps={{
                  style: { width: "35rem" },
                }}
                type="text"
                placeholder="Ingrese nombre de usuario del voluntario"
                value={userName}
                onChange={userNameChangeHandler}
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
                placeholder="Ingrese el telefono del voluntario"
                value={phone}
                onChange={phoneChangeHandler}
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
                placeholder="Ingrese el email del voluntario"
                value={email}
                onChange={emailChangeHandler}
              />
            </div>
          </div>
          <div className={classes.forth_row}>
            <div className={classes.column}>
              <label>Grupo</label>
              <Autocomplete
                options={groups}
                getOptionLabel={(option) => option.label}
                classes={{
                  option: styles.option,
                }}
                style={{ width: "35rem" }}
                inputValue={groupInputValue}
                onInputChange={(_event, newInputValue) => {
                  setGroupInputValue(newInputValue);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    placeholder="Seleccione grupo"
                  />
                )}
                value={selectedGroup}
                onChange={(_event, newGroup) => {
                  setSelectedGroups(newGroup);
                }}
              ></Autocomplete>
            </div>
            <div className={classes.column}>
              <label>Contraseña</label>
              <TextField
                id="text-field group"
                style={{ width: "35rem" }}
                variant="outlined"
                inputProps={{
                  style: { width: "35rem" },
                }}
                type="password"
                placeholder="Ingrese contraseña del voluntario"
                value={password}
                onChange={passwordChangeHandler}
              />
            </div>
          </div>
          <div className={classes.fifth_row}>
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
                placeholder="Ingrese genero del voluntario"
                value={gender}
                onChange={genderChangeHandler}
              />
            </div>
            <div className={classes.column}>
              <label>Rol</label>
              <Autocomplete
                options={roles}
                getOptionLabel={(option) => option.label}
                style={{ width: "35rem" }}
                classes={{
                  option: styles.option,
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    placeholder="Seleccione rol"
                  />
                )}
                inputValue={roleInputValue}
                onInputChange={(_event, newInputValue) => {
                  setRoleInputValue(newInputValue);
                }}
                value={role}
                onChange={(_event, newRole) => {
                  setRole(newRole);
                }}
              ></Autocomplete>
            </div>
          </div>
          <div className={classes.sixth_row}>
            <label>Referente</label>
            <Switch
              checked={referent}
              onChange={referentChangeHandler}
              inputProps={{ "aria-label": "controlled" }}
              color="default"
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

export default VolunteerFormEdit;
