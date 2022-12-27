import "./Home.scss";
import Weather from "../../components/Weather/Weather";

const Home = ({longitude, latitude}) => {

    return (
        <div className="home">
            <Weather longitude={longitude} latitude={latitude}/>
        </div>
    )

}

export default Home;