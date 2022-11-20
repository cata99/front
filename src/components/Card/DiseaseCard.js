import React from "react";
import GeneralCard from "./GeneralCard";
import classes from "./Card.module.css";
import Button from "../Buttons/Button";
import { Link } from "react-router-dom";
import SecondaryButton from "../Buttons/SecondaryButton";

function DiaseaseCard(props) {
    return (
      <GeneralCard>
        <div className={classes.row}>
          <div className={classes.institution_card}>
            <h2>{props.label}</h2>
          </div>
          <div className={classes.right}>
          <Link  to={`/add_disease/${props.id}`}>
            <SecondaryButton style={{ fontSize: "small" }}>Asociar inst</SecondaryButton>
          </Link>
            <Link to={`/disease_form_edit/${props.id}`}>
              <SecondaryButton>Editar</SecondaryButton>
            </Link>
            <Link to={`/disease_form_info/${props.id}`}>
              <Button>Info</Button>
            </Link>
          </div>
        </div>
      </GeneralCard>
    );
  }
  
  export default DiaseaseCard;