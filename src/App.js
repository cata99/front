import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import MovementPage from "./components/MovementPage/MovementPage";
import InstitutionPage from "./components/InstitutionsPage/InstitutionsPage";
import UserPage from "./components/UsersPage/UsersPage";
import CreateMovement from "./components/MovementPage/CreateMovement";
import CreateOption from "./components/InstitutionsPage/CreateOption";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movements" element={<MovementPage />} />
        <Route path="/institutions" element={<InstitutionPage />} />
        <Route path="/users" element={<UserPage />} />
        <Route path="/create_movement" element={<CreateMovement />} />
        <Route path="/create_institution_option" element={<CreateOption />} />
      </Routes>
    </Router>
  );
}

export default App;
