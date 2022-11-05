import React from "react";
import Layout from "../Layout/Layout";
import Card from "../Card/Card";
import Button from "../Buttons/Button";
import Title from "../Card/Title";
import style from "../Card/Card.module.css";
import classes from "./Institution.module.css";
import button from "../Buttons/Button.module.css";
import TextField from "@material-ui/core/TextField";
import InfoCard from "../Card/InfoCard";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import axios from "axios";

function InstitutionFormInfo() {
  const { id } = useParams();
  const [insObject, setInsObject] = useState({
    phone: "",
    name: "",
    location: "",
  });
  useEffect(() => {
    const fetchInstitution = async () => {
      let data = await fetch(`http://localhost:8080/api/institutions/${id}`);
      data = await data.json();
      setInsObject(data);
    };

    fetchInstitution();
  }, []);
  const [associatedDiseases, setAssociatedDiseases] = useState(true);
  const [institutionsDisease, setInstitutionDisease] = useState([]);
  useEffect(() => {
    const fetchDiseases = async () => {
      axios
        .get(`http://localhost:8080/api/institutions_disease/diseases/${id}`)
        .then((response) => {
          setInstitutionDisease(response.data);

          if (response.data.length > 0) {
            setAssociatedDiseases(true);
          } else {
            setAssociatedDiseases(false);
          }
        });
    };

    fetchDiseases();
  }, []);

  const [associatedAuthorities, setAssociatedAuthorities] = useState(true);
  const [institutionsAuthorities, setInstitutionsAuthorities] = useState([]);
  useEffect(() => {
    const fetchAuthority = async () => {
      axios
        .get(`http://localhost:8080/api/institutions_authority/authorities/${id}`)
        .then((response) => {
          setInstitutionsAuthorities(response.data);

          if (response.data.length > 0) {
            setAssociatedAuthorities(true);
          } else {
            setAssociatedAuthorities(false);
          }
        });
    };

    fetchAuthority();
  }, []);

  return (
    <Layout title="Comedores">
      <Card className={style.filter}>
        <div className={classes.title}>
          <Title>Información del comedor</Title>
        </div>
        <form>
          <div className={classes.first_row}>
            <div className={classes.input_div}>
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
                placeholder="Ingrese nombre de la institución"
                value={insObject.name}
              />
            </div>
            <div className={classes.input_div}>
              <label>Ubicacion</label>
              <TextField
                id="text-field group"
                style={{ width: "35rem" }}
                disabled
                variant="outlined"
                inputProps={{
                  style: { width: "35rem" },
                }}
                type="text"
                placeholder="Ingrese la ubicación de la institución"
                value={insObject.location}
              />
            </div>
          </div>
          <div className={classes.input_div}>
            <label>Teléfono</label>
            <TextField
              id="text-field group"
              style={{ width: "35rem" }}
              disabled
              variant="outlined"
              inputProps={{
                style: { width: "35rem" },
              }}
              type="text"
              placeholder="Ingrese la ubicación de la institución"
              value={insObject.phone}
            />
          </div>
          {associatedDiseases && (
            <div>
              <h4>Enfermedades asociadas</h4>
              <ul>
                {institutionsDisease.map((institutionDisease) => {
                  return <li>{institutionDisease.disease.label}</li>;
                })}
              </ul>
            </div>
          )}
          {!associatedDiseases && <h3>No tiene enfermedades asociadas</h3>}
          {associatedAuthorities && (
            <div>
              <h4>Autoridades asociadas:</h4>
              <ul>
                {institutionsAuthorities.map((institutionAuthority) => {
                  return <li>{institutionAuthority.authority.label} - telefono: {institutionAuthority.authority.phone} - ubicación: {institutionAuthority.authority.location}</li>;
                })}
              </ul>
            </div>
          )}
          {!associatedAuthorities && <h3>No tiene autoridades asociadas</h3>}
          <div className={button.button_div_right}>
            <Link to="/institutions">
              <Button>Volver</Button>
            </Link>
          </div>
        </form>
      </Card>
    </Layout>
  );
}

export default InstitutionFormInfo;
