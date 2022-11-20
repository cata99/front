import React from "react";
import Button from "../Buttons/Button";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import button from "../Buttons/Button.module.css";
import { useEffect, useState, useRef } from "react";
import DiseaseCard from "../Card/DiseaseCard";
import axios from "axios";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import classes from "../Filters/Filter.module.css";
import TextField from "@material-ui/core/TextField";
import SecondaryButton from "../Buttons/SecondaryButton";

function DiseasePage() {
  const [diseases, setDiseases] = useState([]);
  useEffect(() => {
    const fetchDiseases = async () => {
      axios.get("http://localhost:8080/api/diseases/").then((response) => {
        setDiseases(response.data);
        setFilteredDiseases(response.data);
      });
    };

    fetchDiseases();
  }, []);

  const searchDiseaseLabelRef = useRef();

  const [filteredDiseases, setFilteredDiseases] = useState([]);
  const [appliedFilters, setAppliedFilters] = useState(false);

  const handleApplyFilters = () => {
    if (searchDiseaseLabelRef.current.value.length > 0) {
      let filter = diseases.filter((disease) =>
        disease.label
          .toLowerCase()
          .includes(searchDiseaseLabelRef.current.value.toLowerCase())
      );
      setFilteredDiseases(filter);
      setAppliedFilters(true);
    } else {
      setFilteredDiseases(diseases);
    }
  };

  const handleSearchReset = () => {
    searchDiseaseLabelRef.current.value = "";
    setFilteredDiseases(diseases);
    setAppliedFilters(false);
  };
  return (
    <Layout title="Enfermedades">
      <div>
        <Accordion
          style={{ borderRadius: "10px", background: "azure" }}
        >
          <AccordionSummary
            aria-controls="panel1a-content"
            expandIcon={<ExpandMoreIcon />}
            style={{
              fontSize: "1.5rem",
              background: "azure",
              borderRadius: "10px",
            }}
          >
            <b>Buscar enfermedades</b>
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
                    placeholder="Filtre por nombre de la enfermedad"
                    inputRef={searchDiseaseLabelRef}
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
      </div>
      <div className={button.button_div_right}>
        <Link to="/institutions">
          <SecondaryButton>Ver comedores</SecondaryButton>
        </Link>
        <Link to="/authorities">
          <SecondaryButton>Ver autoridades</SecondaryButton>
        </Link>
        <Link to="/disease_form">
          <Button>+</Button>
        </Link>
      </div>
      {filteredDiseases.reverse().map((disease) => {
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
