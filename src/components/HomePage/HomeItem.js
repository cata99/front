import React from "react";
import "./HomeItem.module.css";
import Card from "../Card/Card";
import style from "../Card/Card.module.css";
import { useSpring, animated } from "react-spring";

function HomeItem(props) {
  const value = useSpring({ val: props.quantity, from: { val: 0 } });
  return (
    <Card className={style.home_item}>
      <div className={style.home_title}>
        <h2>{props.title}</h2>
      </div>
      <div className={style.numbers_div}>
        <animated.div className="number">{value.val.interpolate(val => Math.floor(val))}</animated.div>
      </div>
    </Card>
  );
}

export default HomeItem;
