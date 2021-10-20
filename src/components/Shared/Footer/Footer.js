import React from 'react';
import { Container, Row , Col, Image, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-info text-white">
            {/* simple footer  */}
            <Container>
                <Row className="align-items-center py-5">
                    <Col xs={12} md={6} lg={4}>
                        <Image src="https://i.ibb.co/9nQjkVp/image.png" />
                        <p>Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for your family healthcare</p>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <h2 className=''>Departments</h2>
                        <div className="">
                            <Nav className="flex-column fw-bold">
                                <Nav.Link as={Link} to="/"  className="text-white px-0 py-1">Dental Service</Nav.Link>
                                <Nav.Link as={Link} to="/" className="text-white px-0 py-1">Emergency Medicine</Nav.Link>           
                                <Nav.Link as={Link} to="/" className="text-white px-0 py-1">Ophthalmology</Nav.Link>           
                                <Nav.Link as={Link} to="/" className="text-white px-0 py-1">Orthopedic Surgery</Nav.Link>           
                                <Nav.Link as={Link} to="/" className="text-white px-0 py-1">Neurosurgery</Nav.Link>           
                            </Nav>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <h2>Opening Hours</h2>
                        <div className="d-flex justify-content-between mx-3 fw-bold">
                            <p>Mon-Tues:</p>
                            <p>6:00-10:00</p>
                        </div>
                        <div className="d-flex justify-content-between mx-3 fw-bold">
                            <p>Wed-Thurs:</p>
                            <p>6:00-10:00</p>
                        </div>
                        <div className="d-flex justify-content-between mx-3 fw-bold">
                            <p>Sat-Sun:</p>
                            <p>6:00-10:00</p>
                        </div>
                        <div className="d-flex justify-content-between mx-3 fw-bold">
                            <p>Friday:</p>
                            <p>closed</p>
                        </div>
                    </Col>
                </Row>
                <Row className='justify-content-between'>
                    <Col xs={6}><p>&copy; MediTab Health Care. A Programming-Hero Initiative</p> </Col>
                    <Col xs={3} >
                        <div className="d-flex justify-content-end">
                        <i className="ms-3 fab fa-google-plus"></i>
                        <i className="ms-3 fab fa-facebook"></i>
                        <i className="ms-3 fab fa-twitter"></i>
                        <i className="ms-3 fab fa-linkedin-in"></i>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;