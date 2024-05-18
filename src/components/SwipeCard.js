import React, { useState, useRef } from "react";
import TinderCard from "react-tinder-card";
import "./SwipeCard.css";

const SwipeCard = ({ character, onSwipe, onCardLeftScreen }) => {
  const [item, setItem] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX; 
  };

  const handleTouchEnd = () => {
    const threshold = 50;
    if(touchStartX.current !== null && touchEndX.current !== null) {
      const distance = touchStartX.current - touchEndX.current;
      if (Math.abs(distance) < threshold) {
        newItem();
      }
    }
    touchEndX.current = null;
    touchStartX.current = null;
  };

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
        style={{ backgroundImage: `url(${character.url[item]})` }}
        className="card"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <h3>{character.name}</h3>
      </div>
    </TinderCard>
  );
};

export default SwipeCard;
