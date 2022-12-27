
import { useEffect, useState } from "react";
import "./Weather.scss";


const Weather = ({longitude, latitude}) => {

    const [details, setDetails] = useState({});
    const [icon, setIcon] = useState("");
    const [locationName, setLocationName] = useState("");
    const [lastUpdated, setLastUpdated] = useState("");


    const getLocationDetails = async () => {
        const url = `http://api.weatherapi.com/v1/current.json?key=c947b43abf2847c3987120210222012&q=${latitude},${longitude}&aqi=no`
        const res = await fetch(url);
        const data = await res.json();
        setDetails(data)
        setIcon(data.current.condition.icon)
        setLocationName(data.location.name)
        setLastUpdated(data.current.last_updated)
    }

    useEffect(() => {
        getLocationDetails()
    }, [latitude, longitude])

    console.log(details)

    return (
        <div className="weather">
            <h1 className="weather__name">{locationName}</h1>
            <img className="weather__icon" src={icon} alt="icon" />
            <p className="weather__date">{lastUpdated}</p>
        </div>
    )
}

export default Weather;