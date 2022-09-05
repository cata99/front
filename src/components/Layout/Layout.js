import Header from "./Header";
import Menu from "./Menu";
import { Routes, Route } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import MovementPage from "../MovementPage/MovementPage";
import InstitutionPage from "../InstitutionsPage/InstitutionsPage";
import UserPage from "../UsersPage/UsersPage";

function Layout(){
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movements" element={<MovementPage />} />
        <Route path="/institutions" element={<InstitutionPage />} />
        <Route path="/users" element={<UserPage />} />
      </Routes>
      <Header>
      </Header>
      <Menu></Menu>
      <main></main>
    </div>
  );
};

export default Layout;
