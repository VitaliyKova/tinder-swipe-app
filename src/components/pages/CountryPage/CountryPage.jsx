import React, { useState, useEffect } from 'react';
import CardComponent from '../../CardComponents/CardComponent';
import styles from './CountryPage.module.css';
import MapHome from '../../MapHome/MapHome';
import SearchField from '../../searchField/SearchField';

const CountryPage = () => {
  const [currentCountry, setCurrentCountry] = useState('');

  useEffect(() => {
    setCurrentCountry('Турция'); // Устанавливаем начальное значение для текущей страны
  }, []);

  return (
    <div className={styles.container}>
      <SearchField/>
      <MapHome currentCountry={currentCountry} />
      <CardComponent onCardChange={setCurrentCountry} />
    </div>
  );
};

export default CountryPage;
