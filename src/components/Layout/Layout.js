import React from "react";
import Header from "./Header";
import Menu from "./Menu";

function Layout(props) {
  return (
    <div style={{display:'flex',flexDirection:'column'}}>
      
        <Header title={props.title}></Header>
      
      <div style={{display:'flex',gap:'0px',minHeight:'100vh'}}>
        <Menu></Menu>
        <div style={{width:'90vw',padding:'7rem 20px',background:'#4EAB9E'}}>{props.children}</div>
      </div>
    </div>
  );
}

export default Layout;
