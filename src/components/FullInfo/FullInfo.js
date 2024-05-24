import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import globalObject from "../fietch/globalObject";
import ObjectCard from "../obgectCard/ObjectCard";
import BotomBlock from "../botomBlock/BotomBlock";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import "./fullInfo.css"; // Стили для полного описания

const FullInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const apartment = globalObject.aparts.find((ap) => ap.id === parseInt(id));

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
          <p className="full-info__button--count">{apartment.likeCounter}</p>
        </button>
      </div>
      <BotomBlock brocker={apartment} />
    </div>
  );
};

export default FullInfo;
