import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./SwipeCard.css";

const SwipeCard = ({ character, onSwipe, onCardLeftScreen }) => {
  const [item, setItem] = useState(0);

  const newItem = () => {
    setItem((prevItem) => {
      return prevItem === character.url.length - 1 ? 0 : prevItem + 1;
    });
  };

  return (
    <TinderCard
      className="swipe"
      onSwipe={(dir) => onSwipe(dir, character.name)}
      onCardLeftScreen={() => onCardLeftScreen(character.name)}
      preventSwipe={["up", "down"]}
    >
      <div
        style={{ backgroundImage: "url( " + character.url[item] + " )" }}
        className="card"
        onClick={newItem}
      >
        <h3>{character.name}</h3>
      </div>
    </TinderCard>
  );
};

export default SwipeCard;
