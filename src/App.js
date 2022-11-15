import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import DonationPage from "./components/MovementPage/DonationPage";
import UserPage from "./components/UsersPage/UsersPage";

/*Institutions imports*/
import InstitutionPage from "./components/InstitutionsPage/InstitutionsPage";
import OptionInstitution from "./components/InstitutionsPage/OptionInstitution";
import InstitutionForm from "./components/InstitutionsPage/InstitutionForm";
import InstitutionFormEdit from "./components/InstitutionsPage/InstitutionFormEdit";
import AuthorityForm from "./components/InstitutionsPage/AuthorityForm";
import AuthorityPage from "./components/InstitutionsPage/AuthorityPage";
import AuthorityFormEdit from "./components/InstitutionsPage/AuthorityFormEdit";
import DiseaseForm from "./components/InstitutionsPage/DiseaseForm";
import DiseasePage from "./components/InstitutionsPage/DiseasePage";
import DiseaseFormEdit from "./components/InstitutionsPage/DiseaseFormEdit";
import AddAuthority from "./components/InstitutionsPage/AddAuthority";
import AddDisease from "./components/InstitutionsPage/AddDisease";
import AuthorityFormInfo from "./components/InstitutionsPage/AuthorityFormInfo";
import DiseaseFormInfo from "./components/InstitutionsPage/DiseaseFormInfo";
import InstitutionFormInfo from "./components/InstitutionsPage/InstitutionFormInfo";

/*Movement imports */
import OptionsMovement from "./components/MovementPage/OptionsMovement";
import DeliveryPage from "./components/MovementPage/DeliveryPage";
import DeliveryForm from "./components/MovementPage/DeliveryForm";
import DonationForm from "./components/MovementPage/DonationForm";
import ProductForm from "./components/MovementPage/ProductForm";
import TypeForm from "./components/MovementPage/TypeForm";
import ProductPage from "./components/MovementPage/ProductPage";
import AttributeForm from "./components/MovementPage/AttributeForm";
import NewAttribute from "./components/MovementPage/NewAttribute";
import ProductFormEdit from "./components/MovementPage/ProductFormEdit";
import ProductFormInfo from "./components/MovementPage/ProductFormInfo";
import AddProductFormDonations from "./components/MovementPage/AddProductDonations";
import DeliveryFormEdit from "./components/MovementPage/DeliveryFormEdit";
import DeliveryFormInfo from "./components/MovementPage/DeliveryFormInfo";

/*User imports */
import OptionUser from "./components/UsersPage/OptionUser";
import VolunteerForm from "./components/UsersPage/VolunteerForm";
import LifeEventForm from "./components/UsersPage/LifeEventForm";
import GroupForm from "./components/UsersPage/GroupForm";
import DonorForm from "./components/UsersPage/DonorForm";
import VolunteerPage from "./components/UsersPage/VolunteerPage";
import DonorPage from "./components/UsersPage/DonorPage";
import GroupPage from "./components/UsersPage/GroupPage";
import VolunteerFormEdit from "./components/UsersPage/VolunteerFormEdit";
import DonorsFormEdit from "./components/UsersPage/DonorFormEdit";
import DonorsFormInfo from "./components/UsersPage/DonorFormInfo";
import VolunteerFormInfo from "./components/UsersPage/VolunteerFormInfo";
import GroupFormEdit from "./components/UsersPage/GroupFormEdit";
import GroupFormInfo from "./components/UsersPage/GroupFormInfo";
import AddProductFormDeliveries from "./components/MovementPage/AddProductDelivery";
import DonationFormEdit from "./components/MovementPage/DonationFormEdit";
import DonationFormInfo from "./components/MovementPage/DonationFormInfo";
import Login from "./components/LoginTest";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/donations" element={<DonationPage />} />
        <Route path="/institutions" element={<InstitutionPage />} />
        <Route path="/users" element={<UserPage />} />
        <Route path="/authorities" element={<AuthorityPage />} />
        <Route path="/diseases" element={<DiseasePage />} />
        <Route path="/deliveries" element={<DeliveryPage />} />
        <Route path="/products" element={<ProductPage />} />

        <Route path="/movement_option" element={<OptionsMovement />} />
        <Route path="/delivery_form" element={<DeliveryForm />} />
        <Route path="/donation_form" element={<DonationForm />} />
        <Route path="/product_form_edit/:id" element={<ProductFormEdit />} />
        <Route path="/product_form_info/:id" element={<ProductFormInfo />} />

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
      </Routes>
    </Router>
  );
}

export default App;
