import "./Home.scss";
import Weather from "../../components/Weather/Weather";
import { useState, useEffect } from "react";
import apikeys from "../../data/api/api.js";
import Forecast from "../../components/Forecast/Forecast";

const Home = ({longitude, latitude, greeting}) => {

    const [weather, setWeather] = useState({});

    const getLocationWeather = async () => {
        const url = `http://api.weatherapi.com/v1/forecast.json?key=${apikeys.key}&q=${latitude},${longitude}&days=${10}&aqi=no&alerts=no`
        const res = await fetch(url);
        const data = await res.json();
        setWeather(data)
    }

    useEffect(() => {
        getLocationWeather()
    }, [latitude, longitude])

    return (
        <div className="home">
            <h1 className="home__greeting">{greeting}!</h1>
            {(latitude !== 0) ?
                (<>
                    <Weather weather={weather} />
                    <Forecast weather={weather}/>
                </>)
                : <div className="home__loading">Loading...</div>
            }
        </div>
    )

}

export default Home;