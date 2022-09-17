import MovementFilters from "../Filters/MovementFilter";
import Button from "../Buttons/Button";
import GeneralCard from "../Card/GeneralCard";
import Layout from "../Layout/Layout";
import "./MovementStyles.css";
import { Link } from "react-router-dom";

function MovementPage() {
  

  return (
    <Layout>
      <MovementFilters></MovementFilters>
      <div className="page-button-movement">
        <Link to="/create_movement">
          <Button label="+"></Button>
        </Link>
      </div>
      <GeneralCard></GeneralCard>
      <GeneralCard></GeneralCard>
      <GeneralCard></GeneralCard>
    </Layout>
  );
}

export default MovementPage;
