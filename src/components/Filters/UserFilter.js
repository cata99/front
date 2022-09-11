import StringInput from "../Inputs/StringInput";
import CheckboxInput from "../Inputs/CheckboxInput";
import Card from "../Card/Card";
import "./Filter.css";
import Button from "../Buttons/Button";

function UserFilter() {
  return (
    <Card className="filter">
      <form>
        <div style={{ display: "flex" }}>
          <StringInput label="Nombre: "></StringInput>
          <StringInput label="Apellido: "></StringInput>
        </div>
        <div style={{ display: "flex", justify: "center", gap: "10px" }}>
          <StringInput label="Usuario: "></StringInput>
          <StringInput label="Grupo: "></StringInput>
        </div>
        <div className="checkbox-div" style={{ display: "flex", 'justifyContent': "center", 'alignItems':"center", gap:'20%',marginTop: '1%'}}>
          <CheckboxInput label="Referente: "></CheckboxInput>
          <CheckboxInput label="Voluntario: "></CheckboxInput>
          <CheckboxInput label="Donante: "></CheckboxInput>
        </div>
        <div className="button-div" style={{textAlign:'left'}}>
          <Button label="Buscar"></Button>
        </div>
      </form>
    </Card>
  );
}

export default UserFilter;
