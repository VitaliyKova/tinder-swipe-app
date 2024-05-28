import { React, useEffect, useRef, useState } from "react";
import "./objectCard.css";

function ObjectCard({ object, classNameCard, classNameIndicator }) {
  const [item, setItem] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const threshold = 30;

  const handelTouchStartX = (e) => {
    if (e.targetTouches.length > 0) {
      touchStartX.current = e.targetTouches[0].clientX;
    }
  };

  const handelTouchEndX = (e) => {
    if (e.changedTouches.length > 0) {
      touchEndX.current = e.changedTouches[0].clientX;
      newItem();
    }
  };

  const newItem = () => {
    const result = Math.abs(touchStartX.current - touchEndX.current);
    if (result < threshold) {
      setItem((prevItem) => {
        return prevItem === object.url.length - 1 ? 0 : prevItem + 1;
      });
    }
  };

  return (
    <div
      onTouchEnd={handelTouchEndX}
      onTouchStart={handelTouchStartX}
      style={{ backgroundImage: `url(${object.url[item]})` }}
      className={`card ${classNameCard}`}
    >
      <div className={`indicator ${classNameIndicator}`}>
        {object.url.map((_, index) => (
          <div
            key={index}
            className={`indicator__block ${
              index === item ? "indicator__block--active" : ""
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default ObjectCard;
