import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles.css";
import Home from "./home";
import About from "./about";
import Weather, {ShowWeatherInfoPlus, ForecastDays} from "./weather";
function App() {
    return (
        <>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/weather" element={<Weather />} />
                    <Route path="/weather/today" element={<ShowWeatherInfoPlus />} />
                    <Route path="/weather/week" element={<ForecastDays />} />
                    <Route path="*" element={<h1>404 - Page Not Found</h1>} />
                </Routes>
        </>
    );
}

export default App;
