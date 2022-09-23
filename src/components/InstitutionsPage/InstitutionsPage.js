import InstitutionFilter from "../Filters/InstitutionFilter";
import Button from "../Buttons/Button";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import style from "../Card/Card.module.css";
import classes from "./Institution.module.css";
import button from "../Buttons/Button.module.css";
import React, { useEffect, useState } from "react";
import InstitutionCard from "../Card/InstitutionCard";

function InstitutionPage() {
  const [instituciones, setInstituciones] = useState([]);
  useEffect(() => {
    const fetchInts = async () => {
      let data = await fetch("http://localhost:8080/api/institutions/");
      data = await data.json();
      setInstituciones(data);
    };
    console.log(instituciones);

    fetchInts();
  }, []);
  return (
    <Layout title="Comedores">
      <InstitutionFilter></InstitutionFilter>
      <div className={button.button_div_right}>
      <Link to="/diseases">
          <Button>Ver enfermedades</Button>
        </Link>
      <Link to="/authorities">
          <Button>Ver autoridades</Button>
        </Link>
        <Link to="/institution_option">
          <Button>+</Button>
        </Link>
      </div>
      {instituciones.map((institucion) => {
        return (
          <InstitutionCard
            key={institucion.id}
            id={institucion.id}
            name={institucion.name}
            phone={institucion.phone}
            location={institucion.location}
          ></InstitutionCard>
        );
      })}
    </Layout>
  );
}

export default InstitutionPage;
