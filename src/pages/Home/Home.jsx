import "./Home.scss";
import Weather from "../../components/Weather/Weather";
import { useState, useEffect } from "react";

const Home = ({longitude, latitude}) => {

    const [weather, setWeather] = useState({});

    const apiKey = "c947b43abf2847c3987120210222012"

    const getLocationWeather = async () => {
        const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}&aqi=no`
        const res = await fetch(url);
        const data = await res.json();
        setWeather(data)
    }

    useEffect(() => {
        getLocationWeather()
    }, [latitude, longitude])

    console.log(weather)

    return (
        <div className="home">
            <h1>Hello User</h1>
            {(latitude !== 0) ?
                (<Weather weather={weather} />)
                : <div className="home__loading">Loading...</div>
            }
        </div>
    )

}

export default Home;