import Layout from "../Layout/Layout";
import Card from "../Card/Card";
import "./MovementStyles.css";
import Button from "../Buttons/Button";

function CreateMovement() {
  return (
    <Layout>
      <Card className="select-movement">
        <h2 className="movement">Seleccione el movimiento a ingresar</h2>
        <div className="create-movement">
          <Button className="create-movement"label="Entrega"></Button>
          <Button className="create-movement"label="Delivery"></Button>
        </div>
      </Card>
    </Layout>
  );
}

export default CreateMovement;
