import Card from "../Card/Card";
import Button from "../Buttons/Button";
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";
import "./MovementStyles.css";

function AddProduct() {
  return (
    <Layout>
      <Card className="add-product">
        <form>
          <div className="string-input">
            <label>Producto</label>
            <input type="text"></input>
          </div>
          <div className="add-type">
          <div className="string-input">
            <label>Tipo Producto</label>
            <input type="text"></input>
          </div>
            <div className="type-button-div">
              <Link to="/new_type">
                <Button label="Agregar Tipo"></Button>
              </Link>
            </div>
          </div>
          <div className="container right">
            <Link to="/add_product_delivery">
              <Button label="Asociar producto"></Button>
            </Link>
          </div>
        </form>
      </Card>
    </Layout>
  );
}

export default AddProduct;
