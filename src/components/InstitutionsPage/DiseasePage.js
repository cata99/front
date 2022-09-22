import InstitutionFilter from "../Filters/InstitutionFilter";
import Button from "../Buttons/Button";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import style from "../Card/Card.module.css";
import classes from "./Institution.module.css";
import button from "../Buttons/Button.module.css";
import React, { useEffect, useState } from "react";
import DiseaseCard from "../Card/DiseaseCard";

function DiseasePage() {
  const [diseases, setDiseases] = useState([]);
  useEffect(() => {
    const fetchDiseases = async () => {
      let data = await fetch("http://localhost:8080/api/diseases/");
      data = await data.json();
      setDiseases(data);
    };
    console.log(diseases);

    fetchDiseases();
  }, []);
  return (
    <Layout>
      <div className={button.button_div_right}>
        <Link to="/disease_form">
          <Button>+</Button>
        </Link>
      </div>
      {diseases.map((disease) => {
        return (
          <DiseaseCard
            key={disease.id}
            id={disease.id}
            label={disease.label}
          ></DiseaseCard>
        );
      })}
    </Layout>
  );
}

export default DiseasePage;
