import Card from "../Card/Card";
import Layout from "../Layout/Layout";
import Button from "../Buttons/Button";
import { Link } from "react-router-dom";

import Title from "../Card/Title";
import style from "../Card/Card.module.css";
import classes from "./Institution.module.css";
import button from "../Buttons/Button.module.css";

function OptionInstitution() {
  return (
    <Layout>
      <Card className={style.filter}>
        <div className={classes.options_title}>
          <Title>Seleccione elemento a registrar</Title>
        </div>
        <form>
          <div className={classes.options_div}>
            <Link to="/create_institution">
              <Button >Comedor</Button>
            </Link>
            <Link to="/create_disease">
              <Button>Enfermedad</Button>
            </Link>
            <Link to="/create_authority">
              <Button >Autoridad</Button>
            </Link>
          </div>
        </form>
      </Card>
    </Layout>
  );
}

export default OptionInstitution;
