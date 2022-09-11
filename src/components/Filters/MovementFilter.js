import StringInput from "../Inputs/StringInput";
import DateInput from "../Inputs/DateInput";
import CheckboxInput from "../Inputs/CheckboxInput";
import Card from "../Card/Card";
import "./Filter.css";
import Button from "../Buttons/Button";

function MovementFilter() {
  return (
    <Card className="filter">
      <form>
        <div className="first-row" style={{ display: "flex" }}>
          <StringInput label="Institución: "></StringInput>
          <div style={{ display: "flex", gap: "40px", lineHeight: "2em" }}>
            <CheckboxInput label="Donación: "></CheckboxInput>
            <CheckboxInput label="Entrega: "></CheckboxInput>
          </div>
        </div>

        <div className="wrapper date">
          <p>
            <b>Fecha donación</b>
          </p>
          <div style={{ display: "flex", justify: "center", gap: "10px" }}>
            <DateInput label="From: "></DateInput>
            <DateInput label="To: "></DateInput>
          </div>
          <p>
            <b>Fecha entrega</b>
          </p>
          <div style={{ display: "flex", justify: "center", gap: "10px" }}>
            <DateInput label="From: "></DateInput>
            <DateInput label="To: "></DateInput>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justify: "center",
            gap: "10px",
            margin: "25px 0px",
          }}
        >
          <StringInput label="Tipo de producto: "></StringInput>
          <StringInput label="Producto: "></StringInput>
        </div>
        <div className="button-div" style={{display:'flex',justifyContent:'flex-end'}}>
          <Button label="Buscar"></Button>
        </div>
      </form>
    </Card>
  );
}

export default MovementFilter;
