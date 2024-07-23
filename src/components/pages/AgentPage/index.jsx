import { React, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import globalObject from "../../fietch/globalObject";
import Navigator from "../../navigator/Navigator";
import BotomBlock from "../../botomBlock/BotomBlock";
import Filter from "../../filter/Filter";
import Header from "../../Header";
import "./AgentPage.css";
import SwipeCard from "../../swipeCard/SwipeCard";
import LoadingSpiner from "../../LoadingSpiner/LoadingSpiner";

const AgentPage = () => {
  // const { id } = useParams();
  // const apartment = globalObject.aparts.find((ap) => ap.id === parseInt(id));
  const apartment = globalObject.aparts.find((ap) => ap.id === 5); // Конкретный агент
  const [isExpended, setIsExpended] = useState(false);
  const [lastDirection, setLastDirection] = useState();
  const [history, setHistory] = useState([]);
  const [currentList, setCurrentList] = useState([]);
  const [currentBrockerList, setCurrentBrockerList] = useState([]);
  const [currentBrocker, setCurrentBrocker] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const preloadImages = () => {
      return Promise.all(
        globalObject.aparts.map((apartment) =>
          Promise.all(
            apartment.url.map((src) => {
              return new Promise((resolve) => {
                const img = new Image();
                img.src = src;
                img.onload = resolve;
                img.onerror = resolve;
              });
            })
          )
        )
      );
    };

    preloadImages().then(() => {
      setCurrentList(globalObject.aparts);
      setCurrentBrockerList(globalObject.aparts);
      setCurrentBrocker(
        globalObject.aparts[globalObject.aparts.length - 1] || null
      );
      setLoading(false);
    });
  }, []);

//   useEffect(() => {
//     if (currentList.length > 0) {
//       setCurrentBrocker(currentList[currentList.length - 1] || null);
//     }
//   }, [history]);

  const swiped = (direction, aparts) => {
    setLastDirection(direction);

    setCurrentBrockerList((prevList) => {
      const newList = prevList.filter((object) => object.id !== aparts.id);
      if (newList.length > 0) {
        setCurrentBrocker(newList[newList.length - 1] || null);
      }
      return newList;
    });
  };

  const outOfFrame = (idToDelete) => {
    setCurrentList((prevList) => {
      const card = prevList.find((object) => object.id === idToDelete);
      if (card) {
        setHistory((prevHistory) => [...prevHistory, card]);
      }
      const newList = prevList.filter((object) => object.id !== idToDelete);
      return newList;
    });
  };

  const resetCards = () => {
    setCurrentList(globalObject.aparts);
    setHistory([]);
  };

  const restorePrevious = () => {
    setHistory((prevHistory) => {
      if (prevHistory.length > 0) {
        const previousCard = prevHistory[prevHistory.length - 1];
        setCurrentList((prevList) => {
          if (!prevList.some((object) => object.id === previousCard.id)) {
            return [...prevList, previousCard];
          }
          return prevList;
        });
        return prevHistory.slice(0, -1);
      }
      return prevHistory;
    });
  };

  const toggleExpand = () => {
    setIsExpended(!isExpended);
  };

  return loading ? (
    <LoadingSpiner />
  ) : (
    <div className="full-info agent-full-info">
      <div className="full-info__card">
        <Header brocker={apartment} />
        <Filter aparts={globalObject.aparts} filterText={"Объектов"} />
        <div className="cardContainerAgent">
          {currentList.map((object) => (
            <SwipeCard
              key={object.id}
              object={object}
              onSwipe={swiped}
              onCardScreen={outOfFrame}
              restorePrevious={restorePrevious}
              history={history}
            />
          ))}
          {currentList.length === 0 && (
            <div>
              <p className="cardContainer__text">
                Вы просмотрели все варианты!
              </p>
              <button
                onClick={resetCards}
                className="cardContainer__reset-button"
              >
                Показать сначала
              </button>
            </div>
          )}
        </div>
      </div>
      <BotomBlock brocker={apartment} />
      {/* <Navigator /> */}
    </div>
  );
};

export default AgentPage;
