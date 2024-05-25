// MapComponent.jsx
import React from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Обновление путей к иконкам Leaflet для корректного отображения
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const MapComponent = ({ positions, centerPosition }) => {

  return (
    <MapContainer
      center={centerPosition}
      zoom={16}
      style={{ height: "235px", width: "100%", borderRadius: "25px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {positions.map((pos, index) => (
        <Marker key={index} position={[pos.lat, pos.lng]}>
          <Popup>{pos.name}</Popup>
        </Marker>
      ))}
      <Polyline
        positions={positions.map((pos) => [pos.lat, pos.lng])}
        color="rgb(8, 199, 176)"
      />
    </MapContainer>
  );
};

export default MapComponent;
