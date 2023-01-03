import "./Weather.scss";

const Weather = ({weather}) => {

    const {
        current,
        location,
        forecast
    } = weather;


    return (
        <div className="weather">
                <h1 className="weather__heading">Today</h1>
                <div className="weather-container">
                    <div className="weather-container__mainInfo">
                        <img className="weather-container__mainInfo--icon" src={current.condition.icon} alt="icon" />
                        <p className="weather-container__mainInfo--condition">{current.condition.text}</p>
                    </div>
                    <div className="weather-container__moreInfo">
                        <p className="weather-container__moreInfo--temp">Max: {forecast.forecastday[0].day.maxtemp_c}°C</p>
                        <p className="weather-container__moreInfo--temp">Min: {forecast.forecastday[0].day.mintemp_c}°C</p>
                    </div>
                </div>
        </div>
    )
}

export default Weather;