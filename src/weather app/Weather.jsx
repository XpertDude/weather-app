import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles.css";
import Header from "./header";
import { useEffect, useState } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import weatherContext from "./weatherContext";
import ShowWeatherInfoPlus from "./ShowWeatherInfoPlus";
import ForecastDays from "./ForecastDays";
import { Button } from "react-bootstrap";
export default function Weather() {
    const [data, setData] = useState({});
    const [error, setError] = useState('');
    const [city, setCity] = useState("");
    const [searchValue, setValue] = useState("");
    const [loading, setLoading] = useState(false);
    const [view, setView] = useState("day");
    useEffect(() => {
        if (city && city.trim() !== "") {
            setLoading(true);
            fetch(
                `https://api.weatherapi.com/v1/forecast.json?key=b0bfa1b3c9f94066b4e112918242512&q=${city}&days=7&aqi=yes&alerts=no`
            )
                .then((response) => response.json())
                .then((data) => {
                    if (data.error) {
                        setError(data.error.message);
                        setLoading(false);
                    } else {
                        setData(data);
                        setLoading(false);
                        setError('');
                    }
                })
                .catch((error) => {
                    setError(error.message);
                    console.log(error.message);
                    setLoading(false);
                });
        }

    }, [city]);

    const loadingSpinner = () => {
        return <>
            <div className="spinner-border loading" role="status">
                <span className="sr-only"></span>
            </div>
        </>
    }
    const handleViewChange = (view) => {
        setView(view);
    };


    const handleCityValue = (e) => {
        setValue(e.target.value);
    };

    const handleCity = () => {
        setCity(searchValue);
    };
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const daysWeek = () => {
        const dayNumber = new Date().getDay();
        const toDay = days[dayNumber];
        return toDay
    }

    const ShowWeather = () => {
        return <div className="d-flex flex-column justify-content-center w-100 flex-fill">
            {data.current && (
                <>
                    <img style={{ width: '200px', height: '200px' }} className="container d-flex justify-content-start" src={`https:${data.current.condition.icon}`} alt="weather icon" />
                    <p>{data.current.condition.text}</p>
                    <p>{data.current["temp_c"]}°C / {data.current["temp_f"]}°F </p>
                    <p>{daysWeek()}, <span>{data.location.localtime.slice(10)}</span></p>
                    <h1>{data.location.name}</h1>
                    <span>{data.location.country.toUpperCase()}</span>
                </>
            )}
        </div>
    }

    const showError = () => {
        return <>
            {!error == '' && <div
                className="alert alert-danger"
                role="alert"
            >
                <strong>{error}</strong>
            </div>}
        </>
    }

    return (
        <>
            <Header />
            <weatherContext.Provider value={{ data }}>
                <h1>Weather Information</h1>
                <hr />
                {showError()}
                {loading ? loadingSpinner() : undefined}
                <div className="d-flex gap-2 flex-row justify-content-between p-1">
                    <div className="d-flex gap-2">
                        <button
                            onClick={() => handleViewChange("day")}
                            className={view === "day" ? "btn btn-primary" : "btn btn-secondary"}>
                            Today
                        </button>
                        <button
                            onClick={() => handleViewChange("week")}
                            className={view === "week" ? "btn btn-primary" : "btn btn-secondary"}>
                            Week
                        </button>
                    </div>
                    <div className="d-flex justify-content-center">
                        <input
                            className="w-100 border border-none"
                            type="text"
                            onChange={handleCityValue}
                            placeholder="Search by city"
                        />
                        <Button
                            className="btn-sm mx-2 h-12 "
                            type="submit"
                            onClick={handleCity}
                        >
                            Search
                        </Button>
                    </div>
                </div>
                <section className="row align-items-center border rounded bg-light h-50 p-2">
                    <div className="d-flex justify-content-center flex-row col-4 p-2">
                        {<ShowWeather />}
                    </div>
                    <div className=" col-6 container d-flex flex-wrap gap-5  p-2">
                        {view === "day" && data.current && <ShowWeatherInfoPlus />}
                        {view === "week" && data.forecast && <ForecastDays />}
                    </div>
                </section>
            </weatherContext.Provider>
        </>
    );
}
