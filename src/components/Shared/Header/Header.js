import React from 'react';
import { Container, Image, Nav, Navbar , Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const {user, handleSignOut} = useAuth();
    // console.log(user)
    
    return (
        <div className="App">
            <Navbar collapseOnSelect expand="lg" bg="" variant="" className="py-0 App" fixed="top">
                <Container>
                    <Navbar.Brand as={Link} to="/home" className="py-0">
                        <Image fluid width='150' src="https://i.ibb.co/qB7fS5v/logo.png" alt="logo"/>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav ">
                        <Nav className="me-auto fw-bold">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>

                            <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>   

                            <Nav.Link as={HashLink} to="/home#about">About</Nav.Link>   

                            <Nav.Link as={HashLink} to="/home#gallery">Gallery</Nav.Link> 

                            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>                               
                            <Nav.Link as={Link} to="/pricing">Pricing</Nav.Link> 

                            <Nav.Link as={Link} to="/doctors">Doctors</Nav.Link>    
                                      
                        </Nav>
                        <Nav className="fw-bold">
                            {user.email && <Nav.Link as={Link} to="/deets" disabled>{user.displayName}</Nav.Link>}
                            {!user.email ? <Nav.Link  as={Link} to="/login">
                            Sign in
                            </Nav.Link>
                            :
                            <Button onClick={handleSignOut} variant="outline-danger">Sign Out</Button>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>       
        </div>
    );
};

export default Header;