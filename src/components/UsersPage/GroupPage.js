import React from "react";
import Button from "../Buttons/Button";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import button from "../Buttons/Button.module.css";
import { useEffect, useState } from "react";
import GroupCard from "../Card/GroupCard";
import axios from "axios";
function GroupPage() {

    const [groups, setGroups] = useState([]);
    useEffect(() => {
      const fetchGroups = async () =>{
        axios.get("http://localhost:8080/api/groups/").then((response)=>{
          setGroups(response.data);
        });};
  
      fetchGroups();
    }, []);
  
    return (
      <Layout title="Groupos">
        <div className={button.button_div_right}>
          <Link to="/donors">
            <Button>Ver donantes</Button>
          </Link>
          <Link to="/volunteers">
            <Button>Ver voluntarios</Button>
          </Link>
          <Link to="/group_form">
            <Button>+</Button>
          </Link>
        </div>
        {groups.reverse().map((group) => {
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