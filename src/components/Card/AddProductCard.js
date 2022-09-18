import Card from "./Card";
import Button from "../Buttons/Button";
import Title from "./Title";
import style from "./Card.module.css";
import { Link } from "react-router-dom";
import classes from "../MovementPage/Movement.module.css";

function AddProductCard() {
  return (
    <Card className={style.general}>
      <div className={classes.title_product}>
        <Title>Producto</Title>
      </div>
      <div className={style.right}>
        <Link to="/add_product_delivery"><Button >Agregar producto</Button></Link>
      </div>
    </Card>
  );
}

export default AddProductCard;
