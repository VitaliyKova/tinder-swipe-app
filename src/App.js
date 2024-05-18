import React, { useState } from 'react';
import SwipeCard from './components/SwipeCard';
import './App.css';

const characters = [
  {
    name: 'Alanya',
    url: ['https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663318944_4-mykaleidoscope-ru-p-villi-v-turtsii-krasivo-4.jpg',
    'https://respekt-an.ru/attachments/f/9/f96cc4c6bc1418efe8d77df9485f184e.jpg',
    'https://i.pinimg.com/originals/78/fb/a2/78fba2b7d5ddaef70f2d62c2435f4d3c.jpg',
    ]
  },
  {
    name: 'Antalya',
    url: ['https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663318944_4-mykaleidoscope-ru-p-villi-v-turtsii-krasivo-4.jpg',
    'https://respekt-an.ru/attachments/f/9/f96cc4c6bc1418efe8d77df9485f184e.jpg',
    'https://i.pinimg.com/originals/78/fb/a2/78fba2b7d5ddaef70f2d62c2435f4d3c.jpg',
    ]
  },
  {
    name: 'Izmir',
    url: ['https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663318944_4-mykaleidoscope-ru-p-villi-v-turtsii-krasivo-4.jpg',
    'https://respekt-an.ru/attachments/f/9/f96cc4c6bc1418efe8d77df9485f184e.jpg',
    'https://i.pinimg.com/originals/78/fb/a2/78fba2b7d5ddaef70f2d62c2435f4d3c.jpg',
    ]
  },
];

function App() {
  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!');
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
