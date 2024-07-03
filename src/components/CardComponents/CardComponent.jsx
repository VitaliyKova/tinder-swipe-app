
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./CardComponent.module.css";
import { globalTurk, uae, italy, maldy, tay } from "../resorces/resources";
import globalObject from "../fietch/globalObject";
import { useNavigate } from "react-router-dom";

const cards = [
  { id: 1, country: "Турция", price: "От 60000$", viewers: "48", img: globalTurk, route: "/home" },
  { id: 2, country: "ОАЭ", price: "От 250000$", viewers: "23", img: uae, route: "/home" },
  { id: 3, country: "Италия", price: "От 60000$", viewers: "48", img: italy, route: "/home" },
  { id: 4, country: "Мальдивы", price: "От 250000$", viewers: "23", img: maldy, route: "/home" },
  { id: 5, country: "Таиланд", price: "От 60000$", viewers: "48", img: tay, route: "/home" },
];

const CardComponent = ({ onCardChange }) => {
  const [selectedIndex, setSelectedIndex] = useState(0); // Состояние для отслеживания выбранного индекса
  const [isSwiping, setIsSwiping] = useState(false); // Состояние для отслеживания свайпа
  const [markers, setMarkers] = useState([]); // Состояние для маркеров
  const navigate = useNavigate(); // Хук для навигации

  useEffect(() => {
    // Загрузка данных и установка начальных маркеров
    const initialMarkers = globalObject.aparts.map((apart) => ({
      lat: apart.locations[1].lat,
      lng: apart.locations[1].lng,
      name: apart.name,
    }));
    setMarkers(initialMarkers);
  }, []);

  useEffect(() => {
    if (markers.length > 0) {
      onCardChange(cards[0].country); // Вызов функции изменения текущей страны
    }
  }, [markers]);

  const settings = {
    dots: true, // Показывать точки навигации
    infinite: true, // Бесконечная прокрутка
    speed: 500, // Скорость перехода между слайдами (в миллисекундах)
    slidesToShow: 1.12, // Количество слайдов для отображения
    slidesToScroll: 1, // Количество слайдов для прокрутки
    centerMode: true, // Включить центрирование
    centerPadding: "50px", // Отступ по краям
    beforeChange: (current, next) => {
      onCardChange(cards[next].country); // Вызов функции изменения текущей страны
      setIsSwiping(true); // Устанавливаем состояние, что происходит свайп
    },
    afterChange: (current) => {
      setSelectedIndex(current); // Обновляем индекс выбранного слайда
      setIsSwiping(false); // Сбрасываем состояние свайпа
    },
  };

  const handleCardClick = (route) => {
    if (!isSwiping) {
      navigate(route); // Переход на другой маршрут, если не происходит свайп
    }
  };

  return (
    <div className={styles.cardContainer}>
      <Slider {...settings} className={styles.carousel}>
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`${styles.cardWrapper} ${selectedIndex === index ? styles.active : ""}`}
            onClick={() => handleCardClick(card.route)} // Добавить обработчик клика
          >
            <div className={styles.card}>
              <img src={card.img} alt={card.country} />
              <div className={styles.cardInfo}>
                <div>
                  <h2 className={styles.title}>{card.country}</h2>
                  <p className={styles.subtitle}>{card.price}</p>
                </div>
                <div>
                  <div className={styles.avatarContainer}>
                    {globalObject.brockersReels
                      .slice(0, 5)
                      .map((value, index) => (
                        <div key={index} className={styles.avatar}>
                          <img
                            src={value.imgReels}
                            alt="avatar"
                            className={styles.avatarImage}
                          />
                        </div>
                      ))}
                    {globalObject.brockersReels.length > 5 && (
                      <div className={styles.moreCount}>
                        +{globalObject.brockersReels.length - 5}
                      </div>
                    )}
                  </div>
                  <p className={styles.subtitle}>Сейчас смотрят</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardComponent;
