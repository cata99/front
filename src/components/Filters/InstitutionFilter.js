import StringInput from "../Inputs/StringInput";
import Card from "../Card/Card";
import "./Filter.css";
import Button from "../Buttons/Button";

function InstitutionFilter() {
  return (
    <Card className="filter">
      <form>
        <div style={{ display: "flex", justify: "center", gap: "10px" }}>
          <StringInput label="Institución: "></StringInput>
          <StringInput label="Ubicación: "></StringInput>
        </div>
        <div className="button-div" style={{padding:'15px 10px 0 0'}}>
          <Button label="Buscar"></Button>
        </div>
      </form>
    </Card> 
  );
}

export default InstitutionFilter;
