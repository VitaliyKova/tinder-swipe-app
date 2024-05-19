// import React, { useState } from "react";
// import SwipeCard from "./components/SwipeCard";
// import "./App.css";

// const characters = [
//   {
//     name: "Alanya",
//     url: [
//       "https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663318944_4-mykaleidoscope-ru-p-villi-v-turtsii-krasivo-4.jpg",
//       "https://static.prian.ru/uploads/2021_10/11/202110110212011781573346o.jpg",
//       "https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663318924_28-mykaleidoscope-ru-p-villi-v-turtsii-krasivo-29.jpg",
//     ],
//     description: "Описание апартаментов в Алании",
//   },
//   {
//     name: "Antalya",
//     url: [
//       "https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663318934_61-mykaleidoscope-ru-p-villi-v-turtsii-krasivo-63.jpg",
//       "https://respekt-an.ru/attachments/f/9/f96cc4c6bc1418efe8d77df9485f184e.jpg",
//       "https://pro-dachnikov.com/uploads/posts/2021-10/1633508122_15-p-krasivie-doma-v-turtsii-foto-18.jpg",
//     ],
//     description: "Описание апартаментов в Анталии",
//   },
//   {
//     name: "Izmir",
//     url: [
//       "https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663318929_21-mykaleidoscope-ru-p-villi-v-turtsii-krasivo-22.jpg",
//       "https://pro-dachnikov.com/uploads/posts/2021-10/1633724253_48-p-doma-v-turtsii-foto-52.jpg",
//       "https://i.pinimg.com/originals/78/fb/a2/78fba2b7d5ddaef70f2d62c2435f4d3c.jpg",
//     ],
//     description: "Описание апартаментов в Измире",
//   },
// ];

// function App() {
//   const [lastDirection, setLastDirection] = useState();

//   const swiped = (direction, nameToDelete) => {
//     setLastDirection(direction);
//   };

//   const outOfFrame = (name) => {
//     console.log(name + " left the screen!");
//   };

//   return (
//     <div className="app">
//       <div className="cardContainer">
//         {characters.map((character) => (
//           <SwipeCard
//             key={character.name}
//             character={character}
//             onSwipe={swiped}
//             onCardLeftScreen={outOfFrame}
//           />
//         ))}
//       </div>

//     </div>
//   );
// }

// export default App;

// TEST

import React, { useState } from "react";
import SwipeCard from "./components/SwipeCard";
import "./App.css";

const characters = [
  {
    name: "Alanya",
    url: [
      "https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663318944_4-mykaleidoscope-ru-p-villi-v-turtsii-krasivo-4.jpg",
      "https://static.prian.ru/uploads/2021_10/11/202110110212011781573346o.jpg",
      "https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663318924_28-mykaleidoscope-ru-p-villi-v-turtsii-krasivo-29.jpg",
    ],
    description: "Описание апартаментов в Алании",
  },
  {
    name: "Antalya",
    url: [
      "https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663318934_61-mykaleidoscope-ru-p-villi-v-turtsii-krasivo-63.jpg",
      "https://respekt-an.ru/attachments/f/9/f96cc4c6bc1418efe8d77df9485f184e.jpg",
      "https://pro-dachnikov.com/uploads/posts/2021-10/1633508122_15-p-krasivie-doma-v-turtsii-foto-18.jpg",
    ],
    description: "Описание апартаментов в Анталии",
  },
  {
    name: "Izmir",
    url: [
      "https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663318929_21-mykaleidoscope-ru-p-villi-v-turtsii-krasivo-22.jpg",
      "https://pro-dachnikov.com/uploads/posts/2021-10/1633724253_48-p-doma-v-turtsii-foto-52.jpg",
      "https://i.pinimg.com/originals/78/fb/a2/78fba2b7d5ddaef70f2d62c2435f4d3c.jpg",
    ],
    description: "Описание апартаментов в Измире",
  },
];

function App() {
  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction, nameToDelete) => {
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  return (
    <div className="app">
      <div className="cardContainer">
        {characters.map((character) => (
          <SwipeCard
            key={character.name}
            character={character}
            onSwipe={swiped}
            onCardLeftScreen={outOfFrame}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

