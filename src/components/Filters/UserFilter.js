import StringInput from "../Inputs/StringInput";
import CheckboxInput from "../Inputs/CheckboxInput";
import Card from "../Card/Card";

function UserFilter(){
    return (
        <Card className="filter">
        <div style={{ display: "flex", justify: "center", gap: "10px"}}>
          <StringInput label="Nombre: "></StringInput>
          <StringInput label="Apellido: "></StringInput>
        </div>
        <div style={{ display: "flex", justify: "center", gap: "10px" }}>
          <StringInput label="Usuario: "></StringInput>
          <CheckboxInput label="Referente: "></CheckboxInput>
        </div>
        <div style={{ display: "flex", justify: "center", gap: "10px" }}>
          <StringInput label="Grupo: "></StringInput>
          <CheckboxInput label="Donante: "></CheckboxInput>
        </div>
      </Card>
    );
}

export default UserFilter;