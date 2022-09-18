import Card from "./Card";
import Button from "../Buttons/Button";
import style from "./Card.module.css";

function GeneralCard() {
  return (
    <Card className={style.general}>
      <div className={style.title}>
        <h2>Donacion</h2>
      </div>
      <div className={style.right}>
        <Button>Editar</Button>
        <Button>Info</Button>
        <Button>Borrar</Button>
      </div>
    </Card>
  );
}

export default GeneralCard;
