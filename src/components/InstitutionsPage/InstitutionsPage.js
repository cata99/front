import InstitutionFilter from "../Filters/InstitutionFilter";
import Button from "../Buttons/Button";
import GeneralCard from "../Card/GeneralCard";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import style from "../Card/Card.module.css";
import classes from "./Institution.module.css";
import button from "../Buttons/Button.module.css";


function InstitutionPage() {
  return (
    <Layout>
      <InstitutionFilter></InstitutionFilter>
      <div className={button.button_div_right}>
        <Link to="/institution_option">
          <Button>+</Button>
        </Link>
      </div>
      <GeneralCard></GeneralCard>
      <GeneralCard></GeneralCard>
      <GeneralCard></GeneralCard>
    </Layout>
  );
}

export default InstitutionPage;
