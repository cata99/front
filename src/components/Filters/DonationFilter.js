
import Card from "../Card/Card";

function DeliveryFilter() {
  return (
    <Card className="filter">
      <form>
        <div style={{ display: "flex", justify: "center", gap: "10px" }}>
          <div className="string-input">
            <label>Comedor</label>
            <input type="text"></input>
          </div>
          <div className="string-input">
            <label>Usuario</label>
            <input type="text"></input>
          </div>
        </div>

        <div className="wrapper date">
          <p>Fecha donación</p>
          <div style={{ display: "flex", justify: "center", gap: "10px" }}>
            <div className="date-input">
              <label>Desde</label>
              <input type="date"></input>
            </div>
            <div className="date-input">
              <label>Hasta</label>
              <input type="date"></input>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", justify: "center", gap: "10px" }}>
          <div className="string-input">
            <label>dropDown</label>
            <input type="text"></input>
          </div>
          <div className="string-input">
            <label>DropDown</label>
            <input type="text"></input>
          </div>
        </div>
      </form>
    </Card>
  );
}

export default DeliveryFilter;
