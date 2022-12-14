import React, { useEffect, useState } from "react";
import GeneralCard from "./GeneralCard";
import classes from "./Card.module.css";
import Button from "../Buttons/Button";
import { Link } from "react-router-dom";
import SecondaryButton from "../Buttons/SecondaryButton";


function VolunteersCard(props) {
  const completeName = props.firstName + " " + props.lastName;

  const [adminRole, setAdminRole] = useState(false);

  useEffect(() => {
    const fetchRole = async () => {
      let role = sessionStorage.getItem("roles");
      if (role === "ROLE_ADMIN") setAdminRole(true);
    };

    fetchRole();
  }, []);

  return (
    <GeneralCard>
      <div className={classes.row}>
        <div className={classes.institution_card}>
          <h2>{completeName}</h2>
          <h3>
            {props.email} - {props.phone}
          </h3>
        </div>
        <div className={classes.right}>
          {adminRole && (
            <Link to={`/users_form_edit/${props.id}`}>
              <SecondaryButton>Editar</SecondaryButton>
            </Link>
          )}
          <Link to={`/users_form_info/${props.id}`}>
            <Button>Info</Button>
          </Link>
        </div>
      </div>
    </GeneralCard>
  );
}

export default VolunteersCard;
