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

function GroupFormInfo() {
  const { id } = useParams();
  const [enteredName, setEnteredName] = useState("");
  const [institutions, setInstitutions] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:8080/api/groups/${id}`).then((response) => {
      console.log(response);
      setEnteredName(response.data.label);
      setInstitutions(response.data.institution.name);
    });
  }, []);

  return (
    <Layout title="Grupos">
      <Card className={style.filter}>
        <div className={classes.title}>
          <Title>Información grupo</Title>
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
                placeholder="Ingrese nombre del grupo"
                value={enteredName}
              />
            </div>
            <div className={classes.column}>
              <label>Institución</label>
              <TextField
                id="text-field group"
                style={{ width: "35rem" }}
                disabled
                variant="outlined"
                inputProps={{
                  style: { width: "35rem" },
                }}
                type="text"
                placeholder="Ingrese nombre del grupo"
                value={institutions}
              />
            </div>
          </div>

          <div className={button.button_div_right}>
            <Link to="/groups">
              <Button>Volver</Button>
            </Link>
          </div>
        </form>
      </Card>
    </Layout>
  );
}

export default GroupFormInfo;
