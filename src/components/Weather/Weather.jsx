import "./Weather.scss";

const Weather = ({weather}) => {

    console.log(weather)

    return (
        <div className="weather">
            <h1 className="weather__name">{weather.location.name}</h1>
            <img className="weather__icon" src={weather.current.condition.icon} alt="icon" />
            <p className="weather__date">{weather.current.last_updated}</p>
        </div>
    )
}

export default Weather;