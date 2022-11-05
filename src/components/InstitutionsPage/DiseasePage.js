import React from "react";
import Button from "../Buttons/Button";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import button from "../Buttons/Button.module.css";
import { useEffect, useState } from "react";
import DiseaseCard from "../Card/DiseaseCard";
import axios from "axios";

function DiseasePage() {
  const [diseases, setDiseases] = useState([]);
  useEffect(() => {
    const fetchDiseases = async () => {
      axios.get("http://localhost:8080/api/diseases/").then((response) => {
        setDiseases(response.data);
      });
    };

    fetchDiseases();
  }, []);
  return (
    <Layout title="Enfermedades">
      <div className={button.button_div_right}>
        <Link to="/institutions">
          <Button>Ver comedores</Button>
        </Link>
        <Link to="/authorities">
          <Button>Ver autoridades</Button>
        </Link>
        <Link to="/disease_form">
          <Button>+</Button>
        </Link>
      </div>
      {diseases.reverse().map((disease) => {
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
