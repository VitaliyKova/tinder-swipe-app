import React, { useState } from "react";
import "./selectionBlock.css";
import {Link} from "react-router-dom";


function SelectionBloc() {
  return (
    <div className="selection">
      <button className="selection__button">
        <p className="selection__button-title">Подборки</p>
      </button>
      <button className="selection__button">
        <Link to={'/full_agent'} className="selection__button-title">Агенты</Link>
      </button>
    </div>
  );
}

export default SelectionBloc;
