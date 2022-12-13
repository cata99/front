import React from "react";
import Layout from "../Layout/Layout";
import Card from "../Card/Card";
import Button from "../Buttons/Button";
import Title from "../Card/Title";
import style from "../Card/Card.module.css";
import classes from "./Institution.module.css";
import button from "../Buttons/Button.module.css";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function AuthorityFormInfo() {
  const { id } = useParams();
  const [authObject, setAuthObject] = useState({
    phone: "",
    label: "",
    location: "",
  });

  useEffect(() => {
    const fetchAuthority = async () => {
      let data = await fetch(`http://localhost:8080/api/authorities/${id}`);
      data = await data.json();
      setAuthObject(data);
      console.log(data);
    };

    fetchAuthority();
  }, []);

  return (
    <Layout title="Autoridad">
      <Card className={style.filter}>
        <div className={classes.title}>
          <Title>Editar autoridad</Title>
        </div>
        <form>
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
              placeholder="Ingrese nombre de la autoridad"
              value={authObject.label}
            />
          </div>
          <div className={classes.input_div}>
            <label>Ubicación</label>
            <TextField
              id="text-field group"
              style={{ width: "35rem" }}
              disabled
              variant="outlined"
              inputProps={{
                style: { width: "35rem" },
              }}
              type="text"
              placeholder="Ingrese ubicación de la autoridad"
              value={authObject.location}
            />
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
              placeholder="Ingrese el teléfono de la autoridad"
              value={authObject.phone}
            />
          </div>
          <div className={button.button_div_right}>
            <Link to="/authorities">
              <Button>Volver</Button>
            </Link>
          </div>
        </form>
      </Card>
    </Layout>
  );
}

export default AuthorityFormInfo;
