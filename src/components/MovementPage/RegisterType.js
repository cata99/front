import Card from "../Card/Card";
import Layout from "../Layout/Layout";
import Button from "../Buttons/Button";
import { Link } from "react-router-dom";
import Title from "../Card/Title";
import classes from "./Movement.module.css";
import button from "../Buttons/Button.module.css";
import style from "../Card/Card.module.css";

function RegisterType() {
  return (
    <Layout>
      <Card className={style.filter}>
        <div className={classes.title}>
          <Title>Asociar Producto</Title>
        </div>
        <form >
          <div  className={classes.input_div}>
            <label>Tipo de producto</label>
            <input type="text" ></input>
          </div>
          <div className={button.button_div_right}>
            <Link to="/create_movement">
              <Button >Registrar</Button>
            </Link>
          </div>
        </form>
      </Card>
    </Layout>
  );
}

export default RegisterType;
