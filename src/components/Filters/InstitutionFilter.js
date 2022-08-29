import StringInput from "../Inputs/StringInput";
import Card from "../Card/Card";

function InstitutionFilter() {
  return (
    <Card className="filter">
      <div style={{ display: "flex", justify: "center", gap: "10px" }}>
        <StringInput label="Institucion: "></StringInput>
        <StringInput label="Ubicacion: "></StringInput>
      </div>
    </Card>
  );
}

export default InstitutionFilter;
