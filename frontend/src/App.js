import React, {useState, useEffect} from "react";
import Info from './Info';
import axios from 'axios'
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet"
import './App.css'

function App() {

  const [points, setPoints] = useState(null);

  const position = [-6.142837378870265, 106.77709118108051]

  const getPoints = async () => {
    try {
      let res = await axios.get('http://localhost:5000/point');

      setPoints(res.data);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPoints()
  }, [])
  


  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {
      points?.map((point) => 
      <Marker key={point.id} position={[point.latitude, point.longitude]}>
      <Popup>
        <Info point={point} />
      </Popup>
    </Marker>)
    }
  </MapContainer>
  );
}

export default App;
