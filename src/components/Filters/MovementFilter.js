import React from "react";
import Card from "../Card/Card";
import classes from "./Filter.module.css";
import Button from "../Buttons/Button";
import style from "../Card/Card.module.css";
import button from "../Buttons/Button.module.css";
import TextField from "@material-ui/core/TextField";

function MovementFilter() {
  return (
    <Card className={style.filter}>
      <form>
        <h1>Filtros de donaciones</h1>
        <div className={classes.first_row}>
          <div className={classes.space_margin}>
            <label>Comedor</label>
            <TextField
              id="text-field group"
              style={{ width: "35rem" }}
              variant="outlined"
              inputProps={{
                style: { width: "35rem" },
              }}
              type="text"
            />
          </div>
        </div>

        <div>
          <p>
            <b>Fecha donación</b>
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
          <p>
            <b>Fecha entrega</b>
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
