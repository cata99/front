import UserFilter from "../Filters/UserFilter";
import Button from "../Buttons/Button";
import GeneralCard from "../Card/GeneralCard";
import Layout from "../Layout/Layout";

import { Link } from "react-router-dom";

import button from "../Buttons/Button.module.css";

function UserPage() {
  return (
    <Layout>
      <UserFilter></UserFilter>
      <div className={button.button_div_right}>
        <Link to="/user_option">
          <Button>+</Button>
        </Link>
      </div>
      <GeneralCard></GeneralCard>
      <GeneralCard></GeneralCard>
      <GeneralCard></GeneralCard>
    </Layout>
  );
}

export default UserPage;
