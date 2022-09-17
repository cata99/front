import Card from "../Card/Card";
import Layout from "../Layout/Layout";
import Button from "../Buttons/Button";
import { Link } from "react-router-dom";
import Title from "../Card/Title";

function RegisterType() {
  return (
    <Layout>
      <Card className="new-type">
        <Title label="Registre nuevo tipo de producto"></Title>
        <form className="form-new-type">
          <div className="string-input">
            <label>Tipo de producto</label>
            <input type="text" className="product-type-input"></input>
          </div>
          <div className="page-button-movement">
            <Link to="/create_movement">
              <Button label="Registrar"></Button>
            </Link>
          </div>
        </form>
      </Card>
    </Layout>
  );
}

export default RegisterType;
