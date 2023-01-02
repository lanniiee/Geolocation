import './App.scss';
import Home from './pages/Home/Home';
import { useEffect, useState } from "react";

function App() {

  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  const showPosition = (position) => {
      setLatitude(position.coords.latitude)
      setLongitude(position.coords.longitude)
  }

  const getLocation = async () => {
      if (navigator.geolocation) {
          navigator.geolocation.watchPosition(showPosition);
      } else {
          return "GeoLocation is not supported by this browser."
      }
  }

  useEffect(() => {
    getLocation()
  }, [latitude, longitude])

  const currentHour = new Date().getHours();
  let greeting = "Good Morning"

  if (currentHour >= 12) {
    greeting = "Good Afternoon"
  }

  if (currentHour >=18) {
    greeting = "Good Evening"
  }

  return (
    <div className="App">
      <Home longitude={longitude} latitude={latitude} greeting={greeting}/>
    </div>
  );
}

export default App;
