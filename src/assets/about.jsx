import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles.css";
import Header from "./header";
export default function About() {
    return (
        <>
            <Header />
            <h1>About This Application</h1>
            <div className="container ">
                <p  className="text-start mx-5">
                    Welcome to the Weather Information Application! Our goal is to provide you with accurate and real-time weather information at your fingertips.
                    <br />
                    <br />
                    <h2 className="text-primary">How It Works:</h2>
                    This app allows you to easily check the current weather and the forecast for the next 7 days for any city around the world. Here's how it works:
                    <br />
                    <br />
                    <h4 className="text-secondary">Search for a City:</h4>
                    <ul>
                        <li>Simply enter the name of the city you're interested in, and click the search button.</li>
                        <li>The app will display the current weather, including temperature, humidity, air quality, and more.</li>
                    </ul>
                    <h4 className="text-secondary">Current Weather:</h4>
                    <ul>
                        <li>The app fetches up-to-date weather data from a reliable weather API.</li>
                        <li>You will see important details such as the current temperature, weather conditions (like sunny or cloudy), wind speed, and visibility.</li>
                    </ul>
                    <h4 className="text-secondary">Hourly and Daily Forecast:</h4>
                    <ul>
                        <li>Once you search for a city, you can switch between viewing today’s weather or a weekly forecast.</li>
                        <li>The app shows hourly weather data for today or a detailed 7-day forecast, including average temperatures, minimum/maximum temperatures, and the weather condition for each day.</li>
                    </ul>
                    <h4 className="text-secondary">Air Quality & UV Index:</h4>
                    The app also provides additional data such as air quality index and UV index to help you plan outdoor activities safely.
                    <br />
                    <br />
                    <h4 className="text-secondary">User-Friendly Interface:</h4>
                    <ul>
                        <li>The interface is simple and clean, making it easy for anyone to use.</li>
                        <li>You can switch between viewing the current day's weather or the upcoming week's forecast with just one click.</li>
                    </ul>
                    <h4 className="text-secondary">Technology Behind the App</h4>
                    <ul>
                        <li>This application pulls data from the WeatherAPI, one of the most reliable weather data sources available.</li>
                        <li>It is built using React for a seamless user experience and Bootstrap for responsive, mobile-friendly design.</li>
                    </ul>
                    We hope you enjoy using this app, and find it helpful in planning your day or your next adventure</p>
            </div>
        </>
    );
}