import AddButton from "./components/Buttons/AddButton";
import CreateButton from "./components/Buttons/CreateButton";
import EditButton from "./components/Buttons/EditButton";
import SearchButton from "./components/Buttons/SearchButton";
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
      <CreateButton></CreateButton>
      <AddButton></AddButton>
      <SearchButton></SearchButton>
    </div>
  );
}

export default App;
