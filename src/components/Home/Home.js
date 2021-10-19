import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Services from '../Services/Services';
import About from './About/About';
import Gallery from './Gallery/Gallery';

const Home = () => {
 
    
    return (
        <div>
            <div className="App py-5"  id="#home">
                <Container>
                    <Row className="py-5 align-items-center">
                        <Col xs={12} md={6}>
                            <h1>
                            Progressive methods. Caring approach.
                            </h1>
                            <p>Trusted results for Cancer Hospital In New York. Check Visymo Search for the best results! Unlimited Access. 100% Secure. Always Facts. Privacy Friendly. The Best Resources. Results and Answers. Types: Best Results, Explore Now, New Sources, Best in Search.</p>
                            <Link to="/pricing">
                                <Button>Make Appointment</Button>
                            </Link>
                            
                        </Col>
                        <Col xs={12} md={6}>
                            <Image fluid src="https://i.ibb.co/s9LT3Gy/image.png" />
                        </Col>
                    </Row>
                </Container>
            </div>
            
            <Services></Services>
            <About></About>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;