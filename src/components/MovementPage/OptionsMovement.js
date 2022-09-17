import Layout from "../Layout/Layout";
import Card from "../Card/Card";
import "./MovementStyles.css";
import Button from "../Buttons/Button";
import { Link } from "react-router-dom";

function OptionsMovement() {
  return (
    <Layout>
      <Card className="select-movement">
        <h2 className="movement">Seleccione el movimiento a ingresar</h2>
        <div className="create-movement">
          <Link to="/create_delivery"><Button className="create-movement"label="Entrega"></Button></Link>
          <Button className="create-movement"label="Donación"></Button>
        </div>
      </Card>
    </Layout>
  );
}

export default OptionsMovement;
