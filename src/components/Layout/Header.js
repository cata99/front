import React from "react";
import classes from "./Header.module.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { useContext } from "react";
import AuthContext from "../Store/auth-context";


const Header = (props) => {
  
  const authCtx = useContext(AuthContext);

  
  const  LogoutHandler= (event) => {

    event.preventDefault();
    authCtx.onLogout();
  
  };


  return (
    <Box>
      <AppBar
        style={{
          "backgroundColor": "#2F665F",
          "lineHeight": "3rem",
          " paddingRight": "180px",
          color: "white",
          "fontSize": "large",
          boxShadow: "none",
        }}
      >
        <div className={classes.title}>
          <h1>{props.title}</h1>{" "}
          <div className={classes.session_button}>
            <h5 onClick={LogoutHandler}>Cerrar sesión</h5>
          </div>
        </div>
      </AppBar>
    </Box>
  );
};

export default Header;
