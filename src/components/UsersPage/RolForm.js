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
          <Title>Registrar rol</Title>
          <h1>Ver con fede como carajos hago para implementar spring-boot security</h1>
        </div>
       
      </Card>
    </Layout>
  );
}

export default VolunteerForm;