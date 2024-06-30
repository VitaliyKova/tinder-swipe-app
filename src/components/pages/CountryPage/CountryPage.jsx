import React, { useState } from 'react';
import CardComponent from '../../CardComponents/CardComponent';
import styles from './CountryPage.module.css';
import MapHome from '../../MapHome/MapHome';

function CountryPage() {
  const [currentCountry, setCurrentCountry] = useState('Turkey'); // Начальная страна

  return (
    <div className={styles.container}>
      <MapHome currentCountry={currentCountry} />
      <CardComponent onCardChange={setCurrentCountry} />
    </div>
  );
}

export default CountryPage;
