import "./Home.scss";
import Weather from "../../components/Weather/Weather";
import Forecast from "../../components/Forecast/Forecast";

const Home = ({latitude, greeting, weather, dailyForecast}) => {

    return (
        <div className="home">
            {(latitude !== 0) ?
                (<>
                    <h1 className="home__greeting">{greeting} {weather.location.name}!</h1>
                    <Weather weather={weather} />
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