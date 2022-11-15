import React from "react";
import Card from "../Card/Card";
import Layout from "../Layout/Layout";
import Button from "../Buttons/Button";
import Title from "../Card/Title";
import ErrorModal from "../Modal/ErrorModal";
import classes from "./Movement.module.css";
import button from "../Buttons/Button.module.css";
import style from "../Card/Card.module.css";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import axios from "axios";
import { useState, useEffect } from "react";
import ResponseModal from "../Modal/ResponseModal";
import { Navigate, useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  option: {
    "&:hover": {
      backgroundColor: "grey",
    },
  },
});

function AddProductFormDeliveries() {
  const styles = useStyles();
  const [products, setProducts] = useState([]);

  const [enteredProduct, setEnteredProduct] = useState("");

  const quantityChangeValue = (event) => {
    setQuantity(event.target.value);
  };

  const [quantity, setQuantity] = useState([]);

  const [error, setError] = useState("");

  const [redirect, setRedirect] = useState(false);

  const [assert, setAssert] = useState("");

  const { id } = useParams(id);

  const errorHandler = () => {
    setError(null);
  };

  const assertHandler = () => {
    setAssert(null);
    setRedirect(true);
  };

  useEffect(() => {
    axios.get("http://localhost:8080/api/products/").then((response) => {
      const autocompleteProducts = response.data.map((product) => {
        console.log(product);
        return {
          label: product.label,
          id: product.id,
        };
      });
      setProducts(autocompleteProducts);
    });
  }, []);

  const submitHandler = (event) => {
    event.preventDefault();
    debugger;
    axios.post("http://localhost:8080/api/deliveries_quantities/", {
      product: {
        id: enteredProduct.id,
      },
      delivery: {
        id: id,
      },
      quantity: quantity,
    }).then((response) => {
        setAssert({
      title: "Felicitaciones",
      message: "La operación se ha completado con exito",
    });
    }).catch(function (error){
        setError({
            title: "Esta operación es incorrecta",
            message:"No se pudo asociar el producto ya que la cantidad ya que exceede la cantidad en stock"
        })
    })
    setEnteredProduct("");
    setQuantity("");
  };

  return (
    <Layout title="Entregas">
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        ></ErrorModal>
      )}
      {assert && (
        <ResponseModal
          title={assert.title}
          message={assert.message}
          onConfirm={assertHandler}
        ></ResponseModal>
      )}
      {redirect && <Navigate to="/deliveries"></Navigate>}
      <Card className={style.filter}>
        <div className={classes.title}>
          <Title>Asociar producto a la entrega</Title>
        </div>
        <form onSubmit={submitHandler}>
          <div className={classes.attribute_div}>
            <div>
              <label>Producto</label>
              <Autocomplete
                options={products}
                getOptionLabel={(option) => option.label}
                style={{ width: "33rem" }}
                classes={{
                  option: styles.option,
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    placeholder="Ejemplo: latas de tomates"
                  />
                )}
                value={enteredProduct}
                onChange={(_event, product) => {
                  setEnteredProduct(product);
                }}
              ></Autocomplete>
            </div>
            <div>
              <label>Cantidad</label>
              <TextField
                id="text-field group"
                style={{ width: "33rem" }}
                variant="outlined"
                placeholder="Cinco"

                inputProps={{
                  style: { width: "33rem" },
                }}
                type="number"
                value={quantity}
                onChange={quantityChangeValue}
              />
            </div>
          </div>
          <div className={button.button_div_right}>
            <Button type="submit">Registrar</Button>
          </div>
        </form>
      </Card>
    </Layout>
  );
}

export default AddProductFormDeliveries;
