import InstitutionFilter from "../Filters/InstitutionFilter";
import Button from "../Buttons/Button";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import style from "../Card/Card.module.css";
import classes from "./Institution.module.css";
import button from "../Buttons/Button.module.css";
import React, { useEffect, useState } from "react";
import AuthorityCard from "../Card/AuthorityCard";

function AuthorityPage() {
  const [authorities, setAuthorities] = useState([]);
  useEffect(() => {
    const fetchAuthorities = async () => {
      let data = await fetch("http://localhost:8080/api/authorities/");
      data = await data.json();
      setAuthorities(data);
    };
    console.log(authorities);

    fetchAuthorities();
  }, []);
  return (
    <Layout title="Autoridad">
      <div className={button.button_div_right}>
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
      {authorities.map((authority) => {
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
