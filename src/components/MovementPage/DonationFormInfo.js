import React from "react";
import Layout from "../Layout/Layout";
import Card from "../Card/Card";
import Button from "../Buttons/Button";
import Title from "../Card/Title";
import { Link } from "react-router-dom";
import button from "../Buttons/Button.module.css";
import classes from "./Movement.module.css";
import style from "../Card/Card.module.css";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import ErrorModal from "../Modal/ErrorModal";
import ResponseModal from "../Modal/ResponseModal";
import axios from "axios";
import { useState, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  option: {
    "&:hover": {
      backgroundColor: "grey",
    },
  },
});

function DonationFormInfo() {
  const { id } = useParams();

  const styles = useStyles();

  const [donationDate, setDonationDate] = useState("");

  const [receivedDate, setReceivedDate] = useState("");

  const [institutionInputValue, setInstitutionInputValue] = useState([]);

  const [userInputValue, setUserInputValue] = useState([]);

  const [donorInputValue, setDonorInputValue] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/donations/${id}`).then((response) => {
      setInstitutionInputValue(response.data.institution.name);
      const fullName =
        response.data.user.personalInformation.firstName +
        " , " +
        response.data.user.personalInformation.lastName;
      const donorFullName =
        response.data.personalInformation.firstName +
        " , " +
        response.data.personalInformation.lastName;
      setUserInputValue(fullName);
      setDonorInputValue(donorFullName);
      setReceivedDate(response.data.updateDate);
      setDonationDate(response.data.creationDate);
    });
  }, []);

  const [associatedProducts, setAssociatesProducts] = useState(true);
  const [donationProducts, setDonationProducts] = useState([]);
  useEffect(() => {
    const fetchDonation = async () => {
      axios
        .get(`http://localhost:8080/api/donations_products/products/${id}`)
        .then((response) => {
          setDonationProducts(response.data);
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
    <Layout>
      <Card className={style.filter}>
        <div className={classes.title}>
          <Title>Informacion donación</Title>
        </div>
        <form className={classes.creation_delivery}>
          <div>
            <label>Comedor</label>
            <TextField
              id="text-field group"
              style={{ width: "35rem" }}
              disabled
              variant="outlined"
              inputProps={{
                style: { width: "35rem" },
              }}
              type="text"
              value={institutionInputValue}
            />
          </div>
          <div>
            <p>
              <b>Fecha donación</b>
            </p>
            <div className={classes.wrapper_date}>
              <div className={classes.space_margin}>
                <label>Fecha de donacion</label>
                <TextField
                  id="text-field group"
                  style={{ width: "35rem" }}
                  disabled
                  variant="outlined"
                  inputProps={{
                    style: { width: "35rem" },
                  }}
                  type="date"
                  value={donationDate}
                />
              </div>
              <div className={classes.space_margin}>
                <label>fecha de retiro de donacion</label>
                <TextField
                  id="text-field group"
                  style={{ width: "35rem" }}
                  disabled
                  variant="outlined"
                  inputProps={{
                    style: { width: "35rem" },
                  }}
                  type="date"
                  value={receivedDate}
                />
              </div>
            </div>

            <p>
              <b>Informacion personal</b>
            </p>
            <div className={classes.wrapper_date}>
              <div className={classes.space_margin}>
                <label>Donante</label>
                <TextField
                  id="text-field group"
                  style={{ width: "35rem" }}
                  disabled
                  variant="outlined"
                  inputProps={{
                    style: { width: "35rem" },
                  }}
                  type="text"
                  value={donorInputValue}
                />
              </div>
              <div className={classes.space_margin}>
                <label>Usuario</label>
                <TextField
                  id="text-field group"
                  style={{ width: "35rem" }}
                  disabled
                  variant="outlined"
                  inputProps={{
                    style: { width: "35rem" },
                  }}
                  type="text"
                  value={userInputValue}
                />
              </div>
            </div>

            {associatedProducts && (
              <div>
                <h4>Productos asociados</h4>
                <ul>
                  {donationProducts.map((donationProduct) => {
                    return (
                      <div className={classes.div_products}>
                        <li className={classes.product}>
                          <Link
                            to={`/product_form_info/${donationProduct.product.id}`}
                          >
                            {donationProduct.product.label} - Tipo:{" "}
                            {donationProduct.product.productType.label} -
                            Cantidad : {donationProduct.quantity}
                          </Link>
                        </li>
                      </div>
                    );
                  })}
                </ul>
              </div>
            )}
            {!associatedProducts && <h3>No tiene productos asociados</h3>}
          </div>
          <div className={button.button_div_right}>
            <Link to="/donations">
              <Button>Volver</Button>
            </Link>
          </div>
        </form>
      </Card>
    </Layout>
  );
}
export default DonationFormInfo;
