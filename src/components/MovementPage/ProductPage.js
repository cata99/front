import React from "react";
import Button from "../Buttons/Button";
import ProductCard from "../Card/ProductCard";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import button from "../Buttons/Button.module.css";
import classes from "../Filters/Filter.module.css";
import TextField from "@material-ui/core/TextField";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SecondaryButton from "../Buttons/SecondaryButton";

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
      <Accordion style={{ borderRadius: "10px", background: "azure" }}>
        <AccordionSummary
          aria-controls="panel1a-content"
          expandIcon={<ExpandMoreIcon />}
          style={{
            fontSize: "1.5rem",
            background: "azure",
            borderRadius: "10px",
          }}
        >
          <b>Buscar producto</b>
        </AccordionSummary>
        <AccordionDetails>
          <form>
            <div className={classes.first_row}>
              <div>
                <label>
                  <b>Nombre</b>
                </label>
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
                <label>
                  <b>Tipo de producto</b>
                </label>
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
                <div>
                  <SecondaryButton type="button" onClick={handleSearchReset}>
                    Resetear Filtros
                  </SecondaryButton>
                  <Button type="button" onClick={handleApplyFilters}>
                    Buscar
                  </Button>
                </div>
              )}
              {!appliedFilters && (
                <Button type="button" onClick={handleApplyFilters}>
                  Buscar
                </Button>
              )}
            </div>
          </form>
        </AccordionDetails>
      </Accordion>
      <div className={button.button_div_right}>
        <Link to="/donations">
          <SecondaryButton>Ver donaciones</SecondaryButton>
        </Link>
        <Link to="/deliveries">
          <SecondaryButton>Ver entregas</SecondaryButton>
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
