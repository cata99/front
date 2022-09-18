import "./HomeItem.css";
import Card from "../Card/Card";
import style from "../Card/Card.module.css"

import axios from "axios";


function HomeItem(props) {

    function getQuantity(){
        const result= axios.get("http://localhost:8080/api/attributes/")
        console.log(result)
    }
  return (
    <Card className={style.home_item}>
      <div>
        <h2>{props.title}</h2>
      </div>
      <div>
        <h3 className="home-item__quantity">{props.quantity}</h3>
      </div>
    </Card>
  );
}

export default HomeItem;
