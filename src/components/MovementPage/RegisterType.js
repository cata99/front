import Card from "../Card/Card";
import Layout from "../Layout/Layout";
import Button from "../Buttons/Button";
import { Link } from "react-router-dom";

function RegisterType() {
  return (
    <Layout>
      <form>
        <Card className="new-type">
          <div className="string-input">
            <label>Tipo de producto</label>
            <input type="text"></input>
          </div>
          <div className="page-button-movement">
            <Link to="/create_movement">
              <Button label="Registrar"></Button>
            </Link>
          </div>
        </Card>
      </form>
    </Layout>
  );
}

export default RegisterType;
