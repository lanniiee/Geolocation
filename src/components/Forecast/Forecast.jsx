import "./Forecast.scss";

const Forecast = ({weather}) => {

    const {
        date, 
        day
    } = weather;

    const newDate = new Date(date);
    const options = {weekday: "long"}
    const dayOfTheWeek = new Intl.DateTimeFormat("en-UK", options).format(newDate)

    return (
        <div className="forecast">
            <div className="forecast__date">
                <p className="forecast__date--day">{dayOfTheWeek}</p>
                <p className="forecast__date--day">{date}</p>
            </div>
            <img className="forecast__image" src={day.condition.icon} alt="icon" />
            <p className="forecast__temp">Max: {day.maxtemp_c}°C</p>
            <p className="forecast__temp">Min: {day.mintemp_c}°C</p>
        </div>
    )
}

export default Forecast;