import StringInput from "../Inputs/StringInput";
import DateInput from "../Inputs/DateInput";
import Card from "../Card/Card";

function DeliveryFilter() {
  return (
    <Card className="filter">
      <form>
        <div style={{ display: "flex", justify: "center", gap: "10px" }}>
          <StringInput label="Institucion: "></StringInput>
          <StringInput label="Usuario: "></StringInput>
        </div>

        <div className="wrapper date">
          <p>Fecha entrega</p>
          <div style={{ display: "flex", justify: "center", gap: "10px" }}>
            <DateInput label="From: "></DateInput>
            <DateInput label="To: "></DateInput>
          </div>
        </div>
        <div style={{ display: "flex", justify: "center", gap: "10px" }}>
          <StringInput label="Tipo de producto: "></StringInput>
          <StringInput label="Producto: "></StringInput>
        </div>
      </form>
    </Card>
  );
}

export default DeliveryFilter;
