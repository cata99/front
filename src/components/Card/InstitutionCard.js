import React from "react";
import GeneralCard from "./GeneralCard";
import Button from "../Buttons/Button";
import classes from "../Card/Card.module.css";
import { Link } from "react-router-dom";
import SecondaryButton from "../Buttons/SecondaryButton";
import { useState, useEffect } from "react";

function InstitutionCard(props) {
  const [adminRole, setAdminRole] = useState(false);
  const [referentRole, setReferentRole] = useState(false);

  useEffect(() => {
    const fetchRole = async () => {
      let role = sessionStorage.getItem("roles");
      if (role === "ROLE_ADMIN") setAdminRole(true);
      if (role === "ROLE_REFERENTE") setReferentRole(true);
    };

    fetchRole();
  }, []);
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
          {adminRole && (
            <Link to={`/institution_form_edit/${props.id}`}>
              <SecondaryButton>Editar</SecondaryButton>
            </Link>
          )}
          {referentRole && (
            <Link to={`/institution_form_edit/${props.id}`}>
              <SecondaryButton>Editar</SecondaryButton>
            </Link>
          )}
          <Link to={`/institution_form_info/${props.id}`}>
            <Button>Info</Button>
          </Link>
        </div>
      </div>
    </GeneralCard>
  );
}

export default InstitutionCard;
