import React from "react";
import Card from "../Card/Card";
import classes from "./Filter.module.css";
import Button from "../Buttons/Button";
import style from "../Card/Card.module.css";
import TextField from "@material-ui/core/TextField";

import button from "../Buttons/Button.module.css";

function UserFilter() {
  return (
    <Card className={style.filter}>
      <form>
        <div className={classes.first_row}>
          <div>
            <label>Nombre</label>
            <TextField
              id="text-field group"
              style={{ width: "35rem" }}
              variant="outlined"
              inputProps={{
                style: { width: "35rem" },
              }}
              type="text"
              placeholder="Filtre por nombre"
            />
          </div>
          <div>
            <label>Apellido</label>
            <TextField
              id="text-field group"
              style={{ width: "35rem" }}
              variant="outlined"
              inputProps={{
                style: { width: "35rem" },
              }}
              type="text"
              placeholder="Filtre por apellido"
            />
          </div>
        </div>
        <div className={classes.second_row}>
          <div>
            <label>Usuario</label>
            <TextField
              id="text-field group"
              style={{ width: "35rem" }}
              variant="outlined"
              inputProps={{
                style: { width: "35rem" },
              }}
              type="text"
              placeholder="Filtre por usuario"
            />
          </div>
          <div>
            <label>Grupo</label>
            <TextField
              id="text-field group"
              style={{ width: "35rem" }}
              variant="outlined"
              inputProps={{
                style: { width: "35rem" },
              }}
              type="text"
              placeholder="Filtre por grupo"
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

export default UserFilter;
