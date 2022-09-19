import Layout from "../Layout/Layout";
import Card from "../Card/Card";
import Title from "../Card/Title";
import Button from "../Buttons/Button";
import button from "../Buttons/Button.module.css";
import classes from "./User.module.css";
import style from "../Card/Card.module.css";

function VolunteerForm() {
  return (
    <Layout>
      <Card className={style.filter}>
        <div className={classes.title}>
          <Title>Registrar voluntario</Title>
        </div>
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
              <label>DNI</label>
              <input type="text"></input>
            </div>
            <div>
              <label>Usuario</label>
              <input type="text"></input>
            </div>
          </div>
          <div className={classes.third_row}>
            <div>
              <label>Telefono</label>
              <input type="text"></input>
            </div>
            <div>
              <label>Email</label>
              <input type="text"></input>
            </div>
          </div>
          <div className={classes.forth_row}>
            <div>
              <label>Groupo</label>
              <input type="text"></input>
            </div>
            <div className={classes.unique_checkbox_div}>
              <label>Referente</label>
              <input type="checkbox" className={classes.checkbox_input}></input>
            </div>
          </div>
          <div className={classes.fifth_row}>
            <div>
              <label>Genero</label>
              <input type="text"></input>
            </div>
            <div>
              <label>Rol</label>
              <input type="text"></input>
            </div>
          </div>
        </form>
      </Card>
    </Layout>
  );
}

export default VolunteerForm;
