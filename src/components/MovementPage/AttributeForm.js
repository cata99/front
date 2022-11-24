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
import Modal from "@mui/material/Modal";

import Checkbox from "@mui/material/Checkbox";

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

  const [field, setField] = useState("");

  const fieldChangeHandler = (event) => {
    setField(event.target.value);
  };

  const [unit, setUnit] = useState("");

  const unitChangeHandler = (event) => {
    setUnit(event.target.value);
  };

  const attributeSubmitHandler = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8080/api/attributes/", {
        field: field,
        unit: unit,
      })
      .then((response) => {
        if (checked) {
          setField("");
          setUnit("");
          return;
        } else {
          handleClose();
        }
      });
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [productName, setProductName] = useState("");

  const [checked, setChecked] = useState(false);

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
  }, [attributes]);

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
          <Title>Asociar atributo al producto: {productName}</Title>
        </div>
        <form onSubmit={submitHandler}>
          <div className={classes.attribute_div}>
            <div>
              <label>Atributo</label>
              <Autocomplete
                options={attributes}
                getOptionLabel={(option) => option.label}
                getOptionSelected={(option, value) =>
                  option.label === value.label
                }
                style={{ width: "33rem" }}
                classes={{
                  option: styles.option,
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    required={true}
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
                required={true}
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
            <div>
              <Button onClick={handleOpen}>Nuevo atributo</Button>
              <Modal open={open} onClose={handleClose}>
                <Card className={style.newAttribute}>
                  <div className={classes.title}>
                    <Title>Nuevo atributo</Title>
                  </div>
                  <form onSubmit={attributeSubmitHandler}>
                    <div className={classes.new_attribute}>
                      <div>
                        <label>Campo del atributo</label>
                        <TextField
                          id="text-field group"
                          style={{ width: "33rem" }}
                          variant="outlined"
                          required={true}
                          inputProps={{
                            style: { width: "33rem" },
                          }}
                          type="text"
                          value={field}
                          onChange={fieldChangeHandler}
                        />
                      </div>
                      <div>
                        <label>Ingrese la unidad en la que se mide</label>
                        <TextField
                          id="text-field group"
                          style={{ width: "33rem" }}
                          required={true}
                          variant="outlined"
                          inputProps={{
                            style: { width: "33rem" },
                          }}
                          type="text"
                          value={unit}
                          onChange={unitChangeHandler}
                        />
                      </div>
                    </div>
                    <div style={{ display: "flex", fontSize: "medium" }}>
                      <Checkbox
                        aria-label="deseo agregar mas atributos"
                        color="default"
                        value={checked}
                        onChange={() => setChecked(!checked)}
                      />
                      <p>Deseo registrar mas atributos</p>
                    </div>
                    <div
                      className={button.button_div_right}
                      style={{ "margin-top": "0px" }}
                    >
                      <Button type="button" onClick={attributeSubmitHandler}>
                        Registrar
                      </Button>
                    </div>
                  </form>
                </Card>
              </Modal>
            </div>
            <Button type="submit">Registrar</Button>
          </div>
        </form>
      </Card>
    </Layout>
  );
}

export default AttributeForm;
