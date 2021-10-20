import React from 'react';
import { Col, Container, Row , Image,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className="bg-info pt-5" id="contact">
            {/* simple contact page */}
            <Container className="mt-5">
                <Row className="align-items-center pt-2">
                    <Col xs={12} md={6}>
                        <div className="fw-bolder mx-5">
                            <h1 className="mt-4">Get in Touch</h1>
                            <div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control border border-primary rounded-pill" id="floatingInput" placeholder="name"/>
                                    <label htmlFor="floatingInput"><i className="fas fa-user-astronaut"></i> Name</label>
                                </div>
                                <div className="form-floating">
                                    <input type="password" className="form-control border border-primary rounded-pill" id="floatingPassword" placeholder="Password" />
                                    <label htmlFor="floatingPassword"><i className="fas fa-at"></i> Email</label>
                                </div>
                                <br />
                                <div className="form-floating">
                                    <textarea className="form-control border border-primary" id="floatingTextarea2" style={{height: '100px',borderRadius:'30px'}} placeholder="message"></textarea>
                                    <label htmlFor="floatingTextarea2"><i className="fas fa-envelope-open-text"></i> Message</label>
                                </div>
                                <br />
                                <Link to="/">
                                    <Button className="w-100 fw-bold py-2 rounded-pill" variant="primary">Send</Button>
                                </Link>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <Image fluid className="p-4" src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/37301/mail-box-letter-clipart-xl.png"/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;