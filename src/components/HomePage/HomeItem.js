import React from "react";
import "./HomeItem.css";
import Card from "../Card/Card";
import style from "../Card/Card.module.css"



function HomeItem(props) {
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
