import { useContext } from "react";
import weatherContext from "./weatherContext";
import { Card, CardHeader, CardBody, Container, CardFooter } from "react-bootstrap";
export default function ShowWeatherInfoPlus() {
    const data = useContext(weatherContext)
    const status = data.data.current;
    console.log(status);

    if (!data) return <h1>No data available.</h1>;

    return (
        <Container className="d-flex flex-wrap justify-content-between align-items-stretch gap-3" >
            <Card className="d-flex flex-column justify-content-center border rounded  gap-3 flex-fill card-element">
                <CardHeader className="bg-primary text-white text-center">Humidity</CardHeader>
                <CardBody className="" >{status.humidity}%</CardBody>
                <CardFooter className="bg-primary text-white">{status.humidity > 20 && status.humidity > 50 ? 'Comfortable👍' : 'Too dry👎'}</CardFooter>
            </Card>

            <Card className="d-flex flex-column justify-content-center border rounded  gap-3 flex-fill bg-light">
                <CardHeader className="bg-primary text-white text-center">UV Index</CardHeader>
                <CardBody className="fs-small">{status.uv}</CardBody>
                <CardFooter className="bg-primary text-white">{status.uv <= 5 ? 'Good🙂' : 'Bad😨'}</CardFooter>
            </Card>

            <Card className="d-flex flex-column justify-content-center border rounded  gap-3 flex-fill bg-light">
                <CardHeader className="bg-primary text-white text-center">Visibility</CardHeader>
                <CardBody className="fs-small">{status.vis_km} Km</CardBody>
                <CardFooter className="bg-primary text-white">{status.vis_km <= 10 ? 'Acceptable🙂' : 'Poor🫣'}</CardFooter>
            </Card>

            <Card className="d-flex flex-column justify-content-center border rounded  gap-3 flex-fill bg-light">
                <CardHeader className="bg-primary text-white text-center">Air Quality</CardHeader>
                <CardBody className="fs-small text-secondary">{status.air_quality?.["us-epa-index"]}</CardBody>
                <CardFooter className="bg-primary text-white">{status.air_quality?.["us-epa-index"] <= 4 ? 'Healthy🙂' : 'Unhealthy😷'}</CardFooter>
            </Card>

            <Card className="d-flex flex-column justify-content-center border rounded  gap-3 flex-fill bg-light">
                <CardHeader className="bg-primary text-white text-center">Wind Speed</CardHeader>
                <CardBody className="fs-small">{status.wind_kph} Kph, <br />({status.wind_mph} mph)</CardBody>
                <CardFooter className="bg-primary text-white"><i className="bi bi-compass text-white"></i> {status.wind_dir}</CardFooter>
            </Card>

            <Card className="d-flex flex-column justify-content-center border rounded  gap-3 flex-fill bg-light">
                <CardHeader className="bg-primary text-white text-center">Pressure</CardHeader>
                <CardBody className="fs-small">{status.pressure_mb} hPa, <br />({status.pressure_in} inHg)</CardBody>
                <CardFooter className="bg-primary text-white"><i className="bi bi-moisture text-white"></i></CardFooter>
            </Card>
        </Container>
    );
}