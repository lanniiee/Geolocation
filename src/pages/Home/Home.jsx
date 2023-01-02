import "./Home.scss";
import Weather from "../../components/Weather/Weather";
import { useState, useEffect } from "react";
import apikeys from "../../data/api/api.js";
import Forecast from "../../components/Forecast/Forecast";

const Home = ({longitude, latitude, greeting}) => {

    const [weather, setWeather] = useState({});
    let forecast;

    const getLocationWeather = async () => {
        const url = `http://api.weatherapi.com/v1/forecast.json?key=${apikeys.key}&q=${latitude},${longitude}&days=${10}&aqi=no&alerts=no`
        const res = await fetch(url);
        const data = await res.json();
        setWeather(data)
    }

    useEffect(() => {
        getLocationWeather()
    }, [latitude, longitude])

    if (latitude !== 0) {
        forecast = weather.forecast.forecastday.map((day) => {
            return (
                <Forecast key={day.date} weather={day}/>
            )
        })
    }

    return (
        <div className="home">
            {(latitude !== 0) ?
                (<>
                    <h1 className="home__greeting">{greeting} {weather.location.name}!</h1>
                    <Weather weather={weather} />
                    {forecast}
                </>)
                : (
                    <div className="home__loading">
                        <h1 className="home__greeting">{greeting}!</h1>
                        <p className="home__loading--message">Loading...</p>
                    </div>
                )
            }
        </div>
    )

}

export default Home;