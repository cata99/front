import UserFilter from "../Filters/UserFilter";
import Button from "../Buttons/Button";
import GeneralCard from "../Card/GeneralCard";
import Layout from "../Layout/Layout";
import "./UserStyles.css";

function UserPage() {
  return (
    <Layout>
      <UserFilter></UserFilter>
      <div className="page-button-users">
        <Button label="+"></Button>
      </div>
      <GeneralCard></GeneralCard>
      <GeneralCard></GeneralCard>
      <GeneralCard></GeneralCard>
    </Layout>
  );
}

export default UserPage;
