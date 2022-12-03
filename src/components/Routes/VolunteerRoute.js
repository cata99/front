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
import VolunteerFormEdit from "../UsersPage/VolunteerFormEdit";
import VolunteerPage from "../UsersPage/VolunteerPage";
import DonationFormInfo from "../MovementPage/DonationFormInfo";
import ProductFormEdit from "../MovementPage/ProductFormEdit";
import AttributeForm from "../MovementPage/AttributeForm";
import AuthorityFormEdit from "../InstitutionsPage/AuthorityFormEdit";
import AddAuthority from "../InstitutionsPage/AddAuthority";
import AddDisease from "../InstitutionsPage/AddDisease";
import DiseaseFormEdit from "../InstitutionsPage/DiseaseFormEdit";
import DiseaseForm from "../InstitutionsPage/DiseaseForm";
import GroupPage from "../UsersPage/GroupPage";
import GroupFormInfo from "../UsersPage/GroupFormInfo";

const VolunteerRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/donations" element={<DonationPage />} />
      <Route path="/institutions" element={<InstitutionPage />} />
      <Route path="/users" element={<UserPage />} />
      <Route path="/groups" element={<GroupPage />} />
      <Route path="/group_form_info/:id" element={<GroupFormInfo />} />
      <Route path="/authorities" element={<AuthorityPage />} />
      <Route path="/diseases" element={<DiseasePage />} />
      <Route path="/deliveries" element={<DeliveryPage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/authority_form" element={<AuthorityForm />} />
      <Route path="/volunteers" element={<VolunteerPage />} />
      <Route path="/authority_form_info/:id" element={<AuthorityFormInfo />} />
      <Route path="/deliveries_form_info/:id" element={<DeliveryFormInfo />} />
      <Route path="/product_form_edit/:id" element={<ProductFormEdit />} />
      <Route path="/add_attributes/:id" element={<AttributeForm />} />

      <Route path="/donations_form_info/:id" element={<DonationFormInfo />} />
      <Route path="/donors_form_info/:id" element={<DonorsFormInfo />} />
      <Route path="/authority_form_edit/:id" element={<AuthorityFormEdit />} />
      <Route path="/add_authority/:id" element={<AddAuthority />} />
      <Route path="/add_disease/:id" element={<AddDisease />} />
      <Route path="/disease_form_edit/:id" element={<DiseaseFormEdit />} />

      <Route path="/authority_form" element={<AuthorityForm />} />
      <Route path="/disease_form" element={<DiseaseForm />} />
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
      <Route path="/profile/:id" element={<VolunteerFormEdit />} />
    </Routes>
  );
};

export default VolunteerRoute;
