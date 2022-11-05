import React from "react";
import UserFilter from "../Filters/UserFilter";
import Button from "../Buttons/Button";
import axios from "axios";
import Layout from "../Layout/Layout";

import { Link } from "react-router-dom";

import button from "../Buttons/Button.module.css";
import UsersCard from "../Card/UsersCard";

import { useEffect, useState } from "react";

function UserPage() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () =>  {
      axios.get("http://localhost:8080/api/personal_information/").then((response)=>{
        setUsers(response.data);
      });};

    fetchUsers();
  }, []);

  const [donors, setDonors] = useState();
  useEffect(() => {
    const fetchDonors = async () => {
      axios.get("http://localhost:8080/api/personal_information/donors_id").then((response)=>{
        setDonors(response.data);
      console.log(donors);
      });
      
    };

    fetchDonors();
  }, []);


  return (
    <Layout title="Usuarios">
      <UserFilter></UserFilter>
      <div className={button.button_div_right}>
        <Link to="/groups">
          <Button>Ver grupos</Button>
        </Link>
        <Link to="/donors">
          <Button>Ver donantes</Button>
        </Link>
        <Link to="/volunteers">
          <Button>Ver voluntarios</Button>
        </Link>
        <Link to="/users_option">
          <Button>+</Button>
        </Link>
      </div>
      {users.reverse().map((user) => {
        return (
          <UsersCard
            key={user.id}
            id={user.id}
            firstName={user.firstName}
            lastName={user.lastName}
            phone={user.phone}
            email={user.email}
            donors={donors}
          ></UsersCard>
        );
      })}
    </Layout>
  );
}

export default UserPage;
