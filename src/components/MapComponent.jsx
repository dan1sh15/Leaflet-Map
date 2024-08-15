// MapComponent.js
import React, { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = ({ center, zoom, children }) => {
  const [mapCenter, setMapCenter] = useState(center); // Use state to dynamically update map center

  return (
    <MapContainer center={mapCenter} zoom={zoom} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, { setMapCenter }); // Pass setMapCenter to children components
      })}
    </MapContainer>
  );
};

export default MapComponent;
