import Card from "../Card/Card";
import Layout from "../Layout/Layout";
import Button from "../Buttons/Button";
import { Link } from "react-router-dom";

import Title from "../Card/Title";
import style from "../Card/Card.module.css";
import classes from "./Institution.module.css";
function OptionInstitution() {
  return (
    <Layout>
      <Card className={style.filter}>
        <div className={classes.options_title}>
          <Title>Seleccione elemento a registrar</Title>
        </div>
        <form>
          <div className={classes.options_div}>
            <Link to="/institution_form">
              <Button >Comedor</Button>
            </Link>
            <Link to="/disease_form">
              <Button>Enfermedad</Button>
            </Link>
            <Link to="/authority_form">
              <Button >Autoridad</Button>
            </Link>
          </div>
        </form>
      </Card>
    </Layout>
  );
}

export default OptionInstitution;
