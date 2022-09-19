import Card from "../Card/Card";
import classes from "./Filter.module.css";
import Button from "../Buttons/Button";
import style from "../Card/Card.module.css";
import button from "../Buttons/Button.module.css";

function MovementFilter() {
  return (
    <Card className={style.filter}>
      <form>
        <div className={classes.first_row}>
          <div className={classes.space_margin}>
            <label>Comedor</label>
            <input type="text"></input>
          </div>
          <div className={classes.general_checkbox_div}>
            <div className={classes.unique_checkbox_div}>
              <label>donación</label>
              <input type="checkbox" className={classes.checkbox_input}></input>
            </div>
            <div className={classes.unique_checkbox_div}>
              <label>entrega</label>
              <input type="checkbox" className={classes.checkbox_input}></input>
            </div>
          </div>
        </div>

        <div>
          <p>
            <b>Fecha donación</b>
          </p>
          <div className={classes.wrapper_date}>
            <div className={classes.space_margin}>
              <label>Desde</label>
              <input type="date" className={classes.date_input}></input>
            </div>
            <div className={classes.space_margin}>
              <label>Hasta</label>
              <input type="date" className={classes.date_input}></input>
            </div>
          </div>
          <p>
            <b>Fecha entrega</b>
          </p>
          <div className={classes.wrapper_date}>
            <div className={classes.space_margin}>
              <label>Desde</label>
              <input type="date" className={classes.date_input}></input>
            </div>
            <div className={classes.space_margin}>
              <label>Hasta</label>
              <input type="date" className={classes.date_input}></input>
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
