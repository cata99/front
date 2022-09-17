import Layout from "../Layout/Layout";
import Card from "../Card/Card";
import "./InstitutionsStyle.css";
import Button from "../Buttons/Button";
import Title from "../Card/Title";

function CreateInstitution() {
  return (
    <Layout>
      <Card className="new-institution-card">
        <Title label="Registrar Institución"></Title>
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
        <Card className="add-authority">
          <div>
            <p>Autoridades</p>
          </div>
          <div className="button-wrapper">
            <Button label="asociar"></Button>
          </div>
        </Card>
        <Card className="add-diasease">
          <div>
            <p>Enfermedades</p>
          </div>
          <div className="button-wrapper">
            <Button label="asociar"></Button>
          </div>
        </Card>
        <div className="create-button-div">
          <Button className="create-button" label="Registrar"></Button>
        </div>
      </Card>
    </Layout>
  );
}

export default CreateInstitution;
