import React from "react";
import Layout from "../Layout/Layout";
import Card from "../Card/Card";
import Title from "../Card/Title";
import Button from "../Buttons/Button";
import button from "../Buttons/Button.module.css";
import classes from "./User.module.css";
import style from "../Card/Card.module.css";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function VolunteerFormInfo() {
  const { id } = useParams();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [identificationNumber, setIdentificationNumber] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [groups, setGroups] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:8080/api/users/${id}`).then((response) => {
      const data = response.data;
      console.log(data);
      setFirstName(data.personalInformation.firstName);
      setLastName(data.personalInformation.lastName);
      setIdentificationNumber(data.personalInformation.identificationNumber);
      setGender(data.personalInformation.gender);
      setUserName(data.username);
      setPhone(data.personalInformation.phone);
      setEmail(data.personalInformation.email);
      setPassword(data.password);
      setGroups(data.group.label);
      if (data.roles[0].name === "ROLE_ADMIN") setRole("admin");
      else if (data.roles[0].name === "ROLE_REFERENTE") setRole("referente");
      else setRole("voluntario");
    });
  }, []);

  const [associatedLifeEvents, setAssociatedLifeEvents] = useState(true);
  const [donorsLifeEvents, setDonorsLifeEvents] = useState([]);
  useEffect(() => {
    const fetchLifeEvents = async () => {
      axios
        .get(`http://localhost:8080/api/life_events/user/${id}`)
        .then((response) => {
          setDonorsLifeEvents(response.data);
          console.log(response.data);

          if (response.data.length > 0) {
            setAssociatedLifeEvents(true);
          } else {
            setAssociatedLifeEvents(false);
          }
        });
    };

    fetchLifeEvents();
  }, []);

  return (
    <Layout title="Voluntarios">
      <Card className={style.filter}>
        <div className={classes.title}>
          <Title>Informaci??n voluntario</Title>
        </div>
        <form>
          <div className={classes.first_row}>
            <div className={classes.column}>
              <label>Nombre</label>
              <TextField
                id="text-field group"
                style={{ width: "35rem" }}
                disabled
                variant="outlined"
                inputProps={{
                  style: { width: "35rem" },
                }}
                type="text"
                placeholder="Ingrese nombre del voluntario"
                value={firstName}
              />
            </div>
            <div className={classes.column}>
              <label>Apellido</label>
              <TextField
                id="text-field group"
                style={{ width: "35rem" }}
                disabled
                variant="outlined"
                inputProps={{
                  style: { width: "35rem" },
                }}
                type="text"
                placeholder="Ingrese apellido del voluntario"
                value={lastName}
              />
            </div>
          </div>
          <div className={classes.second_row}>
            <div className={classes.column}>
              <label>DNI</label>
              <TextField
                id="text-field group"
                style={{ width: "35rem" }}
                disabled
                variant="outlined"
                inputProps={{
                  style: { width: "35rem" },
                }}
                type="text"
                placeholder="Ingrese el documento del voluntario"
                value={identificationNumber}
              />
            </div>
            <div className={classes.column}>
              <label>Usuario</label>
              <TextField
                id="text-field group"
                style={{ width: "35rem" }}
                disabled
                variant="outlined"
                inputProps={{
                  style: { width: "35rem" },
                }}
                type="text"
                placeholder="Ingrese nombre de usuario del voluntario"
                value={userName}
              />
            </div>
          </div>
          <div className={classes.third_row}>
            <div className={classes.column}>
              <label>Tel??fono</label>
              <TextField
                id="text-field group"
                style={{ width: "35rem" }}
                disabled
                variant="outlined"
                inputProps={{
                  style: { width: "35rem" },
                }}
                type="text"
                placeholder="Ingrese el telefono del voluntario"
                value={phone}
              />
            </div>
            <div className={classes.column}>
              <label>Email</label>
              <TextField
                id="text-field group"
                style={{ width: "35rem" }}
                disabled
                variant="outlined"
                inputProps={{
                  style: { width: "35rem" },
                }}
                type="text"
                placeholder="Ingrese el email del voluntario"
                value={email}
              />
            </div>
          </div>
          <div className={classes.forth_row}>
            <div className={classes.column}>
              <label>Grupo</label>
              <TextField
                id="text-field group"
                style={{ width: "35rem" }}
                disabled
                variant="outlined"
                inputProps={{
                  style: { width: "35rem" },
                }}
                type="text"
                placeholder="Ingrese grupo del voluntario"
                value={groups}
              />
            </div>
            <div className={classes.column}>
              <label>Contrase??a</label>
              <TextField
                id="text-field group"
                style={{ width: "35rem" }}
                disabled
                variant="outlined"
                inputProps={{
                  style: { width: "35rem" },
                }}
                type="password"
                placeholder="Ingrese contrase??a del voluntario"
                value={password}
              />
            </div>
          </div>
          <div className={classes.fifth_row}>
            <div className={classes.column}>
              <label>G??nero</label>
              <TextField
                id="text-field group"
                style={{ width: "35rem" }}
                disabled
                variant="outlined"
                inputProps={{
                  style: { width: "35rem" },
                }}
                type="text"
                placeholder="Ingrese g??nero del voluntario"
                value={gender}
              />
            </div>
            <div className={classes.column}>
              <label>Rol</label>
              <TextField
                id="text-field group"
                style={{ width: "35rem" }}
                disabled
                variant="outlined"
                inputProps={{
                  style: { width: "35rem" },
                }}
                type="text"
                placeholder="Ingrese nombre del voluntario"
                value={role}
              />
            </div>
          </div>
          {associatedLifeEvents && (
            <div>
              <h4>Fechas asociadas al donante:</h4>
              <ul>
                {donorsLifeEvents.map((donorLifeEvent) => {
                  return <li>{donorLifeEvent.label} - Fecha: {donorLifeEvent.date}</li>;
                })}
              </ul>
            </div>
          )}
          {!associatedLifeEvents && <h3>No tiene eventos asociados</h3>}
          <div className={button.button_div_right}>
            <Link to="/volunteers">
              <Button>Volver</Button>
            </Link>
          </div>
        </form>
      </Card>
    </Layout>
  );
}

export default VolunteerFormInfo;
