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
            <input type="text"></input>
          </div>
          <div className="string-input">
            <label>Ubicación</label>
            <input type="text"></input>
          </div>
          <div className="string-input">
            <label>Teléfono</label>
            <input type="text"></input>
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
