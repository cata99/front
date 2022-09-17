import Layout from "../Layout/Layout";
import Card from "../Card/Card";
import Button from "../Buttons/Button";
import Title from "../Card/Title";

function CreateDisease() {
  return (
    <Layout>
      <Card className="new-disease-card">
        <Title label="Registrar enfermedad"></Title>
        <div className="title-authority">
          <div className="string-input">
            <label>Nombre</label>
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

export default CreateDisease;
