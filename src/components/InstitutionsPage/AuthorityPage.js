import React from "react";
import Button from "../Buttons/Button";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import button from "../Buttons/Button.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import AuthorityCard from "../Card/AuthorityCard";

function AuthorityPage() {
  const [authorities, setAuthorities] = useState([]);
  useEffect(() => {
    const fetchAuthorities = async () => {
      axios.get("http://localhost:8080/api/authorities/").then((response) => {
        setAuthorities(response.data);
      });
    };

    fetchAuthorities();
  }, []);
  return (
    <Layout title="Autoridad">
      <div className={button.button_div_right}>
        <Link to={`/add_authority/`}>
          <Button>Asociar a institucion</Button>
        </Link>
        <Link to="/institutions">
          <Button>Ver Comedores</Button>
        </Link>
        <Link to="/diseases">
          <Button>Ver enfermedades</Button>
        </Link>
        <Link to="/authority_form">
          <Button>+</Button>
        </Link>
      </div>
      {authorities.reverse().map((authority) => {
        return (
          <AuthorityCard
            key={authority.id}
            id={authority.id}
            label={authority.label}
            phone={authority.phone}
            location={authority.location}
          ></AuthorityCard>
        );
      })}
    </Layout>
  );
}

export default AuthorityPage;
