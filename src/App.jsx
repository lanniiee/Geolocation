import './App.scss';
import Home from './pages/Home/Home';
import { useEffect, useState } from "react";
import apikeys from "./data/api/api.js";
import Forecast from './components/Forecast/Forecast';

function App() {

  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [weather, setWeather] = useState({});
  const [dailyForecast, setDailyForecast] = useState([]);

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

  const getLocationWeather = async () => {
    const url = `http://api.weatherapi.com/v1/forecast.json?key=${apikeys.key}&q=${latitude},${longitude}&days=${10}&aqi=no&alerts=no`
    const res = await fetch(url);
    const data = await res.json();
    setWeather(data)

    const daily = data.forecast.forecastday.map((day) => {
      return (
        <Forecast key={day.date} weather={day}/>
      )
    })
    setDailyForecast(daily)
}

useEffect(() => {
    getLocationWeather()
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
      <Home longitude={longitude} latitude={latitude} greeting={greeting} weather={weather} dailyForecast={dailyForecast}/>
    </div>
  );
}

export default App;
