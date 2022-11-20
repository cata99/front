import React from "react";
import Card from "../Card/Card";
import Button from "../Buttons/Button";
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";
import classes from "./Movement.module.css";
import Title from "../Card/Title";
import button from "../Buttons/Button.module.css";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import { useState, useEffect } from "react";
import style from "../Card/Card.module.css";
import { useParams } from "react-router-dom";
import Modal from "@mui/material/Modal";
import SecondaryButton from "../Buttons/SecondaryButton";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@mui/material/Checkbox";

const useStyles = makeStyles({
  option: {
    "&:hover": {
      backgroundColor: "grey",
    },
  },
});

function ProductFormInfo() {
  const { id } = useParams();

  const [product, setProduct] = useState("");

  const [type, setType] = useState([]);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [attribute, setAttribute] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/products/${id}`).then((response) => {
      setProduct(response.data.label);
      setType(response.data.productType.label);
    });
  }, []);

  const [associatedProducts, setAssociatesProducts] = useState(true);
  const [productsAttributes, setProductsAttributes] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      axios
        .get(`http://localhost:8080/api/product_attribute/attributes/${id}`)
        .then((response) => {
          setProductsAttributes(response.data);
          if (response.data.length > 0) {
            setAssociatesProducts(true);
          } else {
            setAssociatesProducts(false);
          }
        });
    };

    fetchProduct();
  }, [productsAttributes]);

  const styles = useStyles();
  const [attributes, setAttributes] = useState([]);

  const [enteredAttribute, setEnteredAttribute] = useState("");

  const [checked, setChecked] = useState(false);

  const valueChangeHandler = (event) => {
    setValue(event.target.value);
  };

  const [value, setValue] = useState([]);

  const [field, setField] = useState("");

  const fieldChangeHandler = (event) => {
    setField(event.target.value);
  };

  const [unit, setUnit] = useState("");

  const unitChangeHandler = (event) => {
    setUnit(event.target.value);
  };

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
    setEnteredAttribute("");
    setValue("");
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

  return (
    <Layout title="Producto">
      <Card className={style.filter}>
        <div className={classes.title}>
          <Title>
            Informacion producto: {product} del tipo: {type}
          </Title>
        </div>
        {associatedProducts && (
          <div>
            <h4>Atributos asociados</h4>
            <ul>
              {productsAttributes.map((productAttribute) => {
                return (
                  <li>
                    <div className={classes.row}>
                      <div className={classes.institution_card}>
                        Atributo: {productAttribute.attribute.field} -{" "}
                        {productAttribute.value} -{" "}
                        {productAttribute.attribute.unit}
                      </div>
                      <div className={classes.right}>
                        <Button type="button" onClick={handleOpen}>
                          Borrar atributo
                        </Button>
                        <Modal open={open} onClose={handleClose}>
                          <Card className={style.confirmDelete}>
                            <div className={classes.title}>
                              <h3>Confirme borrado de atributo</h3>
                              <div
                                style={{
                                  display: "flex",
                                  gap: "2rem",
                                  justifyContent: "center",
                                }}
                              >
                                <Button
                                  type="button"
                                  onClick={(event) => {
                                    axios
                                      .delete(
                                        `http://localhost:8080/api/product_attribute/${productAttribute.id}`
                                      )
                                      .then((response) => {
                                        setOpen(false);
                                      });
                                  }}
                                >
                                  Aceptar
                                </Button>
                                <SecondaryButton
                                  type="button"
                                  onClick={handleClose}
                                >
                                  Cancelar
                                </SecondaryButton>
                              </div>
                            </div>
                          </Card>
                        </Modal>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        {!associatedProducts && <h3>No tiene atributos asociados</h3>}
        {attribute && (
            <div>
              <div className={classes.title}>
                <h3>Asociar atributo al producto</h3>
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
                  <SecondaryButton onClick={(event) => {setAttribute(false)}}>Cancelar</SecondaryButton>
                    <SecondaryButton onClick={handleOpen}>Nuevo atributo</SecondaryButton>
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
                            <Button
                              type="button"
                              onClick={attributeSubmitHandler}
                            >
                              Registrar
                            </Button>
                          </div>
                        </form>
                      </Card>
                    </Modal>
                  </div>
                  <Button type="submit">Guardar</Button>
                </div>
              </form>
            </div>
          )}
        <div className={button.button_div_right}>
          {!attribute && (
            <SecondaryButton
              onClick={(event) => {
                setAttribute(true);
              }}
            >
              Agregar atributos
            </SecondaryButton>
          )}
          
          <Link to="/products">
            <Button>Volver</Button>
          </Link>
        </div>
      </Card>
    </Layout>
  );
}

export default ProductFormInfo;
