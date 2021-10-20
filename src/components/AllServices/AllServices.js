import React from 'react';
import { Card, Col, Container, Row , Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useServices from '../../hooks/useServices';

const AllServices = () => {
    // get all data first 
    const db = useServices();
    const allServices = db.services || [];
    
    
    return (
        <div className="py-5">
                <Container>
                    <h1 className='text-center'>Explore Our Caring 	&#38; Premium <br />Medical Services</h1>
                    <hr />
                    <div>
                        <Row>
                            {/* single service card  */}
                            {
                                allServices.map(service => <Col xs={12} md={6} lg={4}
                                    className=" my-2"
                                    key={service.id}
                                >
                                    <Card className='h-100 meditab'>
                                        <Card.Img className="px-5 py-2" variant="top" src={service.icon} />
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
                    </div>
                    
                </Container>
            </div>
    );
};

export default AllServices;