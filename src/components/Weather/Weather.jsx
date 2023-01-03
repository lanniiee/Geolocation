import "./Weather.scss";

const Weather = ({weather}) => {

    const {
        current,
        location,
        forecast
    } = weather;


    return (
        <div className="weather">
            <div className="weather__mainInfo">
                <h1 className="weather__mainInfo--date">Today</h1>
                <img className="weather__mainInfo--icon" src={current.condition.icon} alt="icon" />
                <p className="weather__mainInfo--condition">{current.condition.text}</p>
                <p className="weather__mainInfo--temp">Max: {forecast.forecastday[0].day.maxtemp_c}°C</p>
                <p className="weather__mainInfo--temp">Min: {forecast.forecastday[0].day.mintemp_c}°C</p>
            </div>
            <div className="weather__moreInfo">

            </div>
            
        </div>
    )
}

export default Weather;