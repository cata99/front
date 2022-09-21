import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import MovementPage from "./components/MovementPage/MovementPage";
import UserPage from "./components/UsersPage/UsersPage";

/*Institutions imports*/
import InstitutionPage from "./components/InstitutionsPage/InstitutionsPage";
import OptionInstitution from "./components/InstitutionsPage/OptionInstitution";
import InstitutionForm from "./components/InstitutionsPage/InstitutionForm";
import AuthorityForm from "./components/InstitutionsPage/AuthorityForm";
import DiseaseForm from "./components/InstitutionsPage/DiseaseForm";

/*Movement imports */
import OptionsMovement from "./components/MovementPage/OptionsMovement";
import DeliveryForm from "./components/MovementPage/DeliveryForm";
import AddProductsDelivery from "./components/MovementPage/AddProductsDelivery";
import ProductForm from "./components/MovementPage/ProductForm";
import TypeForm from "./components/MovementPage/TypeForm";

/*User imports */
import OptionUser from "./components/UsersPage/OptionUser";
import VolunteerForm from "./components/UsersPage/VolunteerForm";
import LifeEventForm from "./components/UsersPage/LifeEventForm";
import RolForm from "./components/UsersPage/RolForm";
import GroupForm from "./components/UsersPage/GroupForm";
import DonorForm from "./components/UsersPage/DonorForm";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movements" element={<MovementPage />} />
        <Route path="/institutions" element={<InstitutionPage />} />
        <Route path="/users" element={<UserPage />} />

        <Route path="/movement_option" element={<OptionsMovement />} />
        <Route path="/delivery_form" element={<DeliveryForm />} />
        <Route path="/add_products_delivery" element={<AddProductsDelivery />}/>
        <Route path="/product_form" element={<ProductForm />} />
        <Route path="/type_form" element={<TypeForm />} />
        
        <Route path="/institution_option" element={<OptionInstitution />} />
        <Route path="/institution_form" element={<InstitutionForm />} />
        <Route path="/authority_form" element={<AuthorityForm />} />
        <Route path="/disease_form" element={<DiseaseForm />} />

        <Route path="/user_option" element={<OptionUser />} />
        <Route path="/volunteer_form" element={<VolunteerForm />} />
        <Route path="/life_event_form" element={<LifeEventForm />} />
        <Route path="/rol_form" element={<RolForm />} />
        <Route path="/group_form" element={<GroupForm />} />
        <Route path="/donor_form" element={<DonorForm />} />
      </Routes>
    </Router>
  );
}

export default App;
