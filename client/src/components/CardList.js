import React from "react";
import Card from "./Card";

const CardList = props => {
  return (
    <div>
      {props.cardList.map(card => {
        return (
          <Card key={card.id} deleteCard={props.deleteCard} cardInfo={card} />
        );
      })}
    </div>
  );
};
export default CardList;
