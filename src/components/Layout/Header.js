import React from "react";
import classes from "./Header.module.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Profile from "./Profile";


const Header = (props) => {


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
          <h1>{props.title}</h1>
          <div className={classes.session_button}>
            <Profile></Profile>
          </div>
        </div>
      </AppBar>
    </Box>
  );
};

export default Header;
