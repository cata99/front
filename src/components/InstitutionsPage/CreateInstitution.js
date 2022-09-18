import Layout from "../Layout/Layout";
import Card from "../Card/Card";
import Button from "../Buttons/Button";
import Title from "../Card/Title";

import style from "../Card/Card.module.css";
import classes from "./Institution.module.css";
import button from "../Buttons/Button.module.css";
function CreateInstitution() {
  return (
    <Layout>
      <Card className={style.filter}>
        <div className={classes.title}>
          <Title>Registrar comedor</Title>
        </div>
        <form>
          <div className={classes.input_div}>
            <label>Nombre</label>
            <input type="text"></input>
          </div>
          <div className={classes.input_div}>
            <label>Ubicacion</label>
            <input type="text"></input>
          </div>
          <div className={classes.input_div}>
            <label>Teléfono</label>
            <input type="text"></input>
          </div>
          <Card className={style.institution_asociation}>
            <div className={classes.title_asociations}>
              <Title>Autoridad</Title>
            </div>
            <div className={style.right}>
              <Button>Asociar</Button>
            </div>
          </Card>
          <Card className={style.institution_asociation}>
            <div className={classes.title_asociations}>
              <Title>Enfermedad</Title>
            </div>
            <div className={style.right}>
              <Button>Asociar</Button>
            </div>
          </Card>
          <div className={button.button_div_right}>
            <Button>Registrar</Button>
          </div>
        </form>
      </Card>
    </Layout>
  );
}

export default CreateInstitution;
