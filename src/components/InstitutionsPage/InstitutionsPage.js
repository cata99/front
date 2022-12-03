import React from "react";
import classes from "../Filters/Filter.module.css";
import Button from "../Buttons/Button";
import TextField from "@material-ui/core/TextField";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import button from "../Buttons/Button.module.css";
import { useEffect, useState, useRef } from "react";
import InstitutionCard from "../Card/InstitutionCard";
import axios from "axios";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SecondaryButton from "../Buttons/SecondaryButton";

function InstitutionPage() {
  const [instituciones, setInstituciones] = useState([]);
  useEffect(() => {
    const fetchInts = async () => {
      axios.get("http://localhost:8080/api/institutions/").then((response) => {
        setInstituciones(response.data);
        setFilteredInstitution(response.data);
      });
    };

    fetchInts();
  }, []);

  const searchInstitutionRef = useRef();
  const searchLocationRef = useRef();
  const [filteredInstitution, setFilteredInstitution] = useState([]);
  const [appliedFilters, setAppliedFilters] = useState(false);

  const handleApplyFilters = () => {
    if (
      searchInstitutionRef.current.value.length > 0 ||
      searchLocationRef.current.value.length > 0
    ) {
      let filter = instituciones.filter(
        (institucion) =>
          institucion.name
            .toLowerCase()
            .includes(searchInstitutionRef.current.value.toLowerCase()) &&
          institucion.location
            .toLowerCase()
            .includes(searchLocationRef.current.value.toLowerCase())
      );
      setFilteredInstitution(filter);
      setAppliedFilters(true);
    } else {
      setFilteredInstitution(instituciones);
    }
  };

  const handleSearchReset = () => {
    searchLocationRef.current.value = "";
    searchInstitutionRef.current.value = "";
    setFilteredInstitution(instituciones);
    setAppliedFilters(false);
  };

  const [adminRole, setAdminRole] = useState(false);

  useEffect(() => {
    const fetchRole = async () => {
      let role = sessionStorage.getItem("roles");
      if (role === "ROLE_ADMIN") setAdminRole(true);
    };

    fetchRole();
  }, []);
  return (
    <Layout title="Comedores">
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
          <b> Buscar comedores</b>
        </AccordionSummary>
        <AccordionDetails>
          <form>
            <div className={classes.first_row}>
              <div>
                <label>
                  <b>Comedor</b>
                </label>
                <TextField
                  id="text-field group"
                  style={{ width: "35rem" }}
                  variant="outlined"
                  inputProps={{
                    style: { width: "35rem" },
                  }}
                  type="text"
                  inputRef={searchInstitutionRef}
                  placeholder="Filtre por institución"
                />
              </div>
              <div>
                <label>
                  <b>Ubicación</b>
                </label>
                <TextField
                  id="text-field group"
                  style={{ width: "35rem" }}
                  variant="outlined"
                  inputProps={{
                    style: { width: "35rem" },
                  }}
                  type="text"
                  placeholder="Filtre por ubicación"
                  inputRef={searchLocationRef}
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
        <Link to="/diseases">
          <SecondaryButton>Ver enfermedades</SecondaryButton>
        </Link>
        <Link to="/authorities">
          <SecondaryButton>Ver autoridades</SecondaryButton>
        </Link>
        {adminRole && (
          <Link to="/institution_form">
            <Button>+</Button>
          </Link>
        )}
      </div>
      {filteredInstitution.reverse().map((institucion) => {
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
