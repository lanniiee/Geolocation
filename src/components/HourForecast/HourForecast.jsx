import "./HourForecast.scss";

const HourForecast = ({hours}) => {


    return (
        <div className="hourForecast">
            <p className="hourForecast__time">{hours.time.slice(-5)}</p>
            <img className="hourForecast__icon" src={hours.condition.icon} alt="icon" />
            <p className="hourForecast__temp">{hours.temp_c}°C</p>
            <p className="hourForecast__text">{hours.condition.text}</p>
        </div>
    )
}

export default HourForecast;