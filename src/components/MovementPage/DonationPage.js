import React from "react";
import MovementFilters from "../Filters/MovementFilter";
import Button from "../Buttons/Button";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import button from "../Buttons/Button.module.css";
import DonationCard from "../Card/DonationCard";

function DonationPage(props) {
  const [movements, setMovements] = useState([]);
  useEffect(() => {
    const fetchMovement = async () => {
      axios.get("http://localhost:8080/api/donations/").then((response) => {
        setMovements(response.data);
        console.log(response.data);
      });
    };

    fetchMovement();
  }, []);

  return (
    <Layout title="Donaciones">
      <MovementFilters filter="donaciones"></MovementFilters>
      <div className={button.button_div_right}>
        <Link to="/products">
          <Button>Ver productos</Button>
        </Link>
        <Link to="/deliveries">
          <Button>Ver entregas</Button>
        </Link>
        <Link to="/movement_option">
          <Button>+</Button>
        </Link>
      </div>
      {movements.reverse().map((movement) => {
        return (
          <DonationCard
            key={movement.id}
            id={movement.id}
            institution={movement.institution.name}
            user={
              movement.user.personalInformation.firstName +
              " , " +
              movement.user.personalInformation.lastName
            }
            donor={movement.personalInformation.firstName + " , " + movement.personalInformation.lastName}
          ></DonationCard>
        );
      })}
    </Layout>
  );
}

export default DonationPage;
