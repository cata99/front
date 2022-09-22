import React from "react";
import GeneralCard from "./GeneralCard";
import classes from "./Card.module.css";
import Button from "../Buttons/Button";
import { Link } from "react-router-dom";

function AuthorityCard(props) {
  return (
    <GeneralCard>
      <div className={classes.row}>
        <div className={classes.institution_card}>
          <h2>{props.label}</h2>
          <h3>
            Telefono: {props.phone} - Ubicación: {props.location}
          </h3>
        </div>
        <div className={classes.right}>
          <Link to={`/authority_form_edit/${props.id}`}>
            <Button>Editar</Button>
          </Link>
          <Link to="/">
            <Button>Borrar</Button>
          </Link>
        </div>
      </div>
    </GeneralCard>
  );
}

export default AuthorityCard;
