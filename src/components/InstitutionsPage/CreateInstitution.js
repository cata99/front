import Layout from "../Layout/Layout";
import Card from "../Card/Card";
import StringInput from "../Inputs/StringInput";
import "./InstitutionsStyle.css";
import Button from "../Buttons/Button";

function CreateInstitution() {
  return (
    <Layout>
      <Card className="new-institution-card">
        <StringInput label="Nombre: "></StringInput>
        <StringInput label="Ubicacion: "></StringInput>
        <StringInput label="Telefono: "></StringInput>
        <Card className="add-authority">
          <p>Autoridades</p>
          <div className="button-wrapper">
            <Button label="asociar"></Button>
          </div>
        </Card>
        <Card className="add-diasease">
          <p>Enfermedades</p>
          <div className="button-wrapper">
            <Button label="asociar"></Button>
          </div>
        </Card>
        <div className="create-button"></div>
      </Card>
    </Layout>
  );
}

export default CreateInstitution;
