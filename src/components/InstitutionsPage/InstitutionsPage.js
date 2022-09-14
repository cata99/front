import InstitutionFilter from "../Filters/InstitutionFilter";
import Button from "../Buttons/Button";
import GeneralCard from "../Card/GeneralCard";
import Layout from "../Layout/Layout";
import "./InstitutionsStyle.css";
import { Link } from "react-router-dom";

function InstitutionPage() {
  return (
    <Layout>
      <InstitutionFilter></InstitutionFilter>
      <div className="page-button-institution">
        <Link to="/create_institution_option"><Button className="new"label="+"></Button></Link>
      </div>
      <GeneralCard></GeneralCard>
      <GeneralCard></GeneralCard>
      <GeneralCard></GeneralCard>
    </Layout>
  );
}

export default InstitutionPage;
