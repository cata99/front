import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import HomePage from "../HomePage/HomePage";
import DonationPage from "../MovementPage/DonationPage";
import UserPage from "../UsersPage/UsersPage";

/*Institutions imports*/
import InstitutionPage from "../InstitutionsPage/InstitutionsPage";
import AuthorityForm from "../InstitutionsPage/AuthorityForm";
import AuthorityPage from "../InstitutionsPage/AuthorityPage";
import DiseasePage from "../InstitutionsPage/DiseasePage";
import AuthorityFormInfo from "../InstitutionsPage/AuthorityFormInfo";
import DiseaseFormInfo from "../InstitutionsPage/DiseaseFormInfo";
import InstitutionFormInfo from "../InstitutionsPage/InstitutionFormInfo";

/*Movement imports */
import DeliveryPage from "../MovementPage/DeliveryPage";
import ProductPage from "../MovementPage/ProductPage";
import ProductFormInfo from "../MovementPage/ProductFormInfo";
import DeliveryFormInfo from "../MovementPage/DeliveryFormInfo";

/*User imports */
import DonorForm from "../UsersPage/DonorForm";
import DonorPage from "../UsersPage/DonorPage";
import DonorsFormInfo from "../UsersPage/DonorFormInfo";
import VolunteerFormInfo from "../UsersPage/VolunteerFormInfo";

const VolunteerRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/donations" element={<DonationPage />} />
      <Route path="/institutions" element={<InstitutionPage />} />
      <Route path="/users" element={<UserPage />} />
      <Route path="/authorities" element={<AuthorityPage />} />
      <Route path="/diseases" element={<DiseasePage />} />
      <Route path="/deliveries" element={<DeliveryPage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/authority_form" element={<AuthorityForm />} />
      <Route path="/authority_form_info/:id" element={<AuthorityFormInfo />} />
      <Route path="/deliveries_form_info/:id" element={<DeliveryFormInfo />} />
      <Route
        path="/institution_form_info/:id"
        element={<InstitutionFormInfo />}
      />
      <Route path="/disease_form_info/:id" element={<DiseaseFormInfo />} />
      <Route path="/donors_form_info/:id" element={<DonorsFormInfo />} />
      <Route path="/donors" element={<DonorPage />} />
      <Route path="/donor_form" element={<DonorForm />} />
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/product_form_info/:id" element={<ProductFormInfo />} />
      <Route path="/users_form_info/:id" element={<VolunteerFormInfo />} />
    </Routes>
  );
};

export default VolunteerRoute;
