import React from "react";
import Layout from "../Layout/Layout";
import Card from "../Card/Card";
import Button from "../Buttons/Button";
import Title from "../Card/Title";
import style from "../Card/Card.module.css";
import classes from "./Institution.module.css";
import button from "../Buttons/Button.module.css";
import TextField from "@material-ui/core/TextField";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

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
      console.log(data);
    };

    fetchInstitution();
  }, []);

  return (
    <Layout title="Comedores">
      <Card className={style.filter}>
        <div className={classes.title}>
          <Title>Información del comedor</Title>
        </div>
        <form>
          <div className={classes.input_div}>
            <label>Nombre</label>
            <TextField
              id="text-field group"
              style={{ width: "35rem" }}
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
              variant="outlined"
              inputProps={{
                style: { width: "35rem" },
              }}
              type="text"
              placeholder="Ingrese la ubicación de la institución"
              value={insObject.location}
            />
          </div>
          <div className={classes.input_div}>
            <label>Teléfono</label>
            <TextField
              id="text-field group"
              style={{ width: "35rem" }}
              variant="outlined"
              inputProps={{
                style: { width: "35rem" },
              }}
              type="text"
              placeholder="Ingrese la ubicación de la institución"
              value={insObject.phone}
            />
          </div>
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
