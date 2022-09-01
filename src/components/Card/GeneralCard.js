import Card from "./Card";
import Button from "../Buttons/Button"
import "./Card.css";
function GeneralCard() {
  return (
    <Card className="general box">
      <h2>Donacion</h2>
      <div className="container right">
        <Button label="Editar"></Button>
        <Button label="Info"></Button>
        <Button label="Borrar"></Button>
      </div>
    </Card>
  );
}

export default GeneralCard;
