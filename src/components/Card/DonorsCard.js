import React from "react";
import GeneralCard from "./GeneralCard";
import classes from "./Card.module.css";
import Button from "../Buttons/Button";
import { Link } from "react-router-dom";
import SecondaryButton from "../Buttons/SecondaryButton";

function DonorsCard(props) {

    const completeName= props.firstName + " " + props.lastName;

    return (
      <GeneralCard>
        <div className={classes.row}>
          <div className={classes.institution_card}>
            <h2>{completeName}</h2>
            <h3>{props.email} - {props.phone}</h3>
          </div>
          <div className={classes.right}>
            <Link to={`/donors_form_edit/${props.id}`}>
              <SecondaryButton>Editar</SecondaryButton>
            </Link>
            <Link to={`/donors_form_info/${props.id}`}>
              <Button>Info</Button>
            </Link>
          </div>
        </div>
      </GeneralCard>
    );
  }
  
  export default DonorsCard;