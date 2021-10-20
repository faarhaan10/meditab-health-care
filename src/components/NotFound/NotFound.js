import React from 'react';
import { Col, Container, Image, Row,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <Container className="my-5 pt-5">
            {/* 404 section  */}
                <Row className="align-items-center mt-5">
                    
                    <Col xs={12} md={6}>
                    <Image src="http://static.skaip.org/img/emoticons/180x180/f6fcff/loudlycrying.gif" />
                    </Col>

                    <Col xs={12}  md={6}>
                        <div className="p-2">
                            
                            <h1>Oops...404.</h1>
                            <h2>We can't seem to find the page you are looking for!</h2>
                            <Link to="/">
                                <Button>COME BACK</Button>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
    );
};

export default NotFound;