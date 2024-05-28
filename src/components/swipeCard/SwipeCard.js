import React, { useState, useRef, useEffect } from "react";
import TinderCard from "react-tinder-card";
import ObjectCard from "../obgectCard/ObjectCard";
import { useNavigate } from "react-router-dom";
import ObjectDetails from "../objectDetails/ObjectDetails";
import "./swipeCard.css";

const SwipeCard = ({
  object,
  onSwipe,
  onCardScreen,
  restorePrevious,
  history,
}) => {
  const swipeFeedbackRef = useRef(null);
  const navigate = useNavigate();

  const handleTouchEnd = (e) => {
    if (swipeFeedbackRef.current) {
      setTimeout(() => {
        swipeFeedbackRef.current.style.display = "none";
      }, 300);
    }
  };

  const handleSwipe = (direction) => {
    if (direction === "left" || direction === "right") {
      onSwipe(direction, object);
    }
  };

  const handleCardMove = (dir) => {
    if (swipeFeedbackRef.current) {
      swipeFeedbackRef.current.style.display = "block";
      swipeFeedbackRef.current.innerHTML =
        dir === "right"
          ? `<img class = "swipe-feedback__img" src="${
              process.env.PUBLIC_URL + "/images/icon_like.svg"
            }" alt="like" />`
          : `<img class = "swipe-feedback__img" src="${
              process.env.PUBLIC_URL + "/images/icon_dislike.svg"
            }" alt="like" />`;
      swipeFeedbackRef.current.className = `swipe-feedback ${dir}`;
    }
  };

  const handleDetailsClick = () => {
    navigate(`/FullInfo/${object.id}`);
  };

  return (
    <div onTouchEnd={handleTouchEnd}>
      <TinderCard
        className="swipe"
        onSwipe={(dir) => {
          handleSwipe(dir);
        }}
        onCardLeftScreen={() => onCardScreen(object.id)}
        preventSwipe={["up", "down"]}
        swipeThreshold={50}
        swipeRequirementType="position"
        onSwipeRequirementFulfilled={(dir) => handleCardMove(dir)}
      >
        <div className="card">
          <ObjectCard object={object} classNameCard="" classNameIndicator="" />
          <div ref={swipeFeedbackRef} className="swipe-feedback"></div>
          <div className="card__botom">
            <div className="card__top">
              <div className="card__price-status">
                <p className="card__price">{`$ ${object.price}`}</p>
                <p className="card__status">{object.status}</p>
              </div>
              <div className="card__buttons">
                <button
                  className="card__button"
                  onTouchEndCapture={(e) => {
                    e.stopPropagation();
                  }}
                  onTouchStartCapture={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <img
                    className="card__button-img"
                    src={process.env.PUBLIC_URL + "/images/icon_heart.svg"}
                    alt="icon bed"
                  />
                  <p className="card__like-count">{object.likeCounter}</p>
                </button>
                <button
                  className="card__button card__button--info"
                  onTouchEndCapture={(e) => {
                    e.stopPropagation();
                    setTimeout(handleDetailsClick, 70);
                  }}
                  onTouchStartCapture={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <img
                    className="card__button-img"
                    src={process.env.PUBLIC_URL + "/images/icon_info.svg"}
                    alt="icon info"
                  />
                </button>
              </div>
            </div>
            <div className="card__info">
              <ObjectDetails styleClass="" />
              <p className="card__info-time">Сегодня 16:40</p>
            </div>
          </div>
          <button
            onTouchEndCapture={(e) => {
              e.stopPropagation();
              restorePrevious();
            }}
            onTouchStartCapture={(e) => {
              e.stopPropagation();
            }}
            disabled={history.length === 0}
            className="button__back"
          >
            <img
              className="button_icon"
              src={process.env.PUBLIC_URL + "/images/icon_back.svg"}
              alt="icon back"
            />
          </button>
        </div>
      </TinderCard>
    </div>
  );
};

export default SwipeCard;
