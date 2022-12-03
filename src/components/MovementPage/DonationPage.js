import React from "react";
import Button from "../Buttons/Button";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import button from "../Buttons/Button.module.css";
import DonationCard from "../Card/DonationCard";
import TextField from "@material-ui/core/TextField";
import classes from "../Filters/Filter.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SecondaryButton from "../Buttons/SecondaryButton";

function DonationPage() {
  const [movements, setMovements] = useState([]);
  useEffect(() => {
    const fetchMovement = async () => {
      axios.get("http://localhost:8080/api/donations/").then((response) => {
        setMovements(response.data);
        setFilteredMovements(response.data);
        console.log(response.data);
      });
    };

    fetchMovement();
  }, []);

  const searchInstitutionRef = useRef();
  const searchUserFirstNameRef = useRef();
  const searchUserLastNameRef = useRef();
  const searchDonorFirstNameRef = useRef();
  const searchDonorLastNameRef = useRef();
  const [filteredMovements, setFilteredMovements] = useState([]);
  const [appliedFilters, setAppliedFilters] = useState(false);

  const handleApplyFilters = () => {
    console.log(movements);
    if (
      searchInstitutionRef.current.value.length > 0 ||
      searchDonorFirstNameRef.current.value.length > 0 ||
      searchDonorLastNameRef.current.value.length > 0 ||
      searchUserFirstNameRef.current.value.length > 0 ||
      searchUserLastNameRef.current.value.length > 0
    ) {
      let filter = movements.filter(
        (movement) =>
          movement.institution.name
            .toLowerCase()
            .includes(searchInstitutionRef.current.value.toLowerCase()) &&
          movement.personalInformation.firstName
            .toLowerCase()
            .includes(searchDonorFirstNameRef.current.value.toLowerCase()) &&
          movement.personalInformation.lastName
            .toLowerCase()
            .includes(searchDonorLastNameRef.current.value.toLowerCase()) &&
          movement.user.personalInformation.firstName
            .toLowerCase()
            .includes(searchUserFirstNameRef.current.value.toLowerCase()) &&
          movement.user.personalInformation.lastName
            .toLowerCase()
            .includes(searchUserLastNameRef.current.value.toLowerCase())
      );
      setFilteredMovements(filter);
      setAppliedFilters(true);
    } else {
      setFilteredMovements(movements);
    }
  };

  const [adminRole, setAdminRole] = useState(false);

  useEffect(() => {
    const fetchRole = async () => {
      let role = sessionStorage.getItem("roles");
      if (role === "ROLE_ADMIN") setAdminRole(true);
    };

    fetchRole();
  }, []);

  const handleSearchReset = () => {
    searchDonorFirstNameRef.current.value = "";
    searchDonorLastNameRef.current.value = "";
    searchUserFirstNameRef.current.value = "";
    searchUserLastNameRef.current.value = "";
    searchInstitutionRef.current.value = "";
    setFilteredMovements(movements);
    setAppliedFilters(false);
  };

  return (
    <Layout title="Donaciones">
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
          <b>Buscar donación</b>
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
                  placeholder="Filtre por nombre del voluntario"
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
                  placeholder="Filtre por apellido del usuario"
                  inputRef={searchUserLastNameRef}
                />
              </div>
            </div>
            <div className={classes.first_row}>
              <div>
                <label>
                  <b>Nombre donante</b>
                </label>
                <TextField
                  id="text-field group"
                  style={{ width: "35rem" }}
                  variant="outlined"
                  inputProps={{
                    style: { width: "35rem" },
                  }}
                  type="text"
                  inputRef={searchDonorFirstNameRef}
                  placeholder="Filtre por nombre del donante"
                />
              </div>
              <div>
                <label>
                  <b>Apellido donante</b>
                </label>
                <TextField
                  id="text-field group"
                  style={{ width: "35rem" }}
                  variant="outlined"
                  inputProps={{
                    style: { width: "35rem" },
                  }}
                  type="text"
                  placeholder="Filtre por apellido del donante"
                  inputRef={searchDonorLastNameRef}
                />
              </div>
            </div>
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
        <Link to="/deliveries">
          <SecondaryButton>Ver entregas</SecondaryButton>
        </Link>
        {adminRole && (
          <Link to="/donation_form">
            <Button>+</Button>
          </Link>
        )}
      </div>
      {filteredMovements.reverse().map((movement) => {
        return (
          <DonationCard
            key={movement.id}
            id={movement.id}
            institution={movement.institution.name}
            user={
              movement.user.personalInformation.firstName +
              " , " +
              movement.user.personalInformation.lastName
            }
            donor={
              movement.personalInformation.firstName +
              " , " +
              movement.personalInformation.lastName
            }
          ></DonationCard>
        );
      })}
    </Layout>
  );
}

export default DonationPage;
