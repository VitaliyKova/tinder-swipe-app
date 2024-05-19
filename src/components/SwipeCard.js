// import React, { useState, useRef, useEffect } from "react";
// import TinderCard from "react-tinder-card";
// import "./SwipeCard.css";

// const SwipeCard = ({
//   character,
//   onSwipe,
//   onCardLeftScreen,
// }) => {
//   const [item, setItem] = useState(0);
//   const touchStartX = useRef(null);
//   const touchStartY = useRef(null);

//   const handleTouchStart = (e) => {
//     touchStartX.current = e.targetTouches[0].clientX;
//     touchStartY.current = e.targetTouches[0].clientY;
//   };

//   const handleTouchEnd = (e) => {
//     const touchEndX = e.changedTouches[0].clientX;
//     const touchEndY = e.changedTouches[0].clientY;
//     const threshold = 50;
//     if (touchStartX.current !== null && touchEndX !== null) {
//       const distanceX = touchStartX.current - touchEndX;
//       const distanceY = touchStartY.current - touchEndY;

//       if (Math.abs(distanceX) < threshold && Math.abs(distanceY) < threshold) {
//         newItem();
//       }
//     }
//     touchStartX.current = null;
//     touchStartY.current = null;
//   };

//   const newItem = () => {
//     setItem((prevItem) => {
//       return prevItem === character.url.length - 1 ? 0 : prevItem + 1;
//     });
//   };

//   return (
//     <TinderCard
//       className="swipe"
//       onSwipe={(dir) => {
//         onSwipe(dir, character.name);
//       }}
//       onCardLeftScreen={() => onCardLeftScreen(character.name)}
//       preventSwipe={["up", "down"]}
//     >
//       <div
//         style={{ backgroundImage: `url(${character.url[item]})` }}
//         className="card"
//         onTouchStart={handleTouchStart}
//         onTouchEnd={handleTouchEnd}
//       >
//         <h3>{character.name}</h3>
//         <div className="indicator-container">
//           {character.url.map((_, index) => (
//             <div
//               key={index}
//               className={`indicator ${index === item ? "active" : ""}`}
//             ></div>
//           ))}
//         </div>
//       </div>
//     </TinderCard>
//   );
// };

// export default SwipeCard;

// TEST

import React, { useState, useRef } from "react";
import TinderCard from "react-tinder-card";
import "./SwipeCard.css";

const SwipeCard = ({ character, onSwipe, onCardLeftScreen }) => {
  const [item, setItem] = useState(0);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchStartY.current = e.targetTouches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const threshold = 50;
    if (touchStartX.current !== null && touchEndX !== null) {
      const distanceX = touchStartX.current - touchEndX;
      const distanceY = touchStartY.current - touchEndY;
      console.log(distanceY);

      if (distanceY > threshold) {
        setIsDescriptionExpanded(true);
      } else if (distanceY < threshold) {
        setIsDescriptionExpanded(false);
      }

      if (Math.abs(distanceX) < threshold && Math.abs(distanceY) < threshold) {
        newItem();
      }
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  const newItem = () => {
    setItem((prevItem) => {
      return prevItem === character.url.length - 1 ? 0 : prevItem + 1;
    });
  };

  return (
    <div onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <TinderCard
        className="swipe"
        onSwipe={(dir) => {
          onSwipe(dir, character.name);
        }}
        onCardLeftScreen={() => onCardLeftScreen(character.name)}
        preventSwipe={["up", "down"]}
      >
        <div
          style={{ backgroundImage: `url(${character.url[item]})` }}
          className="card"
        >
          <h3>{character.name}</h3>
          <div className="indicator-container">
            {character.url.map((_, index) => (
              <div
                key={index}
                className={`indicator ${index === item ? "active" : ""}`}
              ></div>
            ))}
          </div>
        </div>
      </TinderCard>
      <div
        className={`description ${isDescriptionExpanded ? "expanded" : "none"}`}
      >
        <p className="description__text">{character.description}</p>
      </div>
    </div>
  );
};

export default SwipeCard;
