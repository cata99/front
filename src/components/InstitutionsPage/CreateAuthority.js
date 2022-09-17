import Layout from "../Layout/Layout";
import Card from "../Card/Card";
import StringInput from "../Inputs/StringInput";
import Button from "../Buttons/Button";
import Title from "../Card/Title";

function CreateAuthority() {
  return (
    <Layout>
      <Card className="new-authority-card">
        <Title label="Registrar autoridad"></Title>
        <div className="title-authority">
          <StringInput label="Nombre: "></StringInput>
          <StringInput label="Ubicación: "></StringInput>
          <StringInput label="Teléfono: "></StringInput>
        </div>
        <div className="create-button-div">
          <Button className="create-button" label="Registrar"></Button>
        </div>
      </Card>
    </Layout>
  );
}

export default CreateAuthority;
