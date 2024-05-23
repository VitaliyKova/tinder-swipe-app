import React, { useState, useRef } from "react";
import "./upperBlock.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";

function UpperBlock({ country, brocker }) {
  return (
    <div className="upperBlock">
      <div className="upperBlock__header">
        <FontAwesomeIcon icon={faArrowUpFromBracket} className="upperBlock__icon"/>
        <h3 className="upperBlock__heading">{country}</h3>
      </div>
      <div className="upperBlock__stories">
        {brocker.map((field) => (
          <div
            key={field.id}
            className={`upperBlock__item ${field.viewedStor ? "upperBlock__item--unviewed" : ""}`}
          >
            <img src={field.imgReels} alt={field.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default UpperBlock;
