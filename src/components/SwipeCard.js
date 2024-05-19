import React, { useState, useRef } from "react";
import TinderCard from "react-tinder-card";
import "./SwipeCard.css";

const SwipeCard = ({ character, onSwipe, onCardLeftScreen }) => {
  const [item, setItem] = useState(0);
  const touchStartX = useRef(null);
  // const touchEndX = useRef(null);

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  // const handleTouchMove = (e) => {
  //   touchEndX.current = e.targetTouches[0].clientX; 
  // };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const threshold = 50; // Порог для распознавания касания (можно настроить для чувствительности)
    if (touchStartX.current !== null) {
      const distance = touchStartX.current - touchEndX;
      if (Math.abs(distance) < threshold) {
        newItem();
      }
    }
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
        onTouchEnd={handleTouchEnd}
      >
        <h3>{character.name}</h3>
      </div>
    </TinderCard>
  );
};

export default SwipeCard;


