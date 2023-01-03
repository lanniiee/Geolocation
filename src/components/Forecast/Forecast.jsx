import "./Forecast.scss";

const Forecast = ({weather}) => {

    const {
        date, 
        day
    } = weather;

    const newDate = new Date(date);
    const options = {weekday: "long"}
    const dayOfTheWeek = new Intl.DateTimeFormat("en-UK", options).format(newDate)

    console.log(weather)

    return (
        <div className="forecast">
            <div className="forecast__date">
                <p className="forecast__date--day">{dayOfTheWeek}</p>
                <p className="forecast__date--day">{date}</p>
            </div>
            <div className="forecast__imageContainer">
                <img className="forecast__imageContainer--icon" src={day.condition.icon} alt="icon" />
            </div>
            <p className="forecast__text">{day.condition.text}</p>
            <p className="forecast__temp">Max: {day.maxtemp_c}°C</p>
            <p className="forecast__temp">Min: {day.mintemp_c}°C</p>
        </div>
    )
}

export default Forecast;