import React from "react";
import MovementFilters from "../Filters/MovementFilter";
import Button from "../Buttons/Button";
import DeliveryCard from "../Card/DeliveryCard";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import button from "../Buttons/Button.module.css";

function DeliveryPage() {
  const [movements, setMovements] = useState([]);

  useEffect(() => {
    const fetchMovement = async () => {
      axios.get("http://localhost:8080/api/deliveries/").then((response) => {
        setMovements(response.data);
      });
    };

    fetchMovement();
  }, []);

  return (
    <Layout title="Entregas">
      <MovementFilters></MovementFilters>
      <div className={button.button_div_right}>
        <Link to="/products">
          <Button>Ver productos</Button>
        </Link>
        <Link to="/donations">
          <Button>Ver donaciones</Button>
        </Link>
        <Link to="/movement_option">
          <Button>+</Button>
        </Link>
      </div>
      {movements.reverse().map((movement) => {
        return (
          <DeliveryCard
            key={movement.id}
            id={movement.id}
            institution={movement.institution.name}
            user={
              movement.user.personalInformation.firstName +
              " , " +
              movement.user.personalInformation.lastName
            }
          ></DeliveryCard>
        );
      })}
    </Layout>
  );
}

export default DeliveryPage;
