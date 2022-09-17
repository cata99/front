import Card from "../Card/Card";
import "./Filter.css";
import Button from "../Buttons/Button";

function UserFilter() {
  return (
    <Card className="filter">
      <form>
        <div style={{ display: "flex" }}>
          {" "}
          <div className="string-input">
            <label>Nombre</label>
            <input type="text"></input>
          </div>
          <div className="string-input">
            <label>Apellido</label>
            <input type="text"></input>
          </div>
        </div>
        <div style={{ display: "flex", justify: "center", gap: "10px" }}>
          <div className="string-input">
            <label>Usuario</label>
            <input type="text"></input>
          </div>
          <div className="string-input">
            <label>Grupo</label>
            <input type="text"></input>
          </div>
        </div>
        <div
          className="checkbox-div"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20%",
            marginTop: "1%",
          }}
        >
          <div className="checkbox-input">
            <label>Referente</label>
            <input type="checkbox" className="checkbox-input"></input>
          </div>
          <div className="checkbox-input">
            <label>Donante</label>
            <input type="checkbox" className="checkbox-input"></input>
          </div>
          <div className="checkbox-input">
            <label>Voluntario</label>
            <input type="checkbox" className="checkbox-input"></input>
          </div>
        </div>
        <div className="button-div" style={{ textAlign: "left" }}>
          <Button label="Buscar"></Button>
        </div>
      </form>
    </Card>
  );
}

export default UserFilter;
