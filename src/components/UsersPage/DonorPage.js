import React from "react";
import Button from "../Buttons/Button";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import button from "../Buttons/Button.module.css";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import DonorsCard from "../Card/DonorsCard";

import Card from "../Card/Card";
import classes from "../Filters/Filter.module.css";
import TextField from "@material-ui/core/TextField";
import style from "../Card/Card.module.css";
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

  return (
    <Layout title="Donantes">
      <Card className={style.filter}>
        <form>
          <div className={classes.first_row}>
            <div>
              <label>Nombre</label>
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
              <label>Apellido</label>
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
        <Link to="/volunteers">
          <Button>Ver voluntarios</Button>
        </Link>
        <Link to="/groups">
          <Button>Ver grupos</Button>
        </Link>
        <Link to="/donor_form">
          <Button>+</Button>
        </Link>
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
