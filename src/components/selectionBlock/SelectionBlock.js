import React, { useState } from "react";
import "./selectionBlock.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";

function SelectionBloc() {
  return (
    <div className="selectionBlock">
      <div className="selectionBlock__left">
        <img
          className="selectionBlock__img"
          src={process.env.PUBLIC_URL + "/images/bacground-selection.png"}
          alt="bacground"
        />
        <p className="selectionBlock__title left">ПОДБОРКИ</p>
      </div>
      <div className="selectionBlock__right">
        <img
          className="selectionBlock__img"
          src={process.env.PUBLIC_URL + "/images/bacground-brokers.png"}
          alt="bacground"
        />
        <p className="selectionBlock__title right">БРОКЕРЫ</p>
      </div>
    </div>
  );
}

export default SelectionBloc;
