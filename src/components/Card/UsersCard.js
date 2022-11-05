import React, { useState } from "react";
import GeneralCard from "./GeneralCard";
import classes from "./Card.module.css";
import axios from "axios";
import Button from "../Buttons/Button";
import { Link } from "react-router-dom";

import { useEffect } from "react";

function UsersCard(props) {
  const completeName = props.firstName + " " + props.lastName;
  const [volunteer, setVolunteers] = useState(false);
  const [users, setUsers] = useState();
  useEffect(() => {
    const fetchDonors = async () => {
      if (props.donors.includes(props.id)) setVolunteers(false);
      else {
        setVolunteers(true);
        axios
          .get(
            `http://localhost:8080/api/users/personal_information/${props.id}`
          )
          .then((response) => {
            setUsers(response.data.id);
          });
      }
    };

    fetchDonors();
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
        {volunteer && (
          <div className={classes.right}>
            <Link to={`/users_form_edit/${users}`}>
              <Button>Editar</Button>
            </Link>
            <Link to={`/users_form_info/${users}`}>
              <Button>Info</Button>
            </Link>
          </div>
        )}
        {!volunteer && (
          <div className={classes.right}>
            <Link to={`/donors_form_edit/${props.id}`}>
              <Button>Editar</Button>
            </Link>
            <Link to={`/donors_form_info/${props.id}`}>
              <Button>Info</Button>
            </Link>
          </div>
        )}
      </div>
    </GeneralCard>
  );
}

export default UsersCard;
