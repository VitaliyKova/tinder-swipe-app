import { React, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import globalObject from "../fietch/globalObject";
import ObjectCard from "../obgectCard/ObjectCard";
import BotomBlock from "../botomBlock/BotomBlock";
import ObjectDetails from "../objectDetails/ObjectDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import MapComponent from "../mapComponent/MapComponent";
import "./fullInfo.css"; // Стили для полного описания

const FullInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isExpended, setIsExpended] = useState(false);
  const apartment = globalObject.aparts.find((ap) => ap.id === parseInt(id));

  const toggleExpand = () => {
    setIsExpended(!isExpended);
  };

  return (
    <div className="full-info">
      <div className="full-info__card">
        <ObjectCard
          object={apartment}
          classNameCard="card__full" //стили внутри компонента
          classNameIndicator="indicator__full"
        />
        <button
          onTouchEnd={() => navigate(-1)}
          className="full-info__button full-info__button--back"
        >
          <img
            className="full-info__button-img-back"
            src={process.env.PUBLIC_URL + "/images/icon_backPage.svg"}
            alt="icon back page"
          />
        </button>
        <button className="full-info__button full-info__button--send">
          <FontAwesomeIcon
            icon={faArrowUpFromBracket}
            className="full-info__send-icon"
          />
        </button>
        <button className="full-info__button full-info__button--view">
          <img
            className="full-info__button-img-view"
            src={process.env.PUBLIC_URL + "/images/icon_view.svg"}
            alt="icon back page"
          />
        </button>
        <button className="full-info__button full-info__button--heart">
          <img
            className="full-info__button-img-heart"
            src={process.env.PUBLIC_URL + "/images/icon_heart.svg"}
            alt="icon bed"
          />
          <p className="full-info__button-count">{apartment.likeCounter}</p>
        </button>
      </div>
      <div className="container">
        <div className="full-info__title">
          <p className="full-info__title-name">{apartment.name}</p>
          <p className="full-info__title-price">{`$ ${apartment.price}`}</p>
        </div>
        <div className="full-info__details">
          <div className="full-info__location">
            <img
              className="full-info__location-icon"
              src={process.env.PUBLIC_URL + "/images/icon-location.svg"}
              alt="icon location"
            />
            <p className="full-info__location-name">{apartment.locationName}</p>
          </div>
          <ObjectDetails styleClass="grey" />
        </div>
        <div className="full-info__tags">
          <p className="full-info__tags-text">Продажа</p>
          <p className="full-info__tags-text">Апартаменты</p>
          <p className="full-info__tags-text">Новострой</p>
        </div>
      </div>
      <BotomBlock brocker={apartment} />
      <div className="container">
        <div className="full-info__box">
          <div
            className={`full-info__description full-info__description--${
              isExpended ? "expanded" : "collapsed"
            }`}
          >
            <p className="full-info__description-text">
              {apartment.description}
            </p>
          </div>
          <button
            onTouchStart={toggleExpand}
            className="full-info__toggle-button"
          >
            <svg
              className={`${
                isExpended
                  ? "full-info__toggle-button-svg--close"
                  : "full-info__toggle-button-svg"
              }`}
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.5 3.75L5 6.25L7.5 3.75"
                stroke="#234F68"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="full-info__infrastructure">
          <h2 className="full-info__infrastructure-heading">Инфрастуктура</h2>
          <div className="full-info__infrastructure-slider">
            {apartment.infrastructure.map((value, index) => (
              <div className="full-info__infrastructure-item" key={index}>
                <p className="full-info__infrastructure-text">{value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="map">
          <MapComponent positions={apartment.locations} centerPosition={apartment.locations[0]}/>
          <button className="map__button">
            <p className="map__button-title">
              Посмотреть на карте
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FullInfo;
