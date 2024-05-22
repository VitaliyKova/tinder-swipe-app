import React from "react";
import "./Filter.css"

const Filter = ({ aparts }) => {
  return (
    <div className="filter">
      <p className="filter__text">{`Свежие предложения ${aparts.length}`}</p>
      <div className="filter__box">
        <p className="filter__title">Фильтр</p>
        <img src={process.env.PUBLIC_URL + "/images/icon_filter.svg"} alt="icon filter"/>
      </div>
    </div>
  );
};

export default Filter;
