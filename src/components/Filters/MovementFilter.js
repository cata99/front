import Card from "../Card/Card";
import "./Filter.css";
import Button from "../Buttons/Button";

function MovementFilter() {
  return (
    <Card className="filter">
      <form>
        <div className="first-row" style={{ display: "flex" }}>
          <div className="string-input space-margin">
            <label>Comedor</label>
            <input type="text"></input>
          </div>
          <div className="checkbox-inputs">
            <div className="checkbox-input ">
              <label>donación</label>
              <input type="checkbox" className="checkbox-input"></input>
            </div>
            <div className="checkbox-input">
              <label>entrega</label>
              <input type="checkbox" className="checkbox-input"></input>
            </div>
          </div>
        </div>

        <div className="wrapper date">
          <p>
            <b>Fecha donación</b>
          </p>
          <div style={{ display: "flex", justify: "center", gap: "10px" }}>
            <div className="date-input space-margin">
              <label>Desde</label>
              <input type="date"></input>
            </div>
            <div className="date-input space-margin">
              <label>Hasta</label>
              <input type="date"></input>
            </div>
          </div>
          <p>
            <b>Fecha entrega</b>
          </p>
          <div style={{ display: "flex", justify: "center", gap: "10px" }}>
            <div className="date-input space-margin">
              <label>Desde</label>
              <input type="date"></input>
            </div>
            <div className="date-input space-margin">
              <label>Hasta</label>
              <input type="date"></input>
            </div>
          </div>
        </div>
        <div className="dropdown-input">
          <div className="string-input">
            <label>dropDown</label>
            <input type="text"></input>
          </div>
          <div className="string-input">
            <label>DropDown</label>
            <input type="text"></input>
          </div>
        </div>
        <div
          className="button-div"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Button label="Buscar"></Button>
        </div>
      </form>
    </Card>
  );
}

export default MovementFilter;
