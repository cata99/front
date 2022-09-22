import React from "react";
import GeneralCard from "./GeneralCard";
import Button from "../Buttons/Button";
import classes from "../Card/Card.module.css";
import { Link } from "react-router-dom";

function InstitutionCard(props) {
  return (
    <GeneralCard>
      <div className={classes.row}>
        <div className={classes.institution_card}>
          <h2>{props.name}</h2>
          <h3>
            Telefono: {props.phone} - Ubicación: {props.location}
          </h3>
        </div>
        <div className={classes.right}>
          <Link to={`/institution_form_edit/${props.id}`}>
            <Button>Editar</Button>
          </Link>
          <Link to="/"><Button>Info</Button></Link>
          <Link to="/"><Button>Borrar</Button></Link>
        </div>
      </div>
    </GeneralCard>
  );
}

export default InstitutionCard;
