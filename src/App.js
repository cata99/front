import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import MovementPage from "./components/MovementPage/MovementPage";
import InstitutionPage from "./components/InstitutionsPage/InstitutionsPage";
import UserPage from "./components/UsersPage/UsersPage";
import OptionsMovement from "./components/MovementPage/OptionsMovement";
import CreateDelivery from "./components/MovementPage/CreateDelivery";
import AddProductsDelivery from "./components/MovementPage/AddProductsDelivery";
import AddProduct from "./components/MovementPage/AddProduct";
import RegisterType from "./components/MovementPage/RegisterType";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movements" element={<MovementPage />} />
        <Route path="/institutions" element={<InstitutionPage />} />
        <Route path="/users" element={<UserPage />} />
        <Route path="/create_movement" element={<OptionsMovement />} />
        <Route path="/create_delivery" element={<CreateDelivery />} />
        <Route path="/add_products_delivery" element={<AddProductsDelivery />} />
        <Route path="/add_product_delivery" element={<AddProduct />} />
        <Route path="/new_type" element={<RegisterType />} />
      </Routes>
    </Router>
  );
}

export default App;
