import { Link, useLocation } from 'react-router-dom';
import React from "react"; 
import logo from '/hammer.png';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Header() {
    const location = useLocation();

    return (
        <Navbar expand="lg" style={{backgroundColor: '#286779'}} variant='dark'>
            <Container>
        
                <Navbar.Brand as={Link} to="/">
                    <img src={logo} alt="Logo" className="img-fluid" style={{ width: '50px' }} />
                </Navbar.Brand>

                {/* Hamburger-menu nappi mobiilissa */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                {/* Varsinainen navigaatio */}
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link as={Link} to="/" className={location.pathname === "/" ? "active" : ""}>Etusivu</Nav.Link>
                        <Nav.Link as={Link} to="/palvelut" className={location.pathname === "/palvelut" ? "active" : ""}>Palvelut</Nav.Link>
                        <Nav.Link as={Link} to="/referenssit" className={location.pathname === "/referenssit" ? "active" : ""}>Referenssit</Nav.Link>
                        <Nav.Link as={Link} to="/yhteystiedot" className={location.pathname === "/yhteystiedot" ? "active" : ""}>Yhteystiedot</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
