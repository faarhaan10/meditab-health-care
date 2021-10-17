import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="" variant="">
                <Container>
                    <Navbar.Brand as={Link} to="/home">
                        <Image fluid width='150' src="https://i.ibb.co/qB7fS5v/logo.png" alt="logo"/>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav ">
                        <Nav className="me-auto fw-bold">
                            <Nav.Link as={Link} to="/features">Home</Nav.Link>
                            <Nav.Link as={Link} to="/pricing">Services</Nav.Link>           
                            <Nav.Link as={Link} to="/pricing">Doctors</Nav.Link>           
                            <Nav.Link as={Link} to="/pricing">About us</Nav.Link>           
                            <Nav.Link as={Link} to="/pricing">Contact us</Nav.Link>           
                        </Nav>
                        <Nav className="fw-bold">
                            <Nav.Link as={Link} to="/deets" disabled>More deets</Nav.Link>
                            <Nav.Link  as={Link} to="/memes">
                            Sign in
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>       
        </div>
    );
};

export default Header;