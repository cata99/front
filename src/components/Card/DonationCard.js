import React from "react";
import GeneralCard from "./GeneralCard";
import classes from "./Card.module.css";
import Button from "../Buttons/Button";
import { Link } from "react-router-dom";
function DonationCard(props) {
  return (
    <GeneralCard>
      <div className={classes.row}>
        <div className={classes.institution_card}>
          <h2>Donación: {props.id}</h2>
          <h3>
            Institucion: {props.institution} - Voluntario: {props.user} -  Donante: {props.donor}
          </h3>
        </div>
        <div className={classes.right}>
          <Link to="/add_product">
            <Button style={{ fontSize: "small" }}>Agregar prod</Button>
          </Link>
          <Link to="/">
            <Button>Editar</Button>
          </Link>
          <Link to="/">
            <Button>Info</Button>
          </Link>
          <Link to="/">
            <Button>Borrar</Button>
          </Link>
        </div>
      </div>
    </GeneralCard>
  );
}

export default DonationCard;
