import React from "react";
import Layout from "../Layout/Layout";
import Card from "../Card/Card";
import Button from "../Buttons/Button";
import { Link } from "react-router-dom";

import classes from "./Movement.module.css";
import style from "../Card/Card.module.css";
import Title from "../Card/Title";

function OptionsMovement() {
  return (
    <Layout title="Movimientos">
      <Card className={style.filter}>
        <div className={classes.options_title}>
          <Title>Seleccione el movimiento a ingresar</Title>
        </div>
        <div className={classes.options_div}>
          <Link to="/delivery_form">
            <Button>Entrega</Button>
          </Link>
          <Link to="/donation_form">
            <Button>Donación</Button>
          </Link>
          <Link to="/product_form">
            <Button>Productos</Button>
          </Link>
        </div>
      </Card>
    </Layout>
  );
}

export default OptionsMovement;
