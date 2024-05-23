import React, { useEffect, useState } from "react";
import SwipeCard from "../swipeCard/SwipeCard";
import UpperBlock from "../upperBlock/UpperBlock";
import SelectionBloc from "../selectionBlock/SelectionBlock";
import Filter from "../filter/Filter";
import "./app.css";
import BotomBlock from "../botomBlock/BotomBlock";

const globalObject = {
  name: "Турция",
  brockersReels: [
    {
      id: 1,
      name: "Алина",
      avatar: true,
      viewedStor: true,
      imgReels: process.env.PUBLIC_URL + "/images/stor1.jpeg",
    },
    {
      id: 2,
      name: "Ксения",
      avatar: true,
      viewedStor: true,
      imgReels: process.env.PUBLIC_URL + "/images/stor2.jpg",
    },
    {
      id: 3,
      name: "Евгений",
      avatar: true,
      viewedStor: true,
      imgReels: process.env.PUBLIC_URL + "/images/stor3.jpg",
    },
    {
      id: 4,
      name: "Татьяна",
      avatar: true,
      viewedStor: false,
      imgReels: process.env.PUBLIC_URL + "/images/stor4.jpeg",
    },
    {
      id: 5,
      name: "Алина",
      avatar: true,
      viewedStor: false,
      imgReels: process.env.PUBLIC_URL + "/images/stor5.jpg",
    },
    {
      id: 6,
      name: "Алина",
      avatar: true,
      viewedStor: true,
      imgReels: process.env.PUBLIC_URL + "/images/stor6.jpg",
    },
    {
      id: 7,
      name: "Алина",
      avatar: true,
      viewedStor: true,
      imgReels: process.env.PUBLIC_URL + "/images/stor7.jpg",
    },
    {
      id: 8,
      name: "Алина",
      avatar: true,
      viewedStor: true,
      imgReels: process.env.PUBLIC_URL + "/images/stor1.jpeg",
    },
    {
      id: 9,
      name: "Алина",
      avatar: true,
      viewedStor: true,
      imgReels: process.env.PUBLIC_URL + "/images/stor2.jpg",
    },
    {
      id: 10,
      name: "Алина",
      avatar: true,
      viewedStor: true,
      imgReels: process.env.PUBLIC_URL + "/images/stor3.jpg",
    },
  ],
  aparts: [
    {
      id: 1,
      name: "Wings Tower",
      brocker: "Татьяна",
      brockerAvatar: process.env.PUBLIC_URL + "/images/brocker_avatar3.jpg",
      price: 40000,
      status: "Продажа",
      likeCounter: 52,
      url: [
        process.env.PUBLIC_URL + "/images/aparts1.png",
        process.env.PUBLIC_URL + "/images/aparts2.png",
        process.env.PUBLIC_URL + "/images/aparts3.png",
        process.env.PUBLIC_URL + "/images/aparts4.png",
        process.env.PUBLIC_URL + "/images/aparts5.png",
      ],
      description: "Описание апартаментов в Алании",
    },
    {
      id: 2,
      name: "Wings Tower",
      brocker: "Алина",
      brockerAvatar: process.env.PUBLIC_URL + "/images/brocker_avatar2.jpg",
      price: 30000,
      status: "Продажа",
      likeCounter: 32,
      url: [
        process.env.PUBLIC_URL + "/images/aparts6.png",
        process.env.PUBLIC_URL + "/images/aparts7.png",
        process.env.PUBLIC_URL + "/images/aparts8.png",
        process.env.PUBLIC_URL + "/images/aparts9.png",
        process.env.PUBLIC_URL + "/images/aparts10.png",
      ],
      description: "Описание апартаментов в Анталии",
    },
    {
      id: 3,
      name: "Wings Tower",
      brocker: "Светлана",
      brockerAvatar: process.env.PUBLIC_URL + "/images/brocker_avatar1.jpg",
      price: 50000,
      status: "Продажа",
      likeCounter: 22,
      url: [
        process.env.PUBLIC_URL + "/images/aparts11.png",
        process.env.PUBLIC_URL + "/images/aparts12.png",
        process.env.PUBLIC_URL + "/images/aparts13.png",
        process.env.PUBLIC_URL + "/images/aparts14.png",
        process.env.PUBLIC_URL + "/images/aparts1.png",
      ],
      description: "Описание апартаментов в Измире",
    },
  ],
};

function App() {
  const [lastDirection, setLastDirection] = useState();
  const [history, setHistory] = useState([]);
  const [currentList, setCurrentList] = useState(globalObject.aparts);
  const [currentBrockerList, setCurrentBrockerList] = useState(globalObject.aparts);
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
            <p className="cardContainer__text">Вы просмотрели все варианты!</p>
            <button
              onClick={resetCards}
              className="cardContainer__reset-button"
            >
              Показать сначала
            </button>
          </div>
        )}
      </div>
      {currentList.length >= 1 && <BotomBlock brocker={currentBrocker} />}
    </div>
  );
}

export default App;
