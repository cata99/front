import React from "react";
import HomeItem from "./HomeItem";
import Layout from "../Layout/Layout";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [institutionTotal, setInstitutionTotal] = useState("");
  const [donationTotal, setDonationTotal] = useState("");
  const [deliveryTotal, setDeliveryTotal] = useState("");
  const [volunteerTotal, setVolunteerTotal] = useState("");

  useEffect(() => {
    const fetchInstitution = async () => {
      let dataInstitutions = await fetch(
        "http://localhost:8080/api/institutions/all"
      );
      dataInstitutions = await dataInstitutions.json();
      console.log(dataInstitutions);
      setInstitutionTotal(dataInstitutions.count);
    };
    fetchInstitution();
  }, []);

  useEffect(() => {
    const fetchDonations = async () => {
      let dataDonations = await fetch(
        "http://localhost:8080/api/donations/all"
      );
      dataDonations = await dataDonations.json();
      console.log(dataDonations);
      setDonationTotal(dataDonations.count);
    };
    fetchDonations();
  }, []);

  useEffect(() => {
    const fetchDeliveries = async () => {
      let dataDeliveries = await fetch(
        "http://localhost:8080/api/deliveries/all"
      );
      dataDeliveries = await dataDeliveries.json();
      console.log(dataDeliveries);
      setDeliveryTotal(dataDeliveries.count);
    };
    fetchDeliveries();
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      let dataUsers = await fetch("http://localhost:8080/api/users/all");
      dataUsers = await dataUsers.json();
      console.log(dataUsers);
      setVolunteerTotal(dataUsers.count);
    };
    fetchUsers();
  }, []);

  return (
    <Layout title="Home">
      <Link to="/donations" style={{ textDecoration: "none", color: "black" }}>
        <HomeItem
          title="Donaciones recibidas hasta la fecha"
          quantity={donationTotal}
        ></HomeItem>
      </Link>
      <Link to="/deliveries" style={{ textDecoration: "none", color: "black" }}>
      <HomeItem
        title="Entregas realizadas hasta la fecha"
        quantity={deliveryTotal}
      ></HomeItem>
      </Link>
      <Link to="/volunteers" style={{ textDecoration: "none", color: "black" }}>
      <HomeItem
        title="Voluntarios registrados hasta la fecha"
        quantity={volunteerTotal}
      ></HomeItem></Link>
      <Link to="/institutions" style={{ textDecoration: "none", color: "black" }}>
      <HomeItem
        title="Instituciones a las que ayudamos"
        quantity={institutionTotal}
      ></HomeItem></Link>
    </Layout>
  );
}

export default HomePage;
