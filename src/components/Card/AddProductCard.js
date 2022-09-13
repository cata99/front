import Card from "./Card";
import Button from "../Buttons/Button";
import "./Card.css";
import { Link } from "react-router-dom";

function AddProductCard() {
  return (
    <Card className="product-card general">
      <div className="title">
        <h2>Producto</h2>
      </div>
      <div className="container right">
        <Link to="/add_product_delivery"><Button label="Agregar producto"></Button></Link>
      </div>
    </Card>
  );
}

export default AddProductCard;
