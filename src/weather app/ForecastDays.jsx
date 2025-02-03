import { useContext } from "react";
import weatherContext from "./weatherContext";
export default function ForecastDays() {
    const data = useContext(weatherContext)
    const status = data.data.forecast.forecastday;
    console.log(status);
    
    if (!status) return <h1>No forecast data available.</h1>;
    return (
        <>
            {status.map((e, index) => (
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
