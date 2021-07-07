import React from "react";
import "./card.css";

const Card = ({ cardInfo, deleteCard }) => {
  return (
    <div className="card-container">
      <p>{cardInfo.title}</p>
      <p>{cardInfo.contents}</p>
      <button onClick={() => deleteCard(cardInfo.id)()}>Delete Card</button>
    </div>
  );
};
export default Card;
