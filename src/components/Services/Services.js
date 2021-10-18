import React from 'react';
import { Card, Container, Row , Button, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useServices from '../../hooks/useServices';

const Services = () => {
    const db = useServices();
    const allServices = db.services || [];
    
    const newData = allServices.filter(service => service.id <= 6)

    return (
        <div id="services" className="py-5">
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
                                            <Card.Footer className='bg-transparent border-0'>
                                            <Link to={`/service/${service.id}`}>
                                                <Button className='w-100' variant="primary">Go somewhere</Button>
                                            </Link>
                                            </Card.Footer>
                                    </Card>
                                </Col>)
                            }
                        </Row>
                        <div className="d-flex justify-content-end">
                            <Link to="/services">
                                <Button className='' variant="primary">More... </Button>
                            </Link>
                        </div>
                    </div>
                    
                </Container>
            </div>
    );
};

export default Services;