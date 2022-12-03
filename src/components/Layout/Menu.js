import React from "react";
import "./Menu.css";
import { Link } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { makeStyles } from "@material-ui/core/styles";
import { useState, useEffect } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: { background: "#2F665F", color: "white", boxShadow: "none" },
  heading: {
    background: "#2F665F",
    color: "white",
    boxShadow: "none",
  },
  rectangle: {
    background: "#2F665F",
    color: "white",
    boxShadow: "none",
  },
}));

function Menu() {
  const classes = useStyles();
  const [adminRole, setAdminRole] = useState(false);

  useEffect(() => {
    const fetchRole = async () => {
      let role = sessionStorage.getItem("roles");
      if (role === "ROLE_ADMIN") setAdminRole(true);
    };

    fetchRole();
  }, []);
  return (
    <nav className="general_menu">
      <ul className="menu">
        <li>
          <Link
            to="/"
            style={{
              background: "#2F665F",
              color: "white",
              boxShadow: "none",
              paddingLeft: "1rem",
            }}
          >
            Home
          </Link>
        </li>
        <div className={classes.root}>
          <Accordion>
            <div className={classes.heading}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <li>Movimientos</li>
              </AccordionSummary>
            </div>
            <div className={classes.rectangle}>
              <AccordionDetails>
                <li>
                  <Link to="/donations">Donaciones</Link>
                </li>
                <li>
                  <Link to="/deliveries">Entregas</Link>
                </li>
                <li>
                  <Link to="/products">Productos</Link>
                </li>
              </AccordionDetails>
            </div>
          </Accordion>
        </div>
        <div className={classes.root}>
          <Accordion>
            <div className={classes.heading}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <li>Comedores</li>
              </AccordionSummary>
            </div>
            <div className={classes.rectangle}>
              <AccordionDetails>
                <li>
                  <Link to="/institutions">Comedores</Link>
                </li>
                <li>
                  <Link to="/authorities">Autoridades</Link>
                </li>
                <li>
                  <Link to="/diseases">Enfermedades</Link>
                </li>
              </AccordionDetails>
            </div>
          </Accordion>
        </div>{" "}
        <div className={classes.root}>
          <Accordion>
            <div className={classes.heading}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <li>Personas</li>
              </AccordionSummary>
            </div>
            <div className={classes.rectangle}>
              <AccordionDetails>
                <li>
                  <Link to="/volunteers">Voluntarios</Link>
                </li>
                <li>
                  <Link to="/donors">Donantes</Link>
                </li>
                <li>
                  <Link to="/groups">Grupos</Link>
                </li>
              </AccordionDetails>
            </div>
          </Accordion>
        </div>
        {adminRole && (
          <div className={classes.root}>
            <Accordion>
              <div className={classes.heading}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <li>Estadísticas</li>
                </AccordionSummary>
              </div>
              <div className={classes.rectangle}>
                <AccordionDetails>
                  <li>
                    <Link to="/donation_stadistics">Donaciones</Link>
                  </li>
                  <li>
                    <Link to="/delivery_stadistics">Entregas</Link>
                  </li>
                </AccordionDetails>
              </div>
            </Accordion>
          </div>
        )}
      </ul>
    </nav>
  );
}

export default Menu;
