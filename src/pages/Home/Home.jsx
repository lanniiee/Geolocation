import "./Home.scss";
import Weather from "../../components/Weather/Weather";
import ToDoList from "../../components/ToDoList/ToDoList";

const Home = ({latitude, isLoading, greeting, weather, dailyForecast, hourForecast}) => {

    return (
        <div className="home">
            {(isLoading === false && latitude !== 0) ?
                (<>
                    <h1 className="home__greeting">{greeting}!</h1>
                    <div className="home__dashboard">
                        <Weather weather={weather} />
                        <ToDoList />
                    </div>
                    
                    <h1 className="home__heading">Hours Forecast</h1>
                    <div className="home__hourForecast">
                        {hourForecast}
                    </div>
                    <h1 className="home__heading">Daily Forecast</h1>
                    <div className="home__dailyForecast">
                        {dailyForecast}
                    </div>

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