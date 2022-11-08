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
import { Link, Navigate, useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  option: {
    "&:hover": {
      backgroundColor: "grey",
    },
  },
});

function AttributeForm(props) {
  const styles = useStyles();
  const [attributes, setAttributes] = useState([]);

  const [enteredAttribute, setEnteredAttribute] = useState("");

  const valueChangeHandler = (event) => {
    setValue(event.target.value);
  };

  const [value, setValue] = useState([]);

  const [error, setError] = useState("");

  const [redirect, setRedirect] = useState(false);

  const [assert, setAssert] = useState("");

  const { id } = useParams();

  const [productName, setProductName]= useState("");

  const errorHandler = () => {
    setError(null);
  };

  const assertHandler = () => {
    setAssert(null);
    setRedirect(true);
  };

  useEffect(() => {
    axios.get("http://localhost:8080/api/attributes/").then((response) => {
      const autocompleteAttributes = response.data.map((attribute) => {

        return {
          label: attribute.field + " - " + attribute.unit,
          id: attribute.id,
        };
      });
      setAttributes(autocompleteAttributes);
    });
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/products/${id}`).then((response) => {
    setProductName(response.data.label);
    });
  }, []);

  const submitHandler = (event) => {
    event.preventDefault();

    axios.post("http://localhost:8080/api/product_attribute/", {
      product: {
        id: id,
      },
      attribute: {
        id: enteredAttribute.id,
      },
      value: value,
    });

    setAssert({
      title: "Felicitaciones",
      message: "La operación se ha completado con exito",
    });

    setEnteredAttribute("");
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
          <Title>Asociar atributo al producto: {productName}</Title>
        </div>
        <form onSubmit={submitHandler}>
          <div className={classes.attribute_div}>
            <div>
              <label>Atributo</label>
              <Autocomplete
                options={attributes}
                getOptionLabel={(option) => option.label}
                style={{ width: "33rem" }}
                classes={{
                  option: styles.option,
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    placeholder="Seleccione atributo"
                  />
                )}
                value={enteredAttribute}
                onChange={(_event, attribute) => {
                  setEnteredAttribute(attribute);
                }}
              ></Autocomplete>
            </div>
            <div>
              <label>Valor del atributo</label>
              <TextField
                id="text-field group"
                style={{ width: "33rem" }}
                variant="outlined"
                placeholder="Ejemplo: El peso de la lata es de 100"
                inputProps={{
                  style: { width: "33rem" },
                }}
                type="number"
                value={value}
                onChange={valueChangeHandler}
              />
            </div>
          </div>
          <div className={button.button_div_right}>
            <Link to={`/new_attribute/${id}`} >
              <Button>Nuevo atributo</Button>
            </Link>
            <Button type="submit">Registrar</Button>
          </div>
        </form>
      </Card>
    </Layout>
  );
}

export default AttributeForm;
