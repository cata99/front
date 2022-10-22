import React from "react";
import Card from "../Card/Card";
import classes from "./Filter.module.css";
import Button from "../Buttons/Button";
import TextField from "@material-ui/core/TextField";
import button from "../Buttons/Button.module.css";
import style from "../Card/Card.module.css";

function InstitutionFilter() {
  return (
    <Card className={style.filter}>
      <form>
        <div className={classes.first_row}>
          <div>
            <label>Comedor</label>
            <TextField
              id="text-field group"
              style={{ width: "35rem" }}
              variant="outlined"
              inputProps={{
                style: { width: "35rem" },
              }}
              type="text"
              placeholder="Filtre por institución"
            />
          </div>
          <div>
            <label>Ubicación</label>
            <TextField
              id="text-field group"
              style={{ width: "35rem" }}
              variant="outlined"
              inputProps={{
                style: { width: "35rem" },
              }}
              type="text"
              placeholder="Filtre por ubicación"
            />
          </div>
        </div>
        <div className={button.button_div_right}>
          <Button>Buscar</Button>
        </div>
      </form>
    </Card>
  );
}

export default InstitutionFilter;
