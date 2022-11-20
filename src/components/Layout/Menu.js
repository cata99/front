import React from "react";
import "./Menu.css";
import { Link } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

function Menu() {
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
              paddingLeft: "1rem"
            }}
          >
            Home
          </Link>
        </li>
        <Accordion>
          <AccordionSummary
            style={{ background: "#2F665F", color: "white", boxShadow: "none" }}
          >
            <li>Movimientos</li>
          </AccordionSummary>
          <AccordionDetails
            style={{ background: "#2F665F", color: "white", boxShadow: "none" }}
          >
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
        </Accordion>

        <Accordion
          style={{ background: "#2F665F", color: "white", boxShadow: "none" }}
        >
          <AccordionSummary
            style={{ background: "#2F665F", color: "white", boxShadow: "none" }}
          >
            <li>Comedores</li>
          </AccordionSummary>
          <AccordionDetails
            style={{ background: "#2F665F", color: "white", boxShadow: "none" }}
          >
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
        </Accordion>
        <Accordion
          style={{ background: "#2F665F", color: "white", boxShadow: "none" }}
        >
          <AccordionSummary
            style={{ background: "#2F665F", color: "white", boxShadow: "none" }}
          >
            <li>Personas</li>
          </AccordionSummary>
          <AccordionDetails
            style={{ background: "#2F665F", color: "white", boxShadow: "none" }}
          >
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
        </Accordion>
      </ul>
    </nav>
  );
}

export default Menu;
