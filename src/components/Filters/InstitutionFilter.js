import Card from "../Card/Card";
import classes from "./Filter.module.css";
import Button from "../Buttons/Button";

import button from "../Buttons/Button.module.css";
import style from "../Card/Card.module.css";

function InstitutionFilter() {
  return (
    <Card className={style.filter}>
      <form>
        <div className={classes.first_row}>
          <div>
            <label>Comedor</label>
            <input type="text"></input>
          </div>
          <div>
            <label>Ubicación</label>
            <input type="text"></input>
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
