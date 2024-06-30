import React, { useRef, useEffect, useState } from 'react';
import styles from './MapHome.module.css';
import { map } from '../resorces/resources';

const countryCoordinates = {
  Turkey: { x: 40, y: 38 },
  UAE: { x: 51, y: 42.7 },
  Italy: { x: 27, y: 37.7 },
  Maldy: { x: 64, y: 50 },
  Tailand: { x: 77, y: 45 }
  // Добавьте координаты других стран здесь
};

const MapHome = ({ currentCountry }) => {
  const mapRef = useRef(null);
  const containerRef = useRef(null);
  const [mapSize, setMapSize] = useState({ width: 0, height: 0 });
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      if (mapRef.current && containerRef.current) {
        setMapSize({
          width: mapRef.current.offsetWidth,
          height: mapRef.current.offsetHeight,
        });
        setContainerSize({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial size

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const position = countryCoordinates[currentCountry];

  const markerStyle = {
    top: position ? `${(position.y / 100) * mapSize.height}px` : '0%',
    left: position ? `${(position.x / 100) * mapSize.width}px` : '0%',
    transform: 'translate(-50%, -50%)',
  };

  const mapStyle = {
    transform: position
      ? `translate(-${position.x}%, -${position.y}%) scale(2)` // Scale the map for better visibility
      : 'scale(2)',
  };

  return (
    <div className={styles.mapContainer} ref={containerRef}>
      <div className={styles.mapWrapper} style={mapStyle}>
        <img src={map} alt="Map" className={styles.mapImage} ref={mapRef} />
        {position && (
          <div className={styles.marker} style={markerStyle}></div>
        )}
      </div>
    </div>
  );
};

export default MapHome;

