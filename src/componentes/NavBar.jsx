import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

<Link to="/" className=""/>

const NavBar = () => {
    return(
        <Navbar bg="danger" variant="ligth">
            <Container>
            <Nav className="me-auto">
                <Link to="/" className="text-white text-decoration-none mx-2">Home</Link>
                <Link to="/contacto" className="text-white text-decoration-none mx-2">Contacto</Link>
            </Nav>
            <Navbar.Brand className="d-flex text-white">Happy Cake</Navbar.Brand>
            </Container>
      </Navbar>
    )
}

export default NavBar