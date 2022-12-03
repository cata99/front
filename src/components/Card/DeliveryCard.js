import React from "react";
import GeneralCard from "./GeneralCard";
import classes from "./Card.module.css";
import Button from "../Buttons/Button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import SecondaryButton from "../Buttons/SecondaryButton";
function DeliveryCard(props) {
  const [deliveryProducts, setDeliveryProducts] = useState();

  const [associatedProducts, setAssociatesProducts] = useState(true);

  const [adminRole, setAdminRole] = useState(false);

  useEffect(() => {
    const fetchRole = async () => {
      let role = sessionStorage.getItem("roles");
      if (role === "ROLE_ADMIN") setAdminRole(true);
    };

    fetchRole();
  }, []);

  useEffect(() => {
    const fetchDelivery = async () => {
      axios
        .get(
          `http://localhost:8080/api/deliveries_quantities/products/${props.id}`
        )
        .then((response) => {
          setDeliveryProducts(response.data.length);

          if (response.data.length > 0) {
            setAssociatesProducts(true);
          } else {
            setAssociatesProducts(false);
          }
        });
    };

    fetchDelivery();
  }, []);
  return (
    <GeneralCard>
      <div className={classes.row}>
        <div className={classes.institution_card}>
          <h2>Entrega {props.id}</h2> {console.log(deliveryProducts)}
          {associatedProducts && (
            <h3>Cantidad de productos asociados: {deliveryProducts}</h3>
          )}
          {!associatedProducts && (
            <h3>
              <b>No tiene productos asociados</b>
            </h3>
          )}
          <h3>
            Institucion: {props.institution} - Voluntario: {props.user}
          </h3>
        </div>
        <div className={classes.right} style={{ padding: "5%" }}>
          {adminRole && (
            <Link to={`/add_product_deliveries/${props.id}`}>
              <SecondaryButton style={{ fontSize: "small" }}>
                Agregar prod
              </SecondaryButton>
            </Link>
          )}
          {adminRole && (
            <Link to={`/deliveries_form_edit/${props.id}`}>
              <SecondaryButton>Editar</SecondaryButton>
            </Link>
          )}
          <Link to={`/deliveries_form_info/${props.id}`}>
            <Button>Info</Button>
          </Link>
        </div>
      </div>
    </GeneralCard>
  );
}

export default DeliveryCard;
