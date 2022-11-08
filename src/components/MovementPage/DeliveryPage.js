import React from "react";
import MovementFilters from "../Filters/MovementFilter";
import Button from "../Buttons/Button";
import DeliveryCard from "../Card/DeliveryCard";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import button from "../Buttons/Button.module.css";

import Card from "../Card/Card";
import TextField from "@material-ui/core/TextField";
import style from "../Card/Card.module.css";
import classes from "../Filters/Filter.module.css";

function DeliveryPage() {
  const [movements, setMovements] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/deliveries/").then((response) => {
      setMovements(response.data);
      setFilteredMovements(response.data);
    });
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
      <Card className={style.filter}>
        <form>
          <div className={classes.first_row}>
            <div>
              <label>Nombre usuario</label>
              <TextField
                id="text-field group"
                style={{ width: "35rem" }}
                variant="outlined"
                inputProps={{
                  style: { width: "35rem" },
                }}
                type="text"
                inputRef={searchUserFirstNameRef}
                placeholder="Filtre por nombre del usuario"
              />
            </div>
            <div>
              <label>Apellido usuario</label>
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
              <label>Comedor</label>
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
        <Link to="/products">
          <Button>Ver productos</Button>
        </Link>
        <Link to="/donations">
          <Button>Ver donaciones</Button>
        </Link>
        <Link to="/movement_option">
          <Button>+</Button>
        </Link>
      </div>
      {filteredMovements.map((movement) => {
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
