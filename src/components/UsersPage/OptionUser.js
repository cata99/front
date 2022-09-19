import Layout from "../Layout/Layout";
import Card from "../Card/Card";
import Button from "../Buttons/Button";
import { Link } from "react-router-dom";

import Title from "../Card/Title";
import style from "../Card/Card.module.css";
import classes from "./User.module.css";

function OptionUser() {
  return (
    <Layout>
      <Card className={style.filter}>
        <div className={classes.options_title}>
          <Title>Seleccione elemento a registrar</Title>
        </div>
        <div className={classes.options_div}>
          <Link to="/volunteer_form">
            <Button>Voluntario</Button>
          </Link>
          <Link to="/authority_form">
            <Button>Rol</Button>
          </Link>
          <Link to="/disease_form">
            <Button>Donante</Button>
          </Link>
          <Link to="/authority_form">
            <Button>Groupo</Button>
          </Link>
        </div>
      </Card>
    </Layout>
  );
}

export default OptionUser;
