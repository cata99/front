import React from "react";
import './Menu.css';
import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav className="general_menu">
    
      <ul  className="menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
         <Link to="/donations">Movimientos</Link>
        </li>
        <li>
          <Link to="/institutions">Instituciones</Link>
        </li>
        <li>
          <Link to="/users">Personas</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
