import React from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import useServices from '../../hooks/useServices';

const Home = () => {
    const db = useServices();
    const allServices = db.services || [];
    
    
    const newData = allServices.filter(service => service.id <= 6)
    
    return (
        <div>
            <div className="App py-5">
                <Container>
                    <Row className=" py-5 align-items-center">
                        <Col xs={12} md={6}>
                            <h1>
                            Progressive methods. Caring approach.
                            </h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio facilis, vitae optio fuga dolorem soluta esse quia iste veritatis similique.</p>
                            <Button>Make Appointment</Button>
                        </Col>
                        <Col xs={12} md={6}>
                            <Image fluid src="https://i.ibb.co/s9LT3Gy/image.png" />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div id="#services" className="py-5">
                <Container>
                    <h1 className='text-center'>Explore Our Caring 	&#38; Premium <br />Medical Services</h1>
                    <hr />
                    <div>
                        <Row>
                            {
                                newData.map(service => <Col xs={12} md={6} lg={4}
                                    className=" my-2"
                                    key={service.id}
                                >
                                    <Card className='h-100'>
                                        <Card.Img className="px-5" variant="top" src={service.icon} />
                                            <Card.Body>
                                                <Card.Title>{service.serviceName}</Card.Title>
                                                <Card.Text>
                                                    {service.decription}    
                                                </Card.Text>
                                                
                                            </Card.Body>
                                            <Card.Footer>
                                            <Button className='w-100' variant="primary">Go somewhere</Button>
                                            </Card.Footer>
                                    </Card>
                                </Col>)
                            }
                        </Row>
                    </div>
                    <hr />
                    
                </Container>
            </div>
        </div>
    );
};

export default Home;