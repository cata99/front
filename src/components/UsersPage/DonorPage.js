import React from "react";
import Button from "../Buttons/Button";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import button from "../Buttons/Button.module.css";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import DonorsCard from "../Card/DonorsCard";
import classes from "../Filters/Filter.module.css";
import TextField from "@material-ui/core/TextField";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SecondaryButton from "../Buttons/SecondaryButton";
function DonorPage() {
  const [donors, setDonors] = useState([]);
  useEffect(() => {
    const fetchDonors = async () => {
      axios
        .get("http://localhost:8080/api/personal_information/donors")
        .then((response) => {
          setDonors(response.data);
          setFilteredDonors(response.data);
        });
    };

    fetchDonors();
  }, []);

  const searchUserFirstNameRef = useRef();
  const searchUserLastNameRef = useRef();

  const [filteredDonors, setFilteredDonors] = useState([]);
  const [appliedFilters, setAppliedFilters] = useState(false);

  const handleApplyFilters = () => {
    if (
      searchUserFirstNameRef.current.value.length > 0 ||
      searchUserLastNameRef.current.value.length > 0
    ) {
      let filter = donors.filter(
        (donor) =>
          donor.firstName
            .toLowerCase()
            .includes(searchUserFirstNameRef.current.value.toLowerCase()) &&
          donor.lastName
            .toLowerCase()
            .includes(searchUserLastNameRef.current.value.toLowerCase())
      );
      setFilteredDonors(filter);
      setAppliedFilters(true);
    } else {
      setFilteredDonors(donors);
    }
  };

  const handleSearchReset = () => {
    searchUserFirstNameRef.current.value = "";
    searchUserLastNameRef.current.value = "";
    setFilteredDonors(donors);
    setAppliedFilters(false);
  };

  const [adminRole, setAdminRole] = useState(false);
  const [referentRole, setReferentRole] = useState(false);

  useEffect(() => {
    const fetchRole = async () => {
      let role = sessionStorage.getItem("roles");
      if (role === "ROLE_ADMIN") setAdminRole(true);
      if (role === "ROLE_REFERENTE") setReferentRole(true);
    };

    fetchRole();
  }, []);

  return (
    <Layout title="Donantes">
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
          <b>Buscar donantes</b>
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
                  placeholder="Filtre por nombre"
                  inputRef={searchUserFirstNameRef}
                />
              </div>
              <div>
                <label>
                  <b>Apellido</b>
                </label>
                <TextField
                  id="text-field group"
                  style={{ width: "35rem" }}
                  variant="outlined"
                  inputProps={{
                    style: { width: "35rem" },
                  }}
                  type="text"
                  placeholder="Filtre por apellido"
                  inputRef={searchUserLastNameRef}
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
        <Link to="/volunteers">
          <SecondaryButton>Ver voluntarios</SecondaryButton>
        </Link>
        <Link to="/groups">
          <SecondaryButton>Ver grupos</SecondaryButton>
        </Link>
        {adminRole && (
          <Link to="/donor_form">
            <Button>+</Button>
          </Link>
        )}
        {referentRole && (
          <Link to="/donor_form">
            <Button>+</Button>
          </Link>
        )}
      </div>
      {filteredDonors.reverse().map((donor) => {
        return (
          <DonorsCard
            key={donor.id}
            id={donor.id}
            firstName={donor.firstName}
            lastName={donor.lastName}
            phone={donor.phone}
            email={donor.email}
          ></DonorsCard>
        );
      })}
    </Layout>
  );
}

export default DonorPage;
