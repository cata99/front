import React from "react";
import Button from "../Buttons/Button";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import button from "../Buttons/Button.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import DonorsCard from "../Card/DonorsCard";
function DonorPage() {

    const [donors, setDonors] = useState([]);
    useEffect(() => {
      const fetchDonors = async () => {
        axios.get("http://localhost:8080/api/personal_information/donors").then((response)=>{
          setDonors(response.data);
        });
        
      };
  
      fetchDonors();
    }, []);
  
    return (
      <Layout title="Donantes">
        <div className={button.button_div_right}>
          <Link to="/volunteers">
            <Button>Ver voluntarios</Button>
          </Link>
          <Link to="/groups">
            <Button>Ver grupos</Button>
          </Link>
          <Link to="/donor_form">
            <Button>+</Button>
          </Link>
        </div>
        {donors.reverse().map((donor) => {
        return (
          <DonorsCard
            key={donor.id}
            id={donor.id}
            firstName={donor.firstName}
            lastName={donor.lastName}
            phone={donor.phone}
            email={donor.email}
          ></DonorsCard>
        );
      })}
      </Layout>
    );
  }
  
  export default DonorPage;