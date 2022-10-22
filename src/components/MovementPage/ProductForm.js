import React from "react";
import Card from "../Card/Card";
import Button from "../Buttons/Button";
import { Link } from "react-router-dom";
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

function ProductForm() {
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
        console.log(type);
        return {
          label: type.label,
          id: type.id,
        };
      });
      setTypes(autocompleteTypes);
    });
  }, []);

  const productChangeHandler = (event) => {
    setProduct(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8080/api/products/", {
        label: product,
        productType: { id: selectedType.id },
      })
      .then((response) => {
        console.log(response);
        setAssert({
          title: "Felicitaciones",
          message: "La operación se ha completado con exito",
        });
      });
  };

  return (
    <Layout>
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
          <Title>Asociar Producto</Title>
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
                options={types}
                getOptionLabel={(option) => option.label}
                style={{ width: "35rem" }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    placeholder="Seleccione institución"
                  />
                )}
                value={selectedType}
                onChange={(_event, type) => {
                  setSelectedType(type);
                }}
              ></Autocomplete>
            </div>
            <div className={classes.add_product_button}>
              <Link to="/type_form">
                <Button>Agregar Tipo</Button>
              </Link>
            </div>
          </div>
          <div className={button.button_div_right}>
            <Button type="submit">Crear producto</Button>
          </div>
        </form>
      </Card>
    </Layout>
  );
}

export default ProductForm;
