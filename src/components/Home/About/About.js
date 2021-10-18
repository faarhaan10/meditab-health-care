import React from 'react';
import { Accordion, Col, Container, Image, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div id="about" className='pt-5'>
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6}>
                        <Image fluid src="https://i.ibb.co/KLbyYVt/image.png" />
                    </Col>
                    <Col xs={12} md={6}>
                        <h2>Why choose us</h2>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    <strong>Excellent Services</strong> </Accordion.Header>
                                <Accordion.Body>
                                Clinical excellence must be the priority for any health care service provider. <strong>MEDITAB</strong> ensures the best healthcare service comprise of professional (clinical) service excellence with outstanding personal service. 
                                </Accordion.Body>
                            </Accordion.Item>
                            
                            <Accordion.Item eventKey="1">
                                <Accordion.Header> <strong>Qualified Doctors </strong></Accordion.Header>
                                <Accordion.Body>
                                <strong>MEDITAB</strong> aims to provide the highest possible level of care by the qualified consultants from India, Singapore, USA, UK &#38; quality hospitals in the Middle East. Even the nurses &#38; technicians are also proficiently trained from Bangladesh, Australia, UK, India and The Philippines.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2">
                                <Accordion.Header> <strong>Emergency Departments </strong></Accordion.Header>
                                <Accordion.Body>
                                    <strong>For appointment, emergency, billing &amp; information:</strong>
                                     12102 <br/>

                                    <strong>Land phone:</strong> +88 02 222222222<br/>
                                    <strong> Mobile no.:</strong> +88 01222222222<br/>
                                     <strong>24-hour emergency &amp; ambulance service:</strong> +88 01222222222 <br/>
                                     <strong>Email: info@meditab.com Facebook:</strong> https://www.facebook.com/meditab.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="3">
                                <Accordion.Header> <strong>Great Infrastructure</strong> </Accordion.Header>
                                <Accordion.Body>
                                <strong>MEDITAB</strong> has 3 buildings on both sides of the Panthapath Main Road, connected by an over bridge. The hospital with more than 6 lac square feet of space is situated in the central region of Dhaka city, capital of Bangladesh.  
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;