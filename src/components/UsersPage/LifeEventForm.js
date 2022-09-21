import Layout from "../Layout/Layout";
import Card from "../Card/Card";
import Title from "../Card/Title";
import Button from "../Buttons/Button";
import button from "../Buttons/Button.module.css";
import classes from "./User.module.css";
import style from "../Card/Card.module.css";

function LifeEventForm() {
  return (
    <Layout>
      <Card className={style.filter}>
        <div className={classes.title}>
          <Title>Registrar evento</Title>
        </div>
        <form>
          <div className={classes.first_row}>
            <div className={classes.column}>
              <label>Usuario</label>
              <input type="text"></input>
            </div>
            <div className={classes.column}>
              <label>Fecha</label>
              <input type="date"></input>
            </div>
          </div>
          <div className={classes.second_row}>
            <div className={classes.column}>
              <label>Evento</label>
              <input type="text"></input>
            </div>
          </div>
          <div className={button.button_div_right}>
            <Button>Registrar</Button>
          </div>
        </form>
      </Card>
    </Layout>
  );
}

export default LifeEventForm;
