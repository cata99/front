import React from "react";
import Button from "../Buttons/Button";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import axios from "axios";
import button from "../Buttons/Button.module.css";
import { useEffect, useState, useRef } from "react";
import VolunteersCard from "../Card/VolunteersCard";

import Card from "../Card/Card";
import classes from "../Filters/Filter.module.css";
import TextField from "@material-ui/core/TextField";
import style from "../Card/Card.module.css";
function VolunteerPage() {
  const [volunteers, setVolunteers] = useState([]);
  useEffect(() => {
    const fetchVolunteers = async () => {
      axios.get("http://localhost:8080/api/users/").then((response) => {
        setVolunteers(response.data);
        setFilteredVolunteers(response.data);
        console.log(response.data);
      });
    };

    fetchVolunteers();
  }, []);

  const searchUserFirstNameRef = useRef();
  const searchUserLastNameRef = useRef();
  const searchUserUserName = useRef();
  const searchUserGroup = useRef();

  const [filteredVolunteers, setFilteredVolunteers] = useState([]);
  const [appliedFilters, setAppliedFilters] = useState(false);

  const handleApplyFilters = () => {
    if (
      searchUserFirstNameRef.current.value.length > 0 ||
      searchUserLastNameRef.current.value.length > 0 ||
      searchUserUserName.current.value.length > 0 ||
      searchUserGroup.current.value.length > 0
    ) {
      let filter = volunteers.filter(
        (volunteer) =>
          volunteer.personalInformation.firstName
            .toLowerCase()
            .includes(searchUserFirstNameRef.current.value.toLowerCase()) &&
          volunteer.personalInformation.firstName
            .toLowerCase()
            .includes(searchUserLastNameRef.current.value.toLowerCase()) &&
          volunteer.username
            .toLowerCase()
            .includes(searchUserUserName.current.value.toLowerCase()) &&
          volunteer.group.label
            .toLowerCase()
            .includes(searchUserGroup.current.value.toLowerCase()) 
      );
      setFilteredVolunteers(filter);
      setAppliedFilters(true);
    } else {
      setFilteredVolunteers(volunteers);
    }
  };

  const handleSearchReset = () => {
    searchUserFirstNameRef.current.value = "";
    searchUserLastNameRef.current.value = "";
    searchUserUserName.current.value = "";
    searchUserGroup.current.value = "";
    setFilteredVolunteers(volunteers);
    setAppliedFilters(false);
  };

  return (
    <Layout title="Voluntarios">
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
          <div className={classes.second_row}>
            <div>
              <label>Usuario</label>
              <TextField
                id="text-field group"
                style={{ width: "35rem" }}
                variant="outlined"
                inputProps={{
                  style: { width: "35rem" },
                }}
                type="text"
                placeholder="Filtre por usuario"
                inputRef={searchUserUserName}
              />
            </div>
            <div>
              <label>Grupo</label>
              <TextField
                id="text-field group"
                style={{ width: "35rem" }}
                variant="outlined"
                inputProps={{
                  style: { width: "35rem" },
                }}
                type="text"
                placeholder="Filtre por grupo"
                inputRef={searchUserGroup}
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
        <Link to="/donors">
          <Button>Ver donantes</Button>
        </Link>
        <Link to="/groups">
          <Button>Ver grupos</Button>
        </Link>
        <Link to="/volunteer_form">
          <Button>+</Button>
        </Link>
      </div>
      {filteredVolunteers.map((volunteer) => {
        return (
          <VolunteersCard
            key={volunteer.id}
            id={volunteer.id}
            firstName={volunteer.personalInformation.firstName}
            lastName={volunteer.personalInformation.lastName}
            phone={volunteer.personalInformation.phone}
            email={volunteer.personalInformation.email}
          ></VolunteersCard>
        );
      })}
    </Layout>
  );
}

export default VolunteerPage;
