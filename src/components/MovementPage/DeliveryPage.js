import React from "react";
import Button from "../Buttons/Button";
import DeliveryCard from "../Card/DeliveryCard";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import button from "../Buttons/Button.module.css";
import TextField from "@material-ui/core/TextField";
import classes from "../Filters/Filter.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SecondaryButton from "../Buttons/SecondaryButton";

function DeliveryPage() {
  const [movements, setMovements] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/deliveries/").then((response) => {
      setMovements(response.data);
      setFilteredMovements(response.data);
    });
  }, []);

  
  const [adminRole, setAdminRole] = useState(false);

  useEffect(() => {
    const fetchRole = async () => {
      let role = sessionStorage.getItem("roles");
      if (role === "ROLE_ADMIN") setAdminRole(true);
    };

    fetchRole();
  }, []);

  const searchInstitutionRef = useRef();
  const searchUserFirstNameRef = useRef();
  const searchUserLastNameRef = useRef();
  const [filteredMovements, setFilteredMovements] = useState([]);
  const [appliedFilters, setAppliedFilters] = useState(false);

  const handleApplyFilters = () => {
    if (
      searchInstitutionRef.current.value.length > 0 ||
      searchUserFirstNameRef.current.value.length > 0 ||
      searchUserLastNameRef.current.value.length > 0
    ) {
      let filter = movements.filter(
        (movement) =>
          movement.institution.name
            .toLowerCase()
            .includes(searchInstitutionRef.current.value.toLowerCase()) &&
          movement.user.personalInformation.firstName
            .toLowerCase()
            .includes(searchUserFirstNameRef.current.value.toLowerCase()) &&
          movement.user.personalInformation.lastName
            .toLowerCase()
            .includes(searchUserLastNameRef.current.value.toLowerCase())
      );
      setFilteredMovements(filter);

      setAppliedFilters(true);
      console.log(filteredMovements);
    } else {
      setFilteredMovements(movements);
    }
  };

  const handleSearchReset = () => {
    searchUserFirstNameRef.current.value = "";
    searchUserLastNameRef.current.value = "";
    searchInstitutionRef.current.value = "";
    setFilteredMovements(movements);
    setAppliedFilters(false);
  };

  return (
    <Layout title="Entregas">
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
          <b>Buscar entrega</b>
        </AccordionSummary>

        <AccordionDetails>
          <form>
            <div className={classes.first_row}>
              <div>
                <label>
                  <b>Nombre voluntario</b>
                </label>
                <TextField
                  id="text-field group"
                  style={{ width: "35rem" }}
                  variant="outlined"
                  inputProps={{
                    style: { width: "35rem" },
                  }}
                  type="text"
                  inputRef={searchUserFirstNameRef}
                  placeholder="Filtre por nombre del voluntario que registro la entrega"
                />
              </div>
              <div>
                <label>
                  <b>Apellido voluntario</b>
                </label>
                <TextField
                  id="text-field group"
                  style={{ width: "35rem" }}
                  variant="outlined"
                  inputProps={{
                    style: { width: "35rem" },
                  }}
                  type="text"
                  placeholder="Filtre por apellido del voluntario que registro la entrega"
                  inputRef={searchUserLastNameRef}
                />
              </div>
            </div>
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
        <Link to="/products">
          <SecondaryButton>Ver productos</SecondaryButton>
        </Link>
        <Link to="/donations">
          <SecondaryButton>Ver donaciones</SecondaryButton>
        </Link>
       {adminRole && <Link to="/delivery_form">
          <Button>+</Button>
        </Link>}
      </div>
      {filteredMovements.reverse().map((movement) => {
        return (
          <DeliveryCard
            key={movement.id}
            id={movement.id}
            institution={movement.institution.name}
            user={
              movement.user.personalInformation.firstName +
              " , " +
              movement.user.personalInformation.lastName
            }
          ></DeliveryCard>
        );
      })}
    </Layout>
  );
}

export default DeliveryPage;
