import React from "react";
import "./Menu.css";
import { Link } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { makeStyles } from "@material-ui/core/styles";

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
              <AccordionSummary>
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
              <AccordionSummary>
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
              <AccordionSummary>
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
      </ul>
    </nav>
  );
}

export default Menu;
