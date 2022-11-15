import React from "react";
import Button from "../Buttons/Button";
import axios from "axios";
import Layout from "../Layout/Layout";

import Card from "../Card/Card";
import classes from "../Filters/Filter.module.css";
import TextField from "@material-ui/core/TextField";
import style from "../Card/Card.module.css";

import { Link } from "react-router-dom";

import button from "../Buttons/Button.module.css";
import UsersCard from "../Card/UsersCard";

import { useEffect, useState, useRef } from "react";

function UserPage() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () =>  {
      axios.get("http://localhost:8080/api/personal_information/").then((response)=>{
        setUsers(response.data);
        setFilteredUsers(response.data);
        console.log(response.data);
      });};

    fetchUsers();
  }, []);

  const searchUserFirstNameRef = useRef();
  const searchUserLastNameRef = useRef();


  const [donors, setDonors] = useState();
  useEffect(() => {
    const fetchDonors = async () => {
      axios.get("http://localhost:8080/api/personal_information/donors_id").then((response)=>{
        setDonors(response.data);
      });
      
    };

    fetchDonors();
  }, []);

  const [filteredUsers, setFilteredUsers] = useState([]);
  const [appliedFilters, setAppliedFilters] = useState(false);

  const handleApplyFilters = () => {
    if (
      searchUserFirstNameRef.current.value.length > 0 ||
      searchUserLastNameRef.current.value.length > 0
      
    ) {
      let filter = users.filter(
        (user) =>
        user.firstName
            .toLowerCase()
            .includes(searchUserFirstNameRef.current.value.toLowerCase()) &&
          user.lastName
            .toLowerCase()
            .includes(searchUserLastNameRef.current.value.toLowerCase())
      );
      setFilteredUsers(filter);
      setAppliedFilters(true);
    } else {
      setFilteredUsers(users);
    }
  };

  const handleSearchReset = () => {
    searchUserFirstNameRef.current.value = "";
    searchUserLastNameRef.current.value = "";
    setFilteredUsers(users);
    setAppliedFilters(false);
  };


  return (
    <Layout title="Usuarios">
      <Card className={style.filter}>
      <form>
        <div className={classes.first_row}>
          <div>
            <label><b>Nombre</b></label>
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
            <label><b>Apellido</b></label>
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
        <Link to="/groups">
          <Button>Ver grupos</Button>
        </Link>
        <Link to="/donors">
          <Button>Ver donantes</Button>
        </Link>
        <Link to="/volunteers">
          <Button>Ver voluntarios</Button>
        </Link>
        <Link to="/users_option">
          <Button>+</Button>
        </Link>
      </div>
      {filteredUsers.map((user) => {
        return (
          <UsersCard
            key={user.id}
            id={user.id}
            firstName={user.firstName}
            lastName={user.lastName}
            phone={user.phone}
            email={user.email}
            donors={donors}
          ></UsersCard>
        );
      })}
    </Layout>
  );
}

export default UserPage;
