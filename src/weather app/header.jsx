import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles.css";

export default function Header() {
    return (
        <nav className="py-3 bg-light">
            <ul className="d-flex justify-content-evenly align-items-center list-unstyled m-0 px-3 ">
                <li>
                    <Link to="/" className="text-decoration-none  menu">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/about" className="text-decoration-none  menu">
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/weather" className="text-decoration-none  menu">
                        Weather
                    </Link>
                </li>
            </ul>
        </nav>
    );
}