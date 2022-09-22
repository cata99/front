import React from "react";
import GeneralCard from "./GeneralCard";
import classes from "./Card.module.css";
import Button from "../Buttons/Button";
import { Link } from "react-router-dom";

function DiaseaseCard(props) {
    return (
      <GeneralCard>
        <div className={classes.row}>
          <div className={classes.institution_card}>
            <h2>{props.label}</h2>
          </div>
          <div className={classes.right}>
            <Link to={`/disease_form_edit/${props.id}`}>
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
  
  export default DiaseaseCard;