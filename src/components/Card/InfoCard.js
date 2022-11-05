import React from "react";
import GeneralCard from "./GeneralCard";
import classes from "./Card.module.css";
import Button from "../Buttons/Button";
import { Link } from "react-router-dom";

function InfoCard(props) {
  return (
    <GeneralCard>
      <div className={classes.row}>
        <h2>{props.name}</h2>
      </div>
    </GeneralCard>
  );
}

export default InfoCard;
