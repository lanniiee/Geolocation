
import { useEffect, useState } from "react";
import { getLocationDetails } from "../../data/api/api";
import "./Weather.scss";


const Weather = ({longitude, latitude}) => {

    const [details, setDetails] = useState({});

    const getLocationDetails = async () => {
        const url = `http://api.weatherapi.com/v1/current.json?key=c947b43abf2847c3987120210222012&q=${latitude},${longitude}&aqi=no`
        const res = await fetch(url);
        const data = await res.json();
        setDetails(data)
    }

    useEffect(() => {
        getLocationDetails()
    }, [longitude, latitude])

    console.log(details)

    return (
        <div>
            <h1>{longitude}</h1>
        </div>
    )
}

export default Weather;