import "./Home.scss";
import Weather from "../../components/Weather/Weather";

const Home = ({latitude, greeting, weather, dailyForecast, hourForecast}) => {

    return (
        <div className="home">
            {(latitude !== 0) ?
                (<>
                    <h1 className="home__greeting">{greeting} {weather.location.name}!</h1>
                    <Weather weather={weather} />
                    <h1 className="home__heading">Hours Forecast</h1>
                    <div className="home__hourForecast">
                        {hourForecast}
                    </div>
                    <h1 className="home__heading">Daily Forecast</h1>
                    {dailyForecast}
                </>)
                : (
                    <div className="home__loading">
                        <h1 className="home__greeting">{greeting}!</h1>
                        <p className="home__loading--message">Loading...</p>
                    </div>
                )
            }
        </div>
    )

}

export default Home;