import React from "react";
import InstitutionFilter from "../Filters/InstitutionFilter";
import Button from "../Buttons/Button";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import button from "../Buttons/Button.module.css";
import { useEffect, useState } from "react";
import InstitutionCard from "../Card/InstitutionCard";
import axios from "axios";

function InstitutionPage() {
  const [instituciones, setInstituciones] = useState([]);
  useEffect(() => {
    const fetchInts = async () => {
      axios.get("http://localhost:8080/api/institutions/").then((response)=>{
        setInstituciones(response.data);
      });};

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
      {instituciones.reverse().map((institucion) => {
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
