import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import pline from './polyline';
import { GeoJsonObject } from 'geojson';
import geoJson83 from './boundary.min-83kb.json'

const geoData83 = geoJson83 as GeoJsonObject;

export default class App extends React.Component {
 render(){
  return <MapContainer className="map" center={[53.3915, -2.125143]} zoom={12} maxZoom={30} scrollWheelZoom={true}>
          <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {/* Minified 83kb down from 2mb */}
          <GeoJSON data={geoData83} style={{color: 'blue', weight: 4, opacity: 1, fillColor: '#000', fillOpacity: 0}} />

          {/* Polyline Data only - 10kb */}
          <Polyline positions={pline} color="red" />

        </MapContainer>
 }
}
