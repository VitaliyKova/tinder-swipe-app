import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './CardComponent.module.css';
import { globalTurk } from '../resorces/resources';

const cards = [
  { id: 1, country: 'Turkey', price: 'От 60000$', viewers: '48', img: globalTurk },
  { id: 2, country: 'UAE', price: 'От 250000$', viewers: '23' },
  { id: 3, country: 'Italy', price: 'От 60000$', viewers: '48' },
  { id: 4, country: 'Maldy', price: 'От 250000$', viewers: '23' },
  { id: 5, country: 'Tailand', price: 'От 60000$', viewers: '48' },
];

const CardComponent = ({ onCardChange }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1.1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '50px',
    beforeChange: (current, next) => onCardChange(cards[next].country),
    afterChange: (current) => setSelectedIndex(current),
  };

  return (
    <div className={styles.cardContainer}>
      <Slider {...settings} className={styles.carousel}>
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`${styles.cardWrapper} ${selectedIndex === index ? styles.active : ''}`}
          >
            <div className={styles.card}>
              <img src={card.img} alt="turk" />
              <div className={styles.cardText}>
                <h2>{card.country}</h2>
                <p>{card.price}</p>
                <p>Сейчас смотрят: {card.viewers}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardComponent;
