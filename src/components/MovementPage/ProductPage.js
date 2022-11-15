import React from "react";
import Button from "../Buttons/Button";
import ProductCard from "../Card/ProductCard";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import button from "../Buttons/Button.module.css";

import Card from "../Card/Card";
import classes from "../Filters/Filter.module.css";
import TextField from "@material-ui/core/TextField";
import style from "../Card/Card.module.css";

function ProductPage(props) {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      axios.get("http://localhost:8080/api/products/").then((response) => {
        setProduct(response.data);
        setFilteredProducts(response.data);
        console.log(response.data);
      });
    };

    fetchProduct();
  }, []);

  const searchProductLabelRef = useRef();
  const searchProductTypeLabelRef = useRef();

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [appliedFilters, setAppliedFilters] = useState(false);

  const handleApplyFilters = () => {
    if (
      searchProductLabelRef.current.value.length > 0 ||
      searchProductTypeLabelRef.current.value.length > 0
    ) {
      let filter = products.filter(
        (product) =>
          product.label
            .toLowerCase()
            .includes(searchProductLabelRef.current.value.toLowerCase()) &&
          product.productType.label
            .toLowerCase()
            .includes(searchProductTypeLabelRef.current.value.toLowerCase())
      );
      setFilteredProducts(filter);
      setAppliedFilters(true);
    } else {
      setFilteredProducts(products);
    }
  };

  const handleSearchReset = () => {
    searchProductLabelRef.current.value = "";
    searchProductTypeLabelRef.current.value = "";
    setFilteredProducts(products);
    setAppliedFilters(false);
  };

  return (
    <Layout title="Productos">
      <Card className={style.filter}>
        <form>
          <div className={classes.first_row}>
            <div>
              <label><b>Nombre</b></label>
              <TextField
                id="text-field group"
                style={{ width: "35rem" }}
                variant="outlined"
                inputProps={{
                  style: { width: "35rem" },
                }}
                type="text"
                placeholder="Filtre por nombre del product"
                inputRef={searchProductLabelRef}
              />
            </div>
            <div>
              <label><b>Tipo de producto</b></label>
              <TextField
                id="text-field group"
                style={{ width: "35rem" }}
                variant="outlined"
                inputProps={{
                  style: { width: "35rem" },
                }}
                type="text"
                placeholder="Filtre por tipo de producto"
                inputRef={searchProductTypeLabelRef}
              />
            </div>
          </div>

          <div className={button.button_div_right}>
            {appliedFilters && (
              <Button type="button" onClick={handleSearchReset}>
                Resetear Filtros
              </Button>
            )}
            {!appliedFilters && (
              <Button type="button" onClick={handleApplyFilters}>
                Aplicar Filtros
              </Button>
            )}
          </div>
        </form>
      </Card>
      <div className={button.button_div_right}>
        <Link to="/donations">
          <Button>Ver donaciones</Button>
        </Link>
        <Link to="/deliveries">
          <Button>Ver entregas</Button>
        </Link>
        <Link to="/movement_option">
          <Button>+</Button>
        </Link>
      </div>
      {filteredProducts.reverse().map((product) => {
        return (
          <ProductCard
            key={product.id}
            id={product.id}
            label={product.label}
            type={product.productType.label}
          ></ProductCard>
        );
      })}
    </Layout>
  );
}

export default ProductPage;
