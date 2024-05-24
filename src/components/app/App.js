import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SwipeCard from "../swipeCard/SwipeCard";
import UpperBlock from "../upperBlock/UpperBlock";
import SelectionBloc from "../selectionBlock/SelectionBlock";
import FullInfo from "../FullInfo/FullInfo";
import globalObject from "../fietch/globalObject";
import Filter from "../filter/Filter";
import "./app.css";
import BotomBlock from "../botomBlock/BotomBlock";

function App() {
  const [lastDirection, setLastDirection] = useState();
  const [history, setHistory] = useState([]);
  const [currentList, setCurrentList] = useState(globalObject.aparts);
  const [currentBrockerList, setCurrentBrockerList] = useState(
    globalObject.aparts
  );
  const [currentBrocker, setCurrentBrocker] = useState(
    currentList[currentList.length > 0 ? currentList.length - 1 : null]
  );

  useEffect(() => {
    if (currentList.length > 0) {
      setCurrentBrocker(
        currentList[currentList.length > 0 ? currentList.length - 1 : null]
      );
    }
  }, [history]);

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
          // Проверяем, чтобы не было дубликатов
          if (!prevList.some((object) => object.id === previousCard.id)) {
            return [...prevList, previousCard];
            // Добавляем карточку в конец списка
          }
          return prevList;
        });
        return prevHistory.slice(0, -1);
      }
      return prevHistory;
    });
  };

  return (
    <Router basename="/tinder-swipe-app">
      <Routes>
        <Route
          path="/"
          element={
            <div className="app">
              <UpperBlock
                country={globalObject.name}
                brocker={globalObject.brockersReels}
              />
              <SelectionBloc />
              <Filter aparts={globalObject.aparts} />
              <div className="cardContainer">
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
              {currentList.length >= 1 && (
                <BotomBlock brocker={currentBrocker} />
              )}
            </div>
          }
        />
        <Route path="/FullInfo/:id" element={<FullInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
