import React from "react";
import Button from "../Buttons/Button";
import ProductCard from "../Card/ProductCard";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import button from "../Buttons/Button.module.css";

function ProductPage(props) {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    const fetchMovement = async () => {
      axios.get("http://localhost:8080/api/products/").then((response) => {
        setProduct(response.data);
      });
    };

    fetchMovement();
  }, []);

  return (
    <Layout title="Productos">
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
      {products.reverse().map((product) => {
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
