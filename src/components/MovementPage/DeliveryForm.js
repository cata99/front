import Layout from "../Layout/Layout";
import Card from "../Card/Card";
import Button from "../Buttons/Button";
import Title from "../Card/Title";
import { Link } from "react-router-dom";
import button from "../Buttons/Button.module.css";
import classes from "./Movement.module.css";
import style from "../Card/Card.module.css";

function DeliveryForm() {
  return (
    <Layout>
      <Card className={style.filter}>
        <div className={classes.title}>
          <Title>Registrar entrega</Title>
        </div>
        <form className={classes.creation_delivery}>
          <div className={classes.input_div}>
            <label>Comedor</label>
            <input type="text"></input>
          </div>
          <div className={classes.input_div}>
            <label>Fecha de entrega:</label>
            <input type="date" className={classes.date_input}></input>
          </div>
          <div className={classes.second_row}>
            <div>
              <label>Usuario</label>
              <input type="text"></input>
            </div>
          </div>
          <div className={button.button_div_right}>
            <Link to="/add_products_delivery">
              <Button>Registrar</Button>
            </Link>
          </div>
        </form>
      </Card>
    </Layout>
  );
}

export default DeliveryForm;
