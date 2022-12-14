import React from "react";
import Card from "../Card/Card";
import Button from "../Buttons/Button";
import Layout from "../Layout/Layout";
import classes from "./Movement.module.css";
import Title from "../Card/Title";
import button from "../Buttons/Button.module.css";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import ErrorModal from "../Modal/ErrorModal";
import ResponseModal from "../Modal/ResponseModal";
import axios from "axios";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import style from "../Card/Card.module.css";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";

const useStyles = makeStyles({
  option: {
    "&:hover": {
      backgroundColor: "grey",
    },
  },
});

function ProductFormEdit() {
  const { id } = useParams();

  const styles = useStyles();
  const [product, setProduct] = useState("");

  const [types, setTypes] = useState([]);

  const [selectedType, setSelectedType] = useState([]);

  const [error, setError] = useState("");

  const [assert, setAssert] = useState("");

  const [redirect, setRedirect] = useState(false);

  const errorHandler = () => {
    setError(null);
  };

  const assertHandler = () => {
    setAssert(null);
    setRedirect(true);
  };

  useEffect(() => {
    axios.get("http://localhost:8080/api/product_types/").then((response) => {
      const autocompleteTypes = response.data.map((type) => {
        return {
          label: type.label,
          id: type.id,
        };
      });
      setTypes(autocompleteTypes);
    });
  }, []);

  const [typeInputValue, setTypeInputValue] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/products/${id}`).then((response) => {
      setProduct(response.data.label);
      setTypeInputValue(response.data.productType.label);
    });
  }, []);

  const productChangeHandler = (event) => {
    setProduct(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    axios
      .put(`http://localhost:8080/api/products/${id}`, {
        label: product,
        productType: { id: selectedType.id },
      })
      .then((response) => {
        setAssert({
          title: "Felicitaciones",
          message: "La operaci??n se ha completado con exito",
        });
      });
  };

  return (
    <Layout title="Producto">
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
      {redirect && <Navigate to="/products"></Navigate>}
      <Card className={style.filter}>
        <div className={classes.title}>
          <Title>Editar producto</Title>
        </div>
        <form onSubmit={submitHandler}>
          <div>
            <label>Producto</label>
            <TextField
              id="text-field group"
              style={{ width: "35rem" }}
              variant="outlined"
              inputProps={{
                style: { width: "35rem" },
              }}
              type="text"
              value={product}
              onChange={productChangeHandler}
            />
          </div>
          <div className={classes.add_type}>
            <div>
              <label>Tipo Producto</label>
              <Autocomplete
                inputValue={typeInputValue}
                onInputChange={(_event, newInputValue) => {
                  setTypeInputValue(newInputValue);
                }}
                options={types}
                getOptionLabel={(option) => option.label}
                style={{ width: "35rem" }}
                classes={{
                  option: styles.option,
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    placeholder="Seleccione instituci??n"
                  />
                )}
                value={selectedType}
                onChange={(_event, type) => {
                  setSelectedType(type);
                }}
              ></Autocomplete>
            </div>
          </div>
          <div className={button.button_div_right}>
            <Button type="submit">Editar</Button>
          </div>
        </form>
      </Card>
    </Layout>
  );
}

export default ProductFormEdit;
