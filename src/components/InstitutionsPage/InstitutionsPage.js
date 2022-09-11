import InstitutionFilter from "../Filters/InstitutionFilter";
import Button from "../Buttons/Button";
import GeneralCard from "../Card/GeneralCard";
import Layout from "../Layout/Layout";
import "./InstitutionsStyle.css";

function InstitutionPage() {
  return (
    <Layout>
      <InstitutionFilter></InstitutionFilter>
      <div className="page-button-institution">
        <Button label="+"></Button>
      </div>
      <GeneralCard></GeneralCard>
      <GeneralCard></GeneralCard>
      <GeneralCard></GeneralCard>
    </Layout>
  );
}

export default InstitutionPage;
