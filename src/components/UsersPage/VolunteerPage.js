import React from "react";
import Button from "../Buttons/Button";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import axios from "axios";
import button from "../Buttons/Button.module.css";
import UsersCard from "../Card/UsersCard";
import { useEffect, useState } from "react";
function VolunteerPage() {

  const [volunteers, setVolunteers] = useState([]);
  useEffect(() => {
    const fetchVolunteers = async () => {
      axios.get("http://localhost:8080/api/users/").then((response)=>{
        setVolunteers(response.data);
      });};

    fetchVolunteers();
  }, []);

  return (
    <Layout title="Voluntarios">
      <div className={button.button_div_right}>
        <Link to="/donors">
          <Button>Ver donantes</Button>
        </Link>
        <Link to="/groups">
          <Button>Ver grupos</Button>
        </Link>
        <Link to="/volunteer_form">
          <Button>+</Button>
        </Link>
      </div>
      {volunteers.reverse().map((volunteer) => {
        return (
          <UsersCard
            key={volunteer.id}
            id={volunteer.id}
            firstName={volunteer.personalInformation.firstName}
            lastName={volunteer.personalInformation.lastName}
            phone={volunteer.personalInformation.phone}
            email={volunteer.personalInformation.email}
          ></UsersCard>
        );
      })}
      
    </Layout>
  );
}

export default VolunteerPage;