import React, { useState } from "react";
import "./selectionBlock.css";


function SelectionBloc() {
  return (
    <div className="selection">
      <button className="selection__button">
        <p className="selection__button-title">Подборки</p>
      </button>
      <button className="selection__button">
        <p className="selection__button-title">Агенты</p>
      </button>
    </div>
  );
}

export default SelectionBloc;
