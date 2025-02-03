import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles.css";
import { Link } from "react-router-dom";
import Header from "./header";
export default function Home() {
    return (
        <>
            <Header />
            <>
                <div className="container my-5">
                    <header className="text-center">
                        <h1 className="display-4">Welcome to WeatherTracker</h1>
                        <p className="lead">
                            Your reliable weather companion for current and weekly forecasts.
                        </p>
                    </header>
                    <div className="row justify-content-center mt-5">
                        <div className="col-lg-6 text-center">
                            <h3>Track the weather wherever you are</h3>
                            <p className="mt-3">
                                Our app gives you real-time weather updates, forecasts, and more!
                            </p>
                            <p>
                                Search by city name and get current weather conditions, forecasts,
                                and additional weather data like air quality and UV index.
                            </p>
                            <p>
                                Stay prepared and make better decisions with the latest weather data.
                            </p>
                            <Link to="/weather" className="btn btn-primary btn-lg mt-3">
                                Start Now
                            </Link>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-12 text-center">
                            <h4>How It Works</h4>
                            <ul className="list-group">
                                <li className="list-group-item">1. Search for a city</li>
                                <li className="list-group-item">2. Get the current weather</li>
                                <li className="list-group-item">3. View weekly forecasts</li>
                                <li className="list-group-item">4. Explore air quality, UV index, and more!</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        </>
    );
}
