import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import HomePage from "../HomePage/HomePage";
import DonationPage from "../MovementPage/DonationPage";
import UserPage from "../UsersPage/UsersPage";

/*Institutions imports*/
import InstitutionPage from "../InstitutionsPage/InstitutionsPage";
import InstitutionFormEdit from "../InstitutionsPage/InstitutionFormEdit";
import AuthorityForm from "../InstitutionsPage/AuthorityForm";
import AuthorityPage from "../InstitutionsPage/AuthorityPage";
import AuthorityFormEdit from "../InstitutionsPage/AuthorityFormEdit";
import DiseaseForm from "../InstitutionsPage/DiseaseForm";
import DiseasePage from "../InstitutionsPage/DiseasePage";
import DiseaseFormEdit from "../InstitutionsPage/DiseaseFormEdit";
import AddAuthority from "../InstitutionsPage/AddAuthority";
import AddDisease from "../InstitutionsPage/AddDisease";
import AuthorityFormInfo from "../InstitutionsPage/AuthorityFormInfo";
import DiseaseFormInfo from "../InstitutionsPage/DiseaseFormInfo";
import InstitutionFormInfo from "../InstitutionsPage/InstitutionFormInfo";

/*Movement imports */
import DeliveryPage from "../MovementPage/DeliveryPage";
import DeliveryForm from "../MovementPage/DeliveryForm";
import ProductForm from "../MovementPage/ProductForm";
import TypeForm from "../MovementPage/TypeForm";
import ProductPage from "../MovementPage/ProductPage";
import AttributeForm from "../MovementPage/AttributeForm";
import NewAttribute from "../MovementPage/NewAttribute";
import ProductFormInfo from "../MovementPage/ProductFormInfo";
import DeliveryFormInfo from "../MovementPage/DeliveryFormInfo";

/*User imports */
import LifeEventForm from "../UsersPage/LifeEventForm";
import DonorForm from "../UsersPage/DonorForm";
import DonorPage from "../UsersPage/DonorPage";
import DonorsFormEdit from "../UsersPage/DonorFormEdit";
import DonorsFormInfo from "../UsersPage/DonorFormInfo";
import VolunteerFormInfo from "../UsersPage/VolunteerFormInfo";

const ReferentRoute = () => {
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
      <Route path="/authority_form_edit/:id" element={<AuthorityFormEdit />} />
      <Route path="/authority_form_info/:id" element={<AuthorityFormInfo />} />
      <Route path="/add_authority/:id" element={<AddAuthority />} />
      <Route path="/add_attributes/:id" element={<AttributeForm />} />
      <Route path="/new_attribute/:id" element={<NewAttribute />} />{" "}
      <Route path="/deliveries_form_info/:id" element={<DeliveryFormInfo />} />
      <Route path="/delivery_form" element={<DeliveryForm />} />
      <Route
        path="/institution_form_info/:id"
        element={<InstitutionFormInfo />}
      />
      <Route
        path="/institution_form_edit/:id"
        element={<InstitutionFormEdit />}
      />
      <Route path="/add_disease/:id" element={<AddDisease />} />
      <Route path="/disease_form_edit/:id" element={<DiseaseFormEdit />} />
      <Route path="/disease_form_info/:id" element={<DiseaseFormInfo />} />
      <Route path="/authority_form" element={<AuthorityForm />} />
      <Route path="/disease_form" element={<DiseaseForm />} />
      <Route path="/life_event_form" element={<LifeEventForm />} />
      <Route path="/donors_form_edit/:id" element={<DonorsFormEdit />} />
      <Route path="/donors_form_info/:id" element={<DonorsFormInfo />} />
      <Route path="/donors" element={<DonorPage />} />
      <Route path="/donor_form" element={<DonorForm />} />
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/product_form_info/:id" element={<ProductFormInfo />} />
      <Route path="/product_form" element={<ProductForm />} />
      <Route path="/type_form" element={<TypeForm />} />
        <Route path="/add_attributes/:id" element={<AttributeForm />} />
        <Route path="/users_form_info/:id" element={<VolunteerFormInfo />} />
    </Routes>
  );
};

export default ReferentRoute;
