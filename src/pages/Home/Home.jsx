import "./Home.scss";
import Weather from "../../components/Weather/Weather";

const Home = ({longitude, latitude}) => {

    return (
        <div className="home">
            <h1>Hello User</h1>
            {(latitude !== 0) ?
                (<Weather longitude={longitude} latitude={latitude}/>)
                : <div className="home__loading">Loading...</div>
            }
        </div>
    )

}

export default Home;