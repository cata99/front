import React from "react";
import GeneralCard from "./GeneralCard";
import classes from "./Card.module.css";
import Button from "../Buttons/Button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import SecondaryButton from "../Buttons/SecondaryButton";
function DonationCard(props) {
  const [associatedProducts, setAssociatesProducts] = useState(true);
  const [donationProducts, setDonationProducts] = useState();

  const [adminRole, setAdminRole] = useState(false);

  useEffect(() => {
    const fetchRole = async () => {
      let role = sessionStorage.getItem("roles");
      if (role === "ROLE_ADMIN") setAdminRole(true);
    };

    fetchRole();
  }, []);
  useEffect(() => {
    const fetchDonation = async () => {
      axios
        .get(
          `http://localhost:8080/api/donations_products/products/${props.id}`
        )
        .then((response) => {
          setDonationProducts(response.data.length);
          if (response.data.length > 0) {
            setAssociatesProducts(true);
          } else {
            setAssociatesProducts(false);
          }
        });
    };

    fetchDonation();
  }, []);
  return (
    <GeneralCard>
      <div className={classes.row}>
        <div className={classes.institution_card}>
          <h2>Donación: {props.id}</h2>
          {associatedProducts && (
            <h3>Cantidad de productos asociados: {donationProducts}</h3>
          )}
          {!associatedProducts && (
            <h3>
              <b  style={{color:"red"}}>No tiene productos asociados</b>
            </h3>
          )}
          <h3>
            Institucion: {props.institution} - Voluntario: {props.user} -
            Donante: {props.donor}
          </h3>
        </div>
        <div className={classes.right} style={{ padding: "5%" }}>
          {adminRole && (
            <Link to={`/add_product_donations/${props.id}`}>
              <SecondaryButton style={{ fontSize: "small" }}>
                + productos
              </SecondaryButton>
            </Link>
          )}
          {adminRole && (
            <Link to={`/donations_form_edit/${props.id}`}>
              <SecondaryButton>Editar</SecondaryButton>
            </Link>
          )}
          <Link to={`/donations_form_info/${props.id}`}>
            <Button>Info</Button>
          </Link>
        </div>
      </div>
    </GeneralCard>
  );
}

export default DonationCard;
