import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavbarBrand } from "react-bootstrap"
export default function LayOut(){
    return <>
    <Nav className="d-flex align-items-center justify-content-around nav-bar">
    <NavbarBrand className="fs-3 "><Nav.Link className="brand" as={Link} to='/'>Popcorn Hunt</Nav.Link></NavbarBrand>
    <Navbar className="nav-link">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/search">Search</Nav.Link>
        <Nav.Link as={Link} to="/about">About</Nav.Link>
    </Navbar>
    </Nav>
    </>
}