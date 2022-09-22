import React from "react";
import GeneralCard from "./GeneralCard";
import classes from "../Card/Card.module.css";

function InstitutionCard(props) {
  return (
    <GeneralCard>
      <div className={classes.institution_card}>
        <h2>{props.name}</h2>
        <h3>
          Telefono: {props.phone} - Ubicación: {props.location}
        </h3>
      </div>
    </GeneralCard>
  );
}

export default InstitutionCard;
