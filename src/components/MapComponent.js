import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = ({ center, zoom, markers }) => (
    <MapContainer center={center} zoom={zoom} style={{ height: '50vh', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {markers.map((marker, index) => (
            <Marker key={index} position={marker.position}>
                <Popup>{marker.text}</Popup>
            </Marker>
        ))}
    </MapContainer>
);

export default MapComponent;