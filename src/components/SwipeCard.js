import React, { useState, useRef } from "react";
import TinderCard from "react-tinder-card";
import "./swipeCard.css";

const SwipeCard = ({
  character,
  onSwipe,
  onCardScreen,
  restorePrevious,
  history,
}) => {
  const [item, setItem] = useState(0);
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchStartY.current = e.targetTouches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const threshold = 5; // Пороговое значение для жестов

    if (
      touchStartX.current !== null &&
      touchEndX !== null &&
      touchStartY.current !== null &&
      touchEndY !== null
    ) {
      const distanceX = touchEndX - touchStartX.current;
      const distanceY = touchEndY - touchStartY.current;

      if (
        Math.abs(distanceX) > Math.abs(distanceY) &&
        Math.abs(distanceX) > threshold
      ) {
        // Если свайп по горизонтали больше, чем по вертикали и превышает пороговое значение
        handleSwipe(distanceX > 0 ? "right" : "left");
      } else if (
        Math.abs(distanceX) < threshold &&
        Math.abs(distanceY) < threshold
      ) {
        // Если свайп короткий, переключаем изображение
        newItem();
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  const handleSwipe = (direction) => {
    if (direction === "left" || direction === "right") {
      onSwipe(direction, character.id);
    }
  };

  const newItem = () => {
    setItem((prevItem) => {
      return prevItem === character.url.length - 1 ? 0 : prevItem + 1;
    });
  };

  return (
    <div onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <TinderCard
        className="swipe"
        onSwipe={(dir) => {
          handleSwipe(dir);
        }}
        onCardLeftScreen={() => onCardScreen(character.id)}
        preventSwipe={["up", "down"]}
        swipeThreshold={50}
        swipeRequirementType="position"
      >
        <div
          style={{ backgroundImage: `url(${character.url[item]})` }}
          className="card"
        >
          {/* <h3>{character.name}</h3> */}
          <div className="indicator-container">
            {character.url.map((_, index) => (
              <div
                key={index}
                className={`indicator ${index === item ? "active" : ""}`}
              ></div>
            ))}
          </div>
          <button
            onTouchEndCapture={(e) => {
              e.stopPropagation();
              restorePrevious();
            }}
            disabled={history.length === 0}
            className="button__back"
          >
            <img
              className="button_icon"
              src={process.env.PUBLIC_URL + "/images/icon_back.svg"}
              alt="icon back"
            />
          </button>
        </div>
      </TinderCard>
    </div>
  );
};

export default SwipeCard;
