import Layout from "../Layout/Layout";
import Card from "../Card/Card";
import Title from "../Card/Title";
import Button from "../Buttons/Button";
import button from "../Buttons/Button.module.css";
import classes from "./User.module.css";
import style from "../Card/Card.module.css";

function DonorForm() {
  return (
    <Layout>
      <Card className={style.filter}>
        <div className={classes.title}>
          <Title>Registrar donante</Title>
        </div>
        <form>
          <div className={classes.first_row}>
            <div className={classes.column}>
              <label>Nombre</label>
              <input type="text"></input>
            </div>
            <div className={classes.column}>
              <label>Apellido</label>
              <input type="text"></input>
            </div>
          </div>
          <div className={classes.second_row}>
            <div className={classes.column}>
              <label>DNI</label>
              <input type="text"></input>
            </div>
            <div className={classes.column}>
              <label>Telefono</label>
              <input type="text"></input>
            </div>
          </div>
          <div className={classes.third_row}>
            <div className={classes.column}>
              <label>Telefono</label>
              <input type="text"></input>
            </div>
            <div className={classes.column}>
              <label>Email</label>
              <input type="text"></input>
            </div>
          </div>
          <div className={classes.forth_row}>
            <div className={classes.column} style={{display: 'block'}}>
              <label>Genero</label>
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

export default DonorForm;
