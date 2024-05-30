import React, { useState, useRef } from "react";
import "./upperBlock.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";

function UpperBlock({ country }) {
  return (
    <div className="upperBlock">
      <div className="upperBlock__header">
        <h3 className="upperBlock__heading">{country}</h3>
        <FontAwesomeIcon icon={faArrowUpFromBracket} className="upperBlock__icon"/>
      </div>
    </div>
  );
}

export default UpperBlock;
