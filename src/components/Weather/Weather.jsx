import "./Weather.scss";

const Weather = ({weather}) => {

    console.log(weather)

    return (
        <div className="weather">
            <h1 className="weather__date">Today</h1>
            <img className="weather__icon" src={weather.current.condition.icon} alt="icon" />
            <p className="weather__condition">{weather.current.condition.text}</p>
            <p className="weather__temp">{weather.current.temp_c}°C</p>
        </div>
    )
}

export default Weather;