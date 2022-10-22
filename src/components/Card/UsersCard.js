import React from "react";
import GeneralCard from "./GeneralCard";
import classes from "./Card.module.css";
import Button from "../Buttons/Button";
import { Link } from "react-router-dom";

function UsersCard(props) {

    const completeName= props.firstName + " " + props.lastName;

    return (
      <GeneralCard>
        <div className={classes.row}>
          <div className={classes.institution_card}>
            <h2>{completeName}</h2>
            <h3>{props.email} - {props.phone}</h3>
          </div>
          <div className={classes.right}>
            <Link to={`/users_form_edit/${props.id}`}>
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
  
  export default UsersCard;