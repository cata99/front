import React from "react";
import classes from "./Header.module.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
const Header = (props) => {
  return (
    <Box>
      <AppBar  style={{
      "background-color": "#2F665F",
      "line-height": "3rem",
     " padding-right": "180px",
      "color": "white",
      "font-size": "large", "boxShadow":"none"}} >
          <div className={classes.title}>
            <h1>{props.title}</h1>
          </div>
          <div className={classes.session_button}></div>
      
      </AppBar>
    </Box>
  );
};

export default Header;
