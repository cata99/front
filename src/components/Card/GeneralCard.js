import React  from 'react';
import Card from "./Card";
import style from "./Card.module.css";

function GeneralCard(props) {
  return (
    <Card className={style.general}>
      <div style={{display:'flex', width:'100%'}}>
        {props.children}
      </div>
    </Card>
  );
}

export default GeneralCard;
