import React from "react";
import HomeItem from "./HomeItem";
import Layout from "../Layout/Layout";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import style from "../Card/Card.module.css"

function HomePage() {
  const [institutionTotal, setInstitutionTotal] = useState("");
  const [donationTotal, setDonationTotal] = useState("");
  const [deliveryTotal, setDeliveryTotal] = useState("");
  const [volunteerTotal, setVolunteerTotal] = useState("");
  const [userName, setUserName] = useState("");
  const [role, setRole] = useState("");
  const [group, setGroup]= useState("");
  const [institucion, setInstitution]= useState("");

  useEffect(() => {
    const fetchUser = async () => {
      const id = sessionStorage.getItem("userId");
      let userData = await fetch(`http://localhost:8080/api/users/${id}`);
      userData = await userData.json();
      console.log(userData);
      const name =
        userData.personalInformation.firstName +
        " , " +
        userData.personalInformation.lastName;
        setUserName(name);
        setGroup(userData.group.label);
        setInstitution(userData.group.institution.name);
        const role = sessionStorage.getItem("roles")
        if (role === "ROLE_ADMIN") setRole("Administrador general");
        else if (role === "ROLE_REFERENTE") setRole("Referente")
        else setRole("Voluntario");
    };
    fetchUser();
  }, []);

  useEffect(() => {
    const fetchInstitution = async () => {
      let dataInstitutions = await fetch(
        "http://localhost:8080/api/institutions/all"
      );
      dataInstitutions = await dataInstitutions.json();
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
      setDeliveryTotal(dataDeliveries.count);
    };
    fetchDeliveries();
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      let dataUsers = await fetch("http://localhost:8080/api/users/all");
      dataUsers = await dataUsers.json();
      setVolunteerTotal(dataUsers.count);
    };
    fetchUsers();
  }, []);

  return (
    <Layout title="Home">
      <div style={{ display: "flex" }}>
        <div style={{ width: "25rem" }}>
          <Link
            to="/donations"
            style={{ textDecoration: "none", color: "black" }}
          >
            <HomeItem
              title="Donaciones recibidas hasta la fecha"
              quantity={donationTotal}
            ></HomeItem>
          </Link>
        </div>
        <div style={{ width: "25rem" }}>
          <Link
            to="/deliveries"
            style={{ textDecoration: "none", color: "black" }}
          >
            <HomeItem
              title="Entregas realizadas hasta la fecha"
              quantity={deliveryTotal}
            ></HomeItem>
          </Link>
        </div>
        <div style={{ width: "25rem" }}>
          <Link
            to="/volunteers"
            style={{ textDecoration: "none", color: "black" }}
          >
            <HomeItem
              title="Voluntarios registrados hasta la fecha"
              quantity={volunteerTotal}
            ></HomeItem>
          </Link>
        </div>
        <div style={{ width: "25rem" }}>
          <Link
            to="/institutions"
            style={{ textDecoration: "none", color: "black" }}
          >
            <HomeItem
              title="Comedores a las que ayudamos hasta la fecha"
              quantity={institutionTotal}
            ></HomeItem>
          </Link>
        </div>
      </div>
      <Card className={style.home_item}>
        <h2>Bienvenido usuario: {userName}</h2>
        <h4>Estas asociado a la institución: {institucion}</h4>
        <h4>Con el grupo: {group}</h4>
        <h4>Estas operando bajo el rol de : {role}</h4>
      </Card>
    </Layout>
  );
}

export default HomePage;
