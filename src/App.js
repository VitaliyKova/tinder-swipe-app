import React, { useState } from "react";
import SwipeCard from "./components/SwipeCard";
import UpperBlock from "./components/UpperBlock";
import SelectionBloc from "./components/SelectionBloc";
import Filter from "./components/Filter";
import "./App.css";

const globalObject = {
  name: "Турция",
  brokers: [
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
      name: "Alanya",
      url: [
        "https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663318944_4-mykaleidoscope-ru-p-villi-v-turtsii-krasivo-4.jpg",
        "https://static.prian.ru/uploads/2021_10/11/202110110212011781573346o.jpg",
        "https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663318924_28-mykaleidoscope-ru-p-villi-v-turtsii-krasivo-29.jpg",
      ],
      description: "Описание апартаментов в Алании",
    },
    {
      id: 2,
      name: "Antalya",
      url: [
        "https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663318934_61-mykaleidoscope-ru-p-villi-v-turtsii-krasivo-63.jpg",
        "https://respekt-an.ru/attachments/f/9/f96cc4c6bc1418efe8d77df9485f184e.jpg",
        "https://pro-dachnikov.com/uploads/posts/2021-10/1633508122_15-p-krasivie-doma-v-turtsii-foto-18.jpg",
      ],
      description: "Описание апартаментов в Анталии",
    },
    {
      id: 3,
      name: "Izmir",
      url: [
        "https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663318929_21-mykaleidoscope-ru-p-villi-v-turtsii-krasivo-22.jpg",
        "https://pro-dachnikov.com/uploads/posts/2021-10/1633724253_48-p-doma-v-turtsii-foto-52.jpg",
        "https://i.pinimgReels.com/originals/78/fb/a2/78fba2b7d5ddaef70f2d62c2435f4d3c.jpg",
      ],
      description: "Описание апартаментов в Измире",
    },
  ],
};

function App() {
  const [lastDirection, setLastDirection] = useState();
  const [history, setHistory] = useState([]);
  const [currentList, setCurrentList] = useState(globalObject.aparts);

  const swiped = (direction) => {
    setLastDirection(direction);
  };

  const outOfFrame = (idToDelete) => {
    setCurrentList((prevList) => {
      const card = prevList.find((character) => character.id === idToDelete);
      if (card) {
        setHistory((prevHistory) => [...prevHistory, card]);
      }
      return prevList.filter((character) => character.id !== idToDelete);
    });
    console.log(idToDelete + " added to the history!");
  };

  const restorePrevious = () => {
    setHistory((prevHistory) => {
      if (prevHistory.length > 0) {
        const previousCard = prevHistory[prevHistory.length - 1];
        setCurrentList((prevList) => {
          // Проверяем, чтобы не было дубликатов
          if (!prevList.some((character) => character.id === previousCard.id)) {
            return [...prevList, previousCard]; // Добавляем карточку в конец списка
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
      <UpperBlock country={globalObject.name} brocker={globalObject.brokers} />
      <SelectionBloc/>
      <Filter aparts={globalObject.aparts}/>
      <div className="cardContainer">
        {currentList.map((character) => (
          <SwipeCard
            key={character.id}
            character={character}
            onSwipe={swiped}
            onCardScreen={outOfFrame}
            restorePrevious={restorePrevious}
            history={history}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
