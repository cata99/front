import HomeItem from "./HomeItem";
import Layout from "../Layout/Layout";
import {useState, useEffect} from "react";

function HomePage(){

  const [institutionTotal, setInstitutionTotal] = useState('');
  const [donationTotal, setDonationTotal] = useState('');
  const [deliveryTotal, setDeliveryTotal] = useState('');
  const [volunteerTotal, setVolunteerTotal] = useState('');

  useEffect(() => {


    const fetchQuantities = async () => {
      let dataInstitutions = await fetch("http://localhost:8080/api/institutions/all");
      dataInstitutions = dataInstitutions.json();
      setInstitutionTotal(dataInstitutions);
      console.log(institutionTotal);
      let dataDonations =await fetch("http://localhost:8080/api/donations/all");
      dataDonations = dataDonations.json();
      setDonationTotal(dataDonations);
      console.log(donationTotal)
      let dataDeliveries =await fetch("http://localhost:8080/api/deliveries/all");
      dataDeliveries = dataDeliveries.json();
      setDeliveryTotal(dataDeliveries);
      console.log(deliveryTotal)
      let dataVolunteers =await fetch("http://localhost:8080/api/users/all");
      dataVolunteers = dataVolunteers.json();
      setVolunteerTotal(dataVolunteers);
      console.log(volunteerTotal)

    };

    fetchQuantities();
  }, []);

    const boxHome=[
        {title:'Donaciones recibidas hasta la fecha'},
        {title:'Entregas realizadas hasta la fecha'},
        {title:'Voluntarios registrados hasta la fecha'},
        {title:'Instituciones a las que ayudamos'},
      ]
    
      return (
        <Layout>
       <HomeItem title={boxHome[0].title} quantity={donationTotal}></HomeItem>
       <HomeItem title={boxHome[1].title} quantity={deliveryTotal}></HomeItem>
       <HomeItem title={boxHome[2].title} quantity={volunteerTotal}></HomeItem>
       <HomeItem title={boxHome[3].title} quantity={institutionTotal}></HomeItem>
       </Layout>
      );
}

export default HomePage;