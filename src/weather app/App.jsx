import { BrowserRouter ,Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles.css";
import Home from "./home";
import About from "./about";
import Weather from "./weather";
import ForecastDays from "./ForecastDays";
import ShowWeatherInfoPlus from "./ShowWeatherInfoPlus";
function App() {
    return (
        <>
        <BrowserRouter basename="weather-app">
        <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/weather" element={<Weather />} />
                    <Route path="/weather/today" element={<ShowWeatherInfoPlus />} />
                    <Route path="/weather/week" element={<ForecastDays />} />
                    <Route path="*" element={<h1>404 - Page Not Found</h1>} />
                </Routes>
        </BrowserRouter>
        </>
    );
}

export default App;
