import React from 'react';
import { Container, Row , Col, Card, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useServices from '../../../hooks/useServices';

const Pricing = () => {
    const db = useServices();
    const pricing = db.pricing || [];
    
    return (
        <div>
            <Container>
                <h1  id="pricing" className="text-center pt-5">Our Pricing</h1>
                    <hr />
                <div className="my-3">
                    <Row>
                        {
                            pricing.map(prices => <Col xs={12} md={6} lg={4}
                                key={prices.pId}
                            >
                            <div className="border rounded meditab ">
                            <Card className='text-center p-5 border-0'>
                                <h4 className='text-uppercase  fw-bold'>{prices.type}</h4>
                                <br />
                                <h1>{prices.price}<sub><small>Per Year</small></sub></h1>
                                <br />
                                
                                    <span>{prices.departments} Departments</span>
                                    <span>{prices.tests} Tests</span>
                                    <span>{prices.emergency} Emergency</span>
                                    <span>{prices.assisdance || 'No'} Medical Assisdance</span>
                                    <br />
                                <Link to={`/placeorder/${prices.pId}`}>
                                    <Button>Choose</Button>
                                </Link>
                            </Card>
                            </div>
                        </Col>)
                        }
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Pricing;