import './App.scss';
import Home from './pages/Home/Home';
import { useEffect, useState } from "react";

function App() {

  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  const getLocation = () => {
      if (navigator.geolocation) {
          navigator.geolocation.watchPosition(showPosition);
      } else {
          return "GeoLocation is not supported by this browser."
      }
  }

  const showPosition = (position) => {
      setLatitude(position.coords.latitude)
      setLongitude(position.coords.longitude)
  }

  useEffect(() => {
      getLocation()
  }, [getLocation()])


  return (
    <div className="App">
      <Home longitude={longitude} latitude={latitude}/>
    </div>
  );
}

export default App;
