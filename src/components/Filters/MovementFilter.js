import StringInput from "../Inputs/StringInput";
import DateInput from "../Inputs/DateInput";
import CheckboxInput from "../Inputs/CheckboxInput";
import Card from "../Card/Card";
import "./MovementFilter.css";
import Button from "../Buttons/Button";

function MovementFilter() {
  return (
    <Card className="filter">
      <div style={{ display: "flex", justify: "center", gap: "10px" }}>
        <StringInput label="Institucion: "></StringInput>
        <CheckboxInput label="Donación: "></CheckboxInput>
        <CheckboxInput label="Entrega: "></CheckboxInput>
      </div>

      <div className="wrapper date">
        <p>Fecha donación</p>
        <div style={{ display: "flex", justify: "center", gap: "10px" }}>
          <DateInput label="From: "></DateInput>
          <DateInput label="To: "></DateInput>
        </div>
        <p>Fecha entrega</p>
        <div style={{ display: "flex", justify: "center", gap: "10px" }}>
          <DateInput label="From: "></DateInput>
          <DateInput label="To: "></DateInput>
        </div>
      </div>
      <div style={{ display: "flex", justify: "center", gap: "10px", margin:"25px 0px" }}>
        <StringInput label="Tipo de producto: "></StringInput>
        <StringInput label="Producto: "></StringInput>
      </div>
      <div className="button-div">
        <Button label="Test"></Button>
      </div>
    </Card>
  );
}

export default MovementFilter;
