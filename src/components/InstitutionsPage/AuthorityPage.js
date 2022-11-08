import React from "react";
import Button from "../Buttons/Button";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import button from "../Buttons/Button.module.css";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import AuthorityCard from "../Card/AuthorityCard";


import Card from "../Card/Card";
import classes from "../Filters/Filter.module.css";
import TextField from "@material-ui/core/TextField";
import style from "../Card/Card.module.css";

function AuthorityPage() {
  const [authorities, setAuthorities] = useState([]);
  useEffect(() => {
    const fetchAuthorities = async () => {
      axios.get("http://localhost:8080/api/authorities/").then((response) => {
        setAuthorities(response.data);
        setFilteredAuthorities(response.data);
        console.log(response.data);
      });
    };

    fetchAuthorities();
  }, []);

  
  const searchAuthorityLabelRef = useRef();
  const searchAuthorityLocationRef = useRef();

  const [filteredAuthorities, setFilteredAuthorities] = useState([]);
  const [appliedFilters, setAppliedFilters] = useState(false);

  const handleApplyFilters = () => {
    if (
      searchAuthorityLabelRef.current.value.length > 0 ||
      searchAuthorityLocationRef.current.value.length > 0
    ) {
      let filter = authorities.filter(
        (authority) =>
        authority.label
          .toLowerCase()
          .includes(searchAuthorityLabelRef.current.value.toLowerCase()) &&
        authority.location
          .toLowerCase()
          .includes(searchAuthorityLocationRef.current.value.toLowerCase())
      );
      setFilteredAuthorities(filter);
      setAppliedFilters(true);
    } else {
      setFilteredAuthorities(authorities);
    }
  };

  const handleSearchReset = () => {
    searchAuthorityLabelRef.current.value = "";
    searchAuthorityLocationRef.current.value = "";
    setFilteredAuthorities(authorities);
    setAppliedFilters(false);
  };
  return (
    <Layout title="Autoridad">
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
                placeholder="Filtre por nombre de la autoridad"
                inputRef={searchAuthorityLabelRef}
              />
            </div>
            <div>
              <label>Ubicación</label>
              <TextField
                id="text-field group"
                style={{ width: "35rem" }}
                variant="outlined"
                inputProps={{
                  style: { width: "35rem" },
                }}
                type="text"
                placeholder="Filtre por ubicación de la autoridad"
                inputRef={searchAuthorityLocationRef}
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
        <Link to="/institutions">
          <Button>Ver Comedores</Button>
        </Link>
        <Link to="/diseases">
          <Button>Ver enfermedades</Button>
        </Link>
        <Link to="/authority_form">
          <Button>+</Button>
        </Link>
      </div>
      {filteredAuthorities.reverse().map((authority) => {
        return (
          <AuthorityCard
            key={authority.id}
            id={authority.id}
            label={authority.label}
            phone={authority.phone}
            location={authority.location}
          ></AuthorityCard>
        );
      })}
    </Layout>
  );
}

export default AuthorityPage;
