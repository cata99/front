import Card from "../Card/Card";
import Button from "../Buttons/Button";
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";
import classes from "./Movement.module.css";
import Title from "../Card/Title";
import button from "../Buttons/Button.module.css";

import style from "../Card/Card.module.css";

function ProductForm() {
  return (
    <Layout>
      <Card className={style.filter}>
        <div className={classes.title}>
          <Title>Asociar Producto</Title>
        </div>
        <form>
          <div className={classes.input_div}>
            <label>Producto</label>
            <input type="text"></input>
          </div>
          <div className={classes.add_type}>
            <div>
              <label>Tipo Producto</label>
              <input type="text" className="type-product-input"></input>
            </div>
            <div className={classes.add_product_button}>
              <Link to="/type_form">
                <Button>Agregar Tipo</Button>
              </Link>
            </div>
          </div>
          <div className={button.button_div_right}>
            <Link to="/add_products_delivery">
              <Button>Asociar producto</Button>
            </Link>
          </div>
        </form>
      </Card>
    </Layout>
  );
}

export default ProductForm;
