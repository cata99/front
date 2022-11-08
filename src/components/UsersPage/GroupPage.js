import React from "react";
import Button from "../Buttons/Button";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import button from "../Buttons/Button.module.css";
import { useEffect, useState, useRef } from "react";
import GroupCard from "../Card/GroupCard";
import axios from "axios";

import Card from "../Card/Card";
import classes from "../Filters/Filter.module.css";
import TextField from "@material-ui/core/TextField";
import style from "../Card/Card.module.css";
function GroupPage() {
  const [groups, setGroups] = useState([]);
  useEffect(() => {
    const fetchGroups = async () => {
      axios.get("http://localhost:8080/api/groups/").then((response) => {
        setGroups(response.data);
        setFilteredGroups(response.data);
        console.log(response.data);
      });
    };

    fetchGroups();
  }, []);

  const searchGroupLabelRef = useRef();
  const searchGroupInstitutionRef = useRef();

  const [filteredGroups, setFilteredGroups] = useState([]);
  const [appliedFilters, setAppliedFilters] = useState(false);

  const handleApplyFilters = () => {
    if (
      searchGroupLabelRef.current.value.length > 0 ||
      searchGroupInstitutionRef.current.value.length > 0
    ) {
      let filter = groups.filter(
        (group) =>
          group.label
            .toLowerCase()
            .includes(searchGroupLabelRef.current.value.toLowerCase()) &&
          group.institution.name
            .toLowerCase()
            .includes(searchGroupInstitutionRef.current.value.toLowerCase())
      );
      setFilteredGroups(filter);
      setAppliedFilters(true);
    } else {
      setFilteredGroups(groups);
    }
  };

  const handleSearchReset = () => {
    searchGroupLabelRef.current.value = "";
    searchGroupInstitutionRef.current.value = "";
    setFilteredGroups(groups);
    setAppliedFilters(false);
  };

  return (
    <Layout title="Groupos">
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
                placeholder="Filtre por nombre del grupo"
                inputRef={searchGroupLabelRef}
              />
            </div>
            <div>
              <label>Institución</label>
              <TextField
                id="text-field group"
                style={{ width: "35rem" }}
                variant="outlined"
                inputProps={{
                  style: { width: "35rem" },
                }}
                type="text"
                placeholder="Filtre por institucion"
                inputRef={searchGroupInstitutionRef}
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
        <Link to="/volunteers">
          <Button>Ver voluntarios</Button>
        </Link>
        <Link to="/group_form">
          <Button>+</Button>
        </Link>
      </div>
      {filteredGroups.reverse().map((group) => {
        return (
          <GroupCard
            key={group.id}
            id={group.id}
            name={group.label}
            institution={group.institution.name}
          ></GroupCard>
        );
      })}
    </Layout>
  );
}

export default GroupPage;
