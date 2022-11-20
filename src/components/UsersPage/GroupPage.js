import React from "react";
import Button from "../Buttons/Button";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import button from "../Buttons/Button.module.css";
import { useEffect, useState, useRef } from "react";
import GroupCard from "../Card/GroupCard";
import axios from "axios";
import classes from "../Filters/Filter.module.css";
import TextField from "@material-ui/core/TextField";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SecondaryButton from "../Buttons/SecondaryButton";
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
          <b>Buscar grupo</b>
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
                  placeholder="Filtre por nombre del grupo"
                  inputRef={searchGroupLabelRef}
                />
              </div>
              <div>
                <label>
                  <b>Institución</b>
                </label>
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
        <Link to="/donors">
          <SecondaryButton>Ver donantes</SecondaryButton>
        </Link>
        <Link to="/volunteers">
          <SecondaryButton>Ver voluntarios</SecondaryButton>
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
