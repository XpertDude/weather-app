import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles.css";
import Header from "./header";
import { useEffect, useState } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import PropTypes from 'prop-types';

export function ForecastDays({ data }) {
    if (!data?.forecastday) return <p>No forecast data available.</p>;

    return (
        <>
            {data.forecastday.map((e, index) => (
                <div
                    key={index}
                    className="d-flex flex-column align-items-center border rounded p-2 bg-white"
                    style={{ width: '150px' }}
                >
                    <p className="fw-bold">{new Date(e.date).toLocaleDateString("en-US", { weekday: 'short' })}</p>
                    <img
                        src={`https:${e.day.condition.icon}`}
                        alt="weather icon"
                        style={{ width: '80px', height: '50px' }}
                    />
                    <p className="fs-6">{e.day.condition.text}</p>
                    <p>
                        <span className="fs-6">{e.day.avgtemp_c}°C</span> /
                        <span className="fs-6"> {e.day.mintemp_c}°</span>
                    </p>
                </div>
            ))}
        </>
    );
}

ForecastDays.propTypes = {
    data: PropTypes.shape({
        forecastday: PropTypes.arrayOf(
            PropTypes.shape({
                date: PropTypes.string.isRequired,
                day: PropTypes.shape({
                    condition: PropTypes.shape({
                        icon: PropTypes.string.isRequired,
                        text: PropTypes.string.isRequired,
                    }).isRequired,
                    avgtemp_c: PropTypes.number.isRequired,
                    mintemp_c: PropTypes.number.isRequired,
                }).isRequired,
            })
        ).isRequired,
    }).isRequired,
};

export function ShowWeatherInfoPlus({ data }) {
    if (!data) return <p>No data available.</p>;

    return (
        <div className="d-flex flex-wrap justify-content-between align-items-stretch gap-2 bg-white">
            <div className="d-flex flex-column justify-content-center border rounded p-4 gap-3 flex-fill">Humidity:
                <p className="fs-small">{data.humidity}%</p><p>{data.humidity > 20 && data.humidity > 50 ? 'Comfortable👍' : 'Too dry👎'}</p>
            </div>
            <div className="d-flex flex-column justify-content-center border rounded p-4 gap-3 flex-fill">UV Index:
                <p className="fs-small">{data.uv}</p><p>{data.uv <= 5 ? 'Good🙂‍↔️' : 'Bad😨'}</p>
            </div>
            <div className="d-flex flex-column justify-content-center border rounded p-4 gap-3 flex-fill">Visibility:
                <p className="fs-small">{data.vis_km} Km</p><p>{data.vis_km <= 10 ? 'Acceptable🙂' : 'Poor🫣'}</p>
            </div>
            <div className="d-flex flex-column justify-content-center border rounded p-4 gap-3 flex-fill">Air Quality:
                <p className="fs-small text-secondary">{data.air_quality?.["us-epa-index"]}</p><p>{data.air_quality?.["us-epa-index"] <= 4 ? 'Healthy🙂‍↕️' : 'Unhealthy😷'}</p>
            </div>
            <div className="d-flex flex-column justify-content-center border rounded p-4 gap-2 flex-fill">Wind Speed:
                <p className="fs-small">{data.wind_kph} Kph,<br />({data.wind_mph} mph)</p><p><i className="bi bi-compass text-primary"></i>{data.wind_dir}</p>
            </div>
            <div className="d-flex flex-column justify-content-center border rounded p-4 gap-2 flex-fill">Pressure:
                <p className="fs-small"><i className="bi bi-moisture text-primary"></i> <br />{data.pressure_mb} mb,<br />({data.pressure_in}in)</p>
            </div>
        </div>

    );
}

ShowWeatherInfoPlus.propTypes = {
    data: PropTypes.shape({
        humidity: PropTypes.number,
        uv: PropTypes.number,
        vis_km: PropTypes.number,
        air_quality: PropTypes.object,
        wind_kph: PropTypes.number,
        wind_mph: PropTypes.number,
        wind_dir: PropTypes.string,
        pressure_mb: PropTypes.number,
        pressure_in: PropTypes.number,
    }).isRequired,
};

export default function Weather() {
    const [data, setData] = useState({});
    const [error, setError] = useState(null);
    const [city, setCity] = useState("");
    const [searchValue, setValue] = useState("");
    const [loading, setLoading] = useState(false);
    const [view, setView] = useState("day");
    useEffect(() => {
        if (city.toLocaleLowerCase()) {
            setLoading(true);
            fetch(
                `https://api.weatherapi.com/v1/forecast.json?key=b0bfa1b3c9f94066b4e112918242512&q=${city ? city : alert('city not match')}&days=7&aqi=yes&alerts=no`
            )
                .then((response) => response.json())
                .then((data) => {
                    setData(data);
                    setLoading(false);
                })
                .catch((error) => {
                    setError(error);
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

    return (
        <>
            <Header />
            <h1>Weather Information</h1>
            <hr />
            {error && <div
                className="alert alert-danger"
                role="alert"
            >
                <strong>{error}</strong>
            </div>} 
            
            {loading? loadingSpinner(): undefined}
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
                    <button
                        className="btn btn-secondary btn-sm mx-2 h-12 "
                        type="submit"
                        onClick={handleCity}
                    >
                        Search
                    </button>
                </div>
            </div>
            <section className="row align-items-center border rounded bg-light h-50 p-2">
                <div className="d-flex justify-content-center flex-row col-4 p-2">
                    {<ShowWeather />}
                </div>
                <div className=" col-6 container d-flex flex-wrap gap-5  p-2">
                    {view === "day" && data.current && <ShowWeatherInfoPlus data={data.current} />}
                    {view === "week" && data.forecast && <ForecastDays data={data.forecast} />}
                </div>
            </section>

        </>
    );
}
