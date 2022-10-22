import React from "react";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.row}>
        <div className={classes.title}>
          <h1>{props.title}</h1>
        </div>
        <div className={classes.session_button}>
          <ul className="navbar-nav">
            <li className="right-li">Cerrar Sesion</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
