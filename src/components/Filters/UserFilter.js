import Card from "../Card/Card";
import classes from "./Filter.module.css";
import Button from "../Buttons/Button";
import style from "../Card/Card.module.css";

import button from "../Buttons/Button.module.css";

function UserFilter() {
  return (
    <Card className={style.filter}>
      <form>
        <div className={classes.first_row}>
          <div>
            <label>Nombre</label>
            <input type="text"></input>
          </div>
          <div>
            <label>Apellido</label>
            <input type="text"></input>
          </div>
        </div>
        <div className={classes.second_row}>
          <div>
            <label>Usuario</label>
            <input type="text"></input>
          </div>
          <div>
            <label>Grupo</label>
            <input type="text"></input>
          </div>
        </div>
        <div className={classes.third_row}>
          <div >
            <label>Referente</label>
            <input type="checkbox" className={classes.checkbox_input}></input>
          </div>
          <div>
            <label>Donante</label>
            <input type="checkbox" className={classes.checkbox_input}></input>
          </div>
          <div>
            <label>Voluntario</label>
            <input type="checkbox" className={classes.checkbox_input}></input>
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
