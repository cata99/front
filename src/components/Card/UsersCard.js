import React from "react";
import GeneralCard from "./GeneralCard";
import classes from "./Card.module.css";

function UsersCard(props) {
  const completeName = props.firstName + " " + props.lastName;

  return (
    <GeneralCard>
      <div className={classes.row}>
        <div className={classes.institution_card}>
          <h2>{completeName}</h2>
          <h3>
            {props.email} - {props.phone}
          </h3>
        </div>
      </div>
    </GeneralCard>
  );
}

export default UsersCard;
