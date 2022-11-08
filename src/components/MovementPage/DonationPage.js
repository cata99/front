import React from "react";
import Button from "../Buttons/Button";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import button from "../Buttons/Button.module.css";
import DonationCard from "../Card/DonationCard";
import Card from "../Card/Card";
import TextField from "@material-ui/core/TextField";
import style from "../Card/Card.module.css";
import classes from "../Filters/Filter.module.css";

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
              <label>Nombre donante</label>
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
              <label>Apellido donante</label>
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
        <Link to="/deliveries">
          <Button>Ver entregas</Button>
        </Link>
        <Link to="/movement_option">
          <Button>+</Button>
        </Link>
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
