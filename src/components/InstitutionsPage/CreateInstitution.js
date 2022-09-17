import Layout from "../Layout/Layout";
import Card from "../Card/Card";
import StringInput from "../Inputs/StringInput";
import "./InstitutionsStyle.css";
import Button from "../Buttons/Button";
import Title from "../Card/Title";

function CreateInstitution() {
  return (
    <Layout>
      <Card className="new-institution-card">
        <Title label="Registrar Institución"></Title>
        <StringInput label="Nombre: "></StringInput>
        <StringInput label="Ubicacion: "></StringInput>
        <StringInput label="Telefono: "></StringInput>
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
