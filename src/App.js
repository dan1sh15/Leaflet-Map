// App.js
import React from 'react';
import MapComponent from './components/MapComponent';
import MarkerComponent from './components/MarkerComponent';

const App = () => {
  const markers = [
    { position: [28.6139, 77.209], label: "New Delhi" },
    { position: [19.076, 72.8777], label: "Mumbai" },
    { position: [13.0827, 80.2707], label: "Chennai" },
    { position: [22.5726, 88.3639], label: "Kolkata" },
    { position: [12.9716, 77.5946], label: "Bangalore" },
  ];

  const initialCenter = [20.5937, 78.9629]; // Initial center of the map (India)

  return (
    <div>
      <MapComponent center={initialCenter} zoom={5}>
        {markers.map((marker, idx) => (
          <MarkerComponent key={idx} position={marker.position} label={marker.label} />
        ))}
      </MapComponent>
    </div>
  );
};

export default App;
