import Card from "../Card/Card";
import Layout from "../Layout/Layout";
import Button from "../Buttons/Button";
import "./InstitutionsStyle.css"

function CreateOption() {
  return (
    <Layout>
      <Card className="options">
        <form>
            <div className="title">
          <h2>Seleccione elemento a crear</h2></div>
          <div>
            <Button label="Comedor"></Button>
            <Button label="Enfermedad"></Button>
            <Button label="Autoridad"></Button>
          </div>
        </form>
      </Card>
    </Layout>
  );
}

export default CreateOption;
