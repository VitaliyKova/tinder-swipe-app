import React from "react";
import "./storiesList.css";

function StoriesList({ brockers }) {
  return (
    <div className="stories">
      <div className="stories__items">
        {brockers.map((field) => (
          <div className="stories__box">
            <div
            key={field.id}
            className={`stories__item ${
              field.viewedStor ? "stories__item--unviewed" : ""
            }`}
          >
            <img
              className="stories__item-img"
              src={field.imgReels}
              alt={field.name}
            />
          </div>
          <p className="stories__name">{field.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StoriesList;
