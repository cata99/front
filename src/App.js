import React, { useContext } from "react";
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

import Login from "./components/LoginPage";
import { AuthContextProvider } from "./components/Store/auth-context";
import AuthContext from "./components/Store/auth-context";
import LoginRoute from "./components/Routes/LoginRoute";
import AdminRoute from "./components/Routes/AdminRoute";
import ReferentRoute from "./components/Routes/ReferentRoute";
import VolunteerRoute from "./components/Routes/VolunteerRoute";

function App() {
  const authCtx = useContext(AuthContext);

  const isUserLogged = () => {
    console.log(authCtx);
    if (authCtx.isLoggedIn) {
      const role = sessionStorage.getItem("roles")
      if (role == "ROLE_ADMIN") {
        return <AdminRoute />;
      } else if (role == "ROLE_REFERENTE") {
        return <ReferentRoute />;
      } else {
        return <VolunteerRoute />;
      }
    } else return <LoginRoute />;
  };
  return <>{isUserLogged()}</>;
}

export default App;
