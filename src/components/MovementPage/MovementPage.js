import MovementFilters from "../Filters/MovementFilter";
import Button from "../Buttons/Button";
import GeneralCard from "../Card/GeneralCard";
import Layout from "../Layout/Layout";
import "./MovementStyles.css";
import { useNavigate } from "react-router-dom";

function MovementPage() {

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = 'http://localhost:3000/create_movement'; 
    navigate(path);
  }

  return (
    <Layout>
      <MovementFilters></MovementFilters>
      <div className="page-button-movement">
        <Button onClick={routeChange} label="+"></Button>
      </div>
      <GeneralCard></GeneralCard>
      <GeneralCard></GeneralCard>
      <GeneralCard></GeneralCard>
    </Layout>
  );
}

export default MovementPage;
