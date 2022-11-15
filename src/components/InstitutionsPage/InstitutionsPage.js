import React from "react";
import Card from "../Card/Card";
import classes from "../Filters/Filter.module.css";
import Button from "../Buttons/Button";
import TextField from "@material-ui/core/TextField";
import style from "../Card/Card.module.css";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import button from "../Buttons/Button.module.css";
import { useEffect, useState, useRef } from "react";
import InstitutionCard from "../Card/InstitutionCard";
import axios from "axios";

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
  return (
    <Layout title="Comedores">
      <Card className={style.filter}>
        <form>
          <div className={classes.first_row}>
            <div>
              <label><b>Comedor</b></label>
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
              <label><b>Ubicación</b></label>
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
              <Button type="button" onClick={handleSearchReset}>
                Resetear Filtros
              </Button>
            )}
            {!appliedFilters && (
              <Button type="button" onClick={handleApplyFilters}>
                Aplicar Filtros
              </Button>
            )}
          </div>
        </form>
      </Card>
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
      {filteredInstitution.map((institucion) => {
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
