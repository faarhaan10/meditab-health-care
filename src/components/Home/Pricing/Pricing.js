import React from 'react';
import { Container, Row , Col, Card, Button} from 'react-bootstrap';

const Pricing = () => {
    return (
        <div>
            <Container>
                <h1  id="pricing" className="text-center pt-5">Our Pricing</h1>
                    <hr />
                <div className="my-3">
                    <Row>
                        <Col xs={12} md={6} lg={4}>
                            <div className="border rounded meditab ">
                            <Card className='text-center p-5 border-0'>
                                <h4 className='text-uppercase  fw-bold'>standard</h4>
                                <br />
                                <h1>$150 <sub><small>Per Year</small></sub></h1>
                                <br />
                                
                                    <span>3 Departments</span>
                                    <span>15 Tests</span>
                                    <span>15 Emergency</span>
                                    <span>No Medical Assisdance</span>
                                    <br />
                                <Button>Choose</Button>
                            </Card>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <Card className='text-center p-5 meditab'>
                                <h4 className='text-uppercase fw-bold'>silver</h4><br />
                                <h1>$230<sub><small>Per Year</small></sub></h1><br />
                                
                                    <span>5 Departments</span>
                                    <span>20 Tests</span>
                                    <span>20 Emergency</span>
                                    <span>No Medical Assisdance</span><br />
                                <Button>Choose</Button>
                            </Card>
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <Card className='text-center p-5 meditab'>
                                <h4 className='text-uppercase fw-bold'>premium</h4><br />
                                <h1>$450 <sub><small>Per Year</small></sub></h1><br />
                                
                                    <span>10 Departments</span>
                                    <span>25 Tests</span>
                                    <span>25 Emergency</span>
                                    <span>No Medical Assisdance</span><br />
                                <Button>Choose</Button>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Pricing;