import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import MovementPage from "./components/MovementPage/MovementPage";
import InstitutionPage from "./components/InstitutionsPage/InstitutionsPage";
import UserPage from "./components/UsersPage/UsersPage";
import CreateMovement from "./components/MovementPage/CreateMovement";
import OptionInstitution from "./components/InstitutionsPage/OptionInstitution";
import CreateInstitution from "./components/InstitutionsPage/CreateInstitution";
import CreateAuthority from "./components/InstitutionsPage/CreateAuthority";
import CreateDisease from "./components/InstitutionsPage/CreateDisease";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movements" element={<MovementPage />} />
        <Route path="/institutions" element={<InstitutionPage />} />
        <Route path="/users" element={<UserPage />} />
        <Route path="/create_movement" element={<CreateMovement />} />
        <Route path="/institution_option" element={<OptionInstitution />} />
        <Route path="/create_institution" element={<CreateInstitution />} />
        <Route path="/create_authority" element={<CreateAuthority />} />
        <Route path="/create_disease" element={<CreateDisease />} />
      </Routes>
    </Router>
  );
}

export default App;
