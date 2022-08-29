import EditButton from "./components/Buttons/EditButton";
import DeliveryFilter from "./components/Filters/DeliveryFilter";
import DonationFilter from "./components/Filters/DonationFilter";
import InstitutionFilter from "./components/Filters/InstitutionFilter";
import UserFilter from "./components/Filters/UserFilter";

function App() {
  return (
    <div>
      <DeliveryFilter></DeliveryFilter>
      <DonationFilter></DonationFilter>
      <InstitutionFilter></InstitutionFilter>
      <UserFilter></UserFilter>
      <EditButton></EditButton>
    </div>
  );
}

export default App;
