import Card from "../Card/Card";
import classes from "./Filter.module.css";

import button from "../Buttons/Button.module.css";

import style from "../Card/Card.module.css";


function DeliveryFilter() {
  return (
    <Card className={style.filter}>
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
          <p>Fecha entrega</p>
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
