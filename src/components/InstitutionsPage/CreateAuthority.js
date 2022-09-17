import Layout from "../Layout/Layout";
import Card from "../Card/Card";
import Button from "../Buttons/Button";
import Title from "../Card/Title";

function CreateAuthority() {
  return (
    <Layout>
      <Card className="new-authority-card">
        <Title label="Registrar autoridad"></Title>
        <div className="title-authority">
          <div className="string-input">
          <label>Nombre</label>
          <input type="text" className="name-input"></input>
        </div>
        <div className="string-input">
          <label>Ubicacion</label>
          <input type="text" className="location-input"></input>
        </div>
        <div className="string-input">
          <label>Teléfono</label>
          <input type="text" className="phone-input"></input>
          </div>
        </div>
        <div className="create-button-div">
          <Button className="create-button" label="Registrar"></Button>
        </div>
      </Card>
    </Layout>
  );
}

export default CreateAuthority;
