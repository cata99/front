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
import Modal from "@mui/material/Modal";

const useStyles = makeStyles({
  option: {
    "&:hover": {
      backgroundColor: "grey",
    },
  },
});

function ProductForm() {
  const [product, setProduct] = useState("");

  const styles = useStyles();

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
  }, [types]);

  const productChangeHandler = (event) => {
    setProduct(event.target.value);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [enteredType, setEnteredType] = useState("");

  const typeChangeHandler = (event) => {
    setEnteredType(event.target.value);
  };

  const submitTypeHandler = (event) => {
    event.preventDefault();

    const jsonBody = {
      label: enteredType,
    };
    console.log(jsonBody);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(jsonBody),
    };
    fetch("http://localhost:8080/api/product_types/", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result));
    setEnteredType("");
    handleClose();
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
    <Layout title="Productos">
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
          <Title>Nuevo producto</Title>
        </div>
        <form onSubmit={submitHandler}>
          <div>
            <label>Producto</label>
            <TextField
              id="text-field group"
              style={{ width: "35rem" }}
              required={true}
              variant="outlined"
              inputProps={{
                style: { width: "35rem" },
              }}
              type="text"
              placeholder="Ingrese nombre del producto"
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
                classes={{
                  option: styles.option,
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    required={true}
                    variant="outlined"
                    placeholder="Seleccione tipo  de producto"
                  />
                )}
                value={selectedType}
                onChange={(_event, type) => {
                  setSelectedType(type);
                }}
              ></Autocomplete>
            </div>
            <div className={classes.add_product_button}>
              <div>
                <Button onClick={handleOpen}>Nuevo tipo</Button>
                <Modal open={open} onClose={handleClose}>
                  <Card className={style.newAttribute} style={{backgroundColor: "azure"}}>
                    <div className={classes.title}>
                      <Title>Nuevo tipo de producto</Title>
                    </div>
                    <form onSubmit={submitTypeHandler}>
                      <div className={classes.input_div}>
                        <label>Tipo de producto</label>
                        <TextField
                          id="text-field group"
                          style={{ width: "35rem" }}
                          required={true}
                          variant="outlined"
                          inputProps={{
                            style: { width: "35rem" },
                          }}
                          placeholder="Ejemplo: Perecedero, muebles, entre otros"
                          type="text"
                          value={enteredType}
                          onChange={typeChangeHandler}
                        />
                      </div>
                      <div className={button.button_div_right}>
                        <Button type="submit">Registrar</Button>
                      </div>
                    </form>
                  </Card>
                </Modal>
              </div>
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
