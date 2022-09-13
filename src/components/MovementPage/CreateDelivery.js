import Layout from "../Layout/Layout";
import Card from "../Card/Card";
import StringInput from "../Inputs/StringInput";
import DateInput from "../Inputs/DateInput";
import "./MovementStyles.css";
import Button from "../Buttons/Button";
import { Link } from "react-router-dom";

function CreateDelivery() {
  return (
    <Layout>
      <Card className="creation-delivery">
        <h2>Registrar entrega</h2>
        <form>
          <StringInput label=" Comedor: "></StringInput>
          <DateInput
            className="date-creation-delivery"
            label="Fecha de entrega: "
          ></DateInput>
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
