import Layout from "../Layout/Layout";
import Card from "../Card/Card";
import "./MovementStyles.css";
import Button from "../Buttons/Button";
import { Link } from "react-router-dom";

function CreateDelivery() {
  return (
    <Layout>
      <Card className="creation-delivery">
        <h2>Registrar entrega</h2>
        <form>
          <div className="string-input">
            <label>Comedor</label>
            <input type="text"></input>
          </div>
          <div className="date-input">
            <label>Fecha de entrega:</label>
            <input type="date"></input>
          </div>
          <div className="create-delivery-button">
            <Link to="/add_products_delivery">
              <Button className="create-delivery" label="Registrar"></Button>
            </Link>
          </div>
        </form>
      </Card>
    </Layout>
  );
}

export default CreateDelivery;
