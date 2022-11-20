import React from "react";
import GeneralCard from "./GeneralCard";
import Button from "../Buttons/Button";
import classes from "../Card/Card.module.css";
import { Link } from "react-router-dom";
import SecondaryButton from "../Buttons/SecondaryButton";

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
            <SecondaryButton>Editar</SecondaryButton>
          </Link>
          <Link to={`/institution_form_info/${props.id}`}><Button>Info</Button></Link>
        </div>
      </div>
    </GeneralCard>
  );
}

export default InstitutionCard;
