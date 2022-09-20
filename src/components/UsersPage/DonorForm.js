import Layout from "../Layout/Layout";
import Button from "../Buttons/Button";
import Card from "../Card/Card";

function DonorForm() {
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
              <label>Genero</label>
              <input type="text"></input>
            </div>
          </div>
          <div className={button.button_div_right}>
            <Button>Buscar</Button>
          </div>
        </form>
      </Card>
    </Layout>
  );
}

export default DonorForm;
