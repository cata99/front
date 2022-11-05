import React from "react";
import GeneralCard from "./GeneralCard";
import classes from "./Card.module.css";
import Button from "../Buttons/Button";
import { Link } from "react-router-dom";
function GroupCard(props) {
  return (
    <GeneralCard>
      <div className={classes.row}>
        <div className={classes.institution_card}>
          <h2>{props.name}</h2>
          <h3>Institucion: {props.institution}</h3>
        </div>
        <div className={classes.right}>
          <Link to={`/group_form_edit/${props.id}`}>
            <Button>Editar</Button>
          </Link>
          <Link to={`/group_form_info/${props.id}`}>
            <Button>Info</Button>
          </Link>
        </div>
      </div>
    </GeneralCard>
  );
}

export default GroupCard;
