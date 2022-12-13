import React from "react";
import {  Route, Routes, Navigate } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import DonationPage from "../MovementPage/DonationPage";
import UserPage from "../UsersPage/UsersPage";

/*Institutions imports*/
import InstitutionPage from "../InstitutionsPage/InstitutionsPage";
import OptionInstitution from "../InstitutionsPage/OptionInstitution";
import InstitutionForm from "../InstitutionsPage/InstitutionForm";
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
import DonationForm from "../MovementPage/DonationForm";
import ProductForm from "../MovementPage/ProductForm";
import TypeForm from "../MovementPage/TypeForm";
import ProductPage from "../MovementPage/ProductPage";
import AttributeForm from "../MovementPage/AttributeForm";
import NewAttribute from "../MovementPage/NewAttribute";
import ProductFormEdit from "../MovementPage/ProductFormEdit";
import ProductFormInfo from "../MovementPage/ProductFormInfo";
import AddProductFormDonations from "../MovementPage/AddProductDonations";
import DeliveryFormEdit from "../MovementPage/DeliveryFormEdit";
import DeliveryFormInfo from "../MovementPage/DeliveryFormInfo";
import DonationFormEdit from "../MovementPage/DonationFormEdit";
import DonationFormInfo from "../MovementPage/DonationFormInfo";

/*User imports */
import OptionUser from "../UsersPage/OptionUser";
import VolunteerForm from "../UsersPage/VolunteerForm";
import LifeEventForm from "../UsersPage/LifeEventForm";
import GroupForm from "../UsersPage/GroupForm";
import DonorForm from "../UsersPage/DonorForm";
import VolunteerPage from "../UsersPage/VolunteerPage";
import DonorPage from "../UsersPage/DonorPage";
import GroupPage from "../UsersPage/GroupPage";
import VolunteerFormEdit from "../UsersPage/VolunteerFormEdit";
import DonorsFormEdit from "../UsersPage/DonorFormEdit";
import DonorsFormInfo from "../UsersPage/DonorFormInfo";
import VolunteerFormInfo from "../UsersPage/VolunteerFormInfo";
import GroupFormEdit from "../UsersPage/GroupFormEdit";
import GroupFormInfo from "../UsersPage/GroupFormInfo";
import AddProductFormDeliveries from "../MovementPage/AddProductDelivery";
import DonationStadistics from "../Estadistics/DonationStadistics";
import DeliveryStadistics from "../Estadistics/DeliveryStadistics";

function AdminRoute() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/donations" element={<DonationPage />} />
        <Route path="/institutions" element={<InstitutionPage />} />
        <Route path="/authorities" element={<AuthorityPage />} />
        <Route path="/diseases" element={<DiseasePage />} />
        <Route path="/deliveries" element={<DeliveryPage />} />
        <Route path="/products" element={<ProductPage />} />

        <Route path="/delivery_form" element={<DeliveryForm />} />
        <Route path="/donation_form" element={<DonationForm />} />
        <Route path="/product_form_info/:id" element={<ProductFormInfo />} />
        <Route path="/product_form_edit/:id" element={<ProductFormEdit />} />

        <Route path="/product_form" element={<ProductForm />} />
        <Route path="/type_form" element={<TypeForm />} />
        <Route path="/add_attributes/:id" element={<AttributeForm />} />
        <Route
          path="/add_product_donations/:id"
          element={<AddProductFormDonations />}
        />
        <Route
          path="/add_product_deliveries/:id"
          element={<AddProductFormDeliveries />}
        />
        <Route
          path="/deliveries_form_edit/:id"
          element={<DeliveryFormEdit />}
        />
        <Route
          path="/deliveries_form_info/:id"
          element={<DeliveryFormInfo />}
        />
        <Route
          path="/add_product_deliveries/:id"
          element={<AddProductFormDeliveries />}
        />

        <Route path="/donations_form_edit/:id" element={<DonationFormEdit />} />

        <Route path="/donations_form_info/:id" element={<DonationFormInfo />} />
        <Route path="/new_attribute/:id" element={<NewAttribute />} />

        <Route path="/institution_option" element={<OptionInstitution />} />
        <Route path="/institution_form" element={<InstitutionForm />} />
        <Route
          path="/institution_form_edit/:id"
          element={<InstitutionFormEdit />}
        />
        <Route
          path="/institution_form_info/:id"
          element={<InstitutionFormInfo />}
        />
        <Route
          path="/authority_form_edit/:id"
          element={<AuthorityFormEdit />}
        />
        <Route
          path="/authority_form_info/:id"
          element={<AuthorityFormInfo />}
        />
        <Route path="/add_authority/:id" element={<AddAuthority />} />
        <Route path="/add_disease/:id" element={<AddDisease />} />
        <Route path="/disease_form_edit/:id" element={<DiseaseFormEdit />} />
        <Route path="/disease_form_info/:id" element={<DiseaseFormInfo />} />
        <Route path="/authority_form" element={<AuthorityForm />} />
        <Route path="/disease_form" element={<DiseaseForm />} />

        <Route path="/users_option" element={<OptionUser />} />
        <Route path="/volunteer_form" element={<VolunteerForm />} />
        <Route path="/users_form_edit/:id" element={<VolunteerFormEdit />} />
        <Route path="/users_form_info/:id" element={<VolunteerFormInfo />} />
        <Route path="/donors_form_edit/:id" element={<DonorsFormEdit />} />
        <Route path="/donors_form_info/:id" element={<DonorsFormInfo />} />
        <Route path="/life_event_form" element={<LifeEventForm />} />
        <Route path="/group_form" element={<GroupForm />} />
        <Route path="/group_form_edit/:id" element={<GroupFormEdit />} />
        <Route path="/group_form_info/:id" element={<GroupFormInfo />} />
        <Route path="/donor_form" element={<DonorForm />} />
        <Route path="/volunteers" element={<VolunteerPage />} />
        <Route path="/donors" element={<DonorPage />} />
        <Route path="/groups" element={<GroupPage />} />
        <Route path="/donation_stadistics" element={<DonationStadistics/>} />
        
        <Route path="/delivery_stadistics" element={<DeliveryStadistics/>} />
        
        <Route path="/profile/:id" element={<VolunteerFormEdit/>} />
      
        
        <Route path="*" element={<Navigate to="/" />}/>
      </Routes>
    
  );
}

export default AdminRoute;
