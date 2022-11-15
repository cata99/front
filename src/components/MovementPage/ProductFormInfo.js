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


function ProductFormInfo() {
  const { id } = useParams();

  const [product, setProduct] = useState("");

  const [type, setType] = useState([]);


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

 

  return (
    <Layout title="Producto">
      <Card className={style.filter}>
        <div className={classes.title}>
          <Title>Informacion producto</Title>
        </div>
        <form>
          <div>
            <label>Producto</label>
            <TextField
              id="text-field group"
              style={{ width: "35rem" }}
              disabled
              variant="outlined"
              inputProps={{
                style: { width: "35rem" },
              }}
              type="text"
              value={product}
            />
          </div>
          <div className={classes.add_type}>
            <div>
              <label>Tipo Producto</label>
              <TextField
                id="text-field group"
                style={{ width: "35rem" }}
                disabled
                variant="outlined"
                inputProps={{
                  style: { width: "35rem" },
                }}
                type="text"
                value={type}
              />
            </div>
          </div>
          {associatedProducts && (
              <div>
                <h4>Atributos asociados</h4>
                <ul>
                  {productsAttributes.map((productAttribute) => {
                    return (
                      <li>{console.log(productAttribute)}
                        <form ><div className={classes.row}><div className={classes.institution_card}>Atributo: {productAttribute.attribute.field} - {productAttribute.value} -  {productAttribute.attribute.unit}</div><div className={classes.right}> <Button type="button" onClick={(event) => {
                          axios
                          .delete(`http://localhost:8080/api/product_attribute/${productAttribute.id}`).then((response)=> {console.log(response.data)})
                        }} >Borrar atributo</Button></div></div></form>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
            {!associatedProducts && <h3>No tiene atributos asociados</h3>}
          <div className={button.button_div_right}>
            <Link to="/products">
              <Button>Volver</Button>
            </Link>
          </div>
        </form>
      </Card>
    </Layout>
  );
}

export default ProductFormInfo;
