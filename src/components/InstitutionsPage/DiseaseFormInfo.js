import React from "react";
import Layout from "../Layout/Layout";
import Card from "../Card/Card";
import Button from "../Buttons/Button";
import Title from "../Card/Title";
import ErrorModal from "../Modal/ErrorModal";
import ResponseModal from "../Modal/ResponseModal";
import style from "../Card/Card.module.css";
import classes from "./Institution.module.css";
import button from "../Buttons/Button.module.css";
import TextField from "@material-ui/core/TextField";
import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";

import { Link } from "react-router-dom";

function DiseaseFormInfo() {
  const { id } = useParams();
  const [diseaseObject, setDiseaseObject] = useState({
    label: "",
  });
  useEffect(() => {
    const fecthDisease = async () => {
      let data = await fetch(`http://localhost:8080/api/diseases/${id}`);
      data = await data.json();
      setDiseaseObject(data);
      console.log(data);
    };

    fecthDisease();
  }, []);

  return (
    <Layout title="Enfermedades">
      <Card className={style.filter}>
        <div className={classes.title}>
          <Title>Información Enfermedad</Title>
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
              placeholder="Ingrese nombre de la enfermedad"
              value={diseaseObject.label}
            />
          </div>

          <div className={button.button_div_right}>
            <Link to="/diseases">
              <Button>Volver</Button>
            </Link>
          </div>
        </form>
      </Card>
    </Layout>
  );
}

export default DiseaseFormInfo;
