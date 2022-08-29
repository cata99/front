import Card from "../Card";
import "./HomeItem.css";
import axios from "axios";

function HomeItem(props) {

    function getQuantity(){
        const result= axios.get("http://localhost:8080/api/attributes/")
        console.log(result)
    }
  return (
    <Card className="home-item">
      <div className="home-item__description">
        <h2>{props.title}</h2>
      </div>
      <div>
        <h3 className="home-item__quantity">{props.quantity}</h3>
      </div>
      <button onClick={getQuantity()}> Mostrar Cantidad</button>
    </Card>
  );
}

export default HomeItem;
