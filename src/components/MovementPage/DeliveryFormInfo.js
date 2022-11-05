import React from "react";
import Layout from "../Layout/Layout";
import Card from "../Card/Card";
import Button from "../Buttons/Button";
import Title from "../Card/Title";
import button from "../Buttons/Button.module.css";
import classes from "./Movement.module.css";
import style from "../Card/Card.module.css";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";

import { Link } from "react-router-dom";

function DeliveryFormEdit() {
  const { id } = useParams();

  const [selectedInstitution, setSelectedInstitution] = useState([]);

  const [selectedDate, setSelectedDate] = useState(
    moment(new Date()).format("YYYY-MM-DD")
  );

  const [selectedUser, setSelectedUser] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/deliveries/${id}`).then((response) => {
      console.log(response.data)
      setSelectedInstitution(response.data.institution.name);
      setSelectedDate(response.data.date);
      const fullName =
        response.data.user.personalInformation.firstName +
        " , " +
        response.data.user.personalInformation.lastName;

      setSelectedUser(fullName);
    });
  }, []);

  const [associatedProducts, setAssociatesProducts] = useState(true);
  const [deliveryProducts, setDeliveryProducts] = useState([]);
  useEffect(() => {
    const fetchDelivery = async () => {
      axios
        .get(`http://localhost:8080/api/deliveries_quantities/products/${id}`)
        .then((response) => {
          setDeliveryProducts(response.data);
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
    <Layout>
      <Card className={style.filter}>
        <div className={classes.title}>
          <Title>Informacion entrega</Title>
        </div>
        <form className={classes.creation_delivery}>
          <div className={classes.input_div}>
            <label>Comedor</label>
            <TextField
              id="text-field group"
              style={{ width: "35rem" }}
              disabled
              variant="outlined"
              type="text"
              value={selectedInstitution}
            />
          </div>
          <div className={classes.input_div}>
            <label>Fecha de entrega:</label>
            <TextField
              id="text-field group"
              style={{ width: "35rem" }}
              disabled
              variant="outlined"
              type="date"
              value={selectedDate}
            />
          </div>
          <div className={classes.input_div}>
            <div>
              <label>Usuario</label>
              <TextField
                id="text-field group"
                style={{ width: "35rem" }}
                disabled
                variant="outlined"
                type="text"
                value={selectedUser}
              />
            </div>
          </div>
          {associatedProducts && (
            <div>
              <h4>Productos asociados</h4>
              <ul>
                {deliveryProducts.map((deliveryProduct) => {
                  return (
                    <li>
                      <Link
                        to={`/product_form_info/${deliveryProduct.product.id}`}
                      >
                        {deliveryProduct.product.label} - Tipo:{" "}
                        {deliveryProduct.product.productType.label} - Cantidad :{" "}
                        {deliveryProduct.quantity}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
          {!associatedProducts && <h3>No tiene productos asociados</h3>}
          <div className={button.button_div_right}>
            <Link to="/deliveries">
              <Button>Volver</Button>
            </Link>
          </div>
        </form>
      </Card>
    </Layout>
  );
}

export default DeliveryFormEdit;
