import React from "react";
import Card from "../Card/Card";
import classes from "./Filter.module.css";
import Button from "../Buttons/Button";
import style from "../Card/Card.module.css";
import button from "../Buttons/Button.module.css";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  option: {
    "&:hover": {
      backgroundColor: "grey",
    },
  },
});

function MovementFilter(props) {
  const styles = useStyles();
  const [institutions, setInstitutions] = useState([]);
  const [selectedInstitution, setSelectedInstitution] = useState(null);

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
  return (
    <Card className={style.filter}>
      <form>
        <div className={classes.first_row}>
          <div className={classes.space_margin}>
            <label>Comedor</label>
            <Autocomplete
              options={institutions}
              style={{ width: "35rem" }}
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

        <div>
          <p>
            <b>Fecha {props.filter}</b>
          </p>
          <div className={classes.wrapper_date}>
            <div className={classes.space_margin}>
              <label>Desde</label>
              <TextField
                id="text-field group"
                style={{ width: "35rem" }}
                variant="outlined"
                inputProps={{
                  style: { width: "35rem" },
                }}
                type="date"
              />
            </div>
            <div className={classes.space_margin}>
              <label>Hasta</label>
              <TextField
                id="text-field group"
                style={{ width: "35rem" }}
                variant="outlined"
                inputProps={{
                  style: { width: "35rem" },
                }}
                type="date"
              />
            </div>
          </div>
        </div>
        <div className={button.button_div_right}>
          <Button>Buscar</Button>
        </div>
      </form>
    </Card>
  );
}

export default MovementFilter;
