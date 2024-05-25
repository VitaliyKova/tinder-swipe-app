import {React, useState} from "react";
import './objectCard.css'

function ObjectCard({ object, classNameCard, classNameIndicator }) {
  const [item, setItem] = useState(0);

  const newItem = () => {
    setItem((prevItem) => {
      return prevItem === object.url.length - 1 ? 0 : prevItem + 1;
    });
  };

  return (
    <div
      onTouchEndCapture={newItem}
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
