import React from 'react';
import { Col, Container, Image, Row , Button, ButtonGroup} from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useServices from '../../hooks/useServices';

const PlaceOrder = () => {
    const {priceID} = useParams();
    const db = useServices();
    const pricing = db.pricing || [];

    const selectedPackage = pricing.find(price => price.pId === parseInt(priceID)) || {};
    
    return (
        <div>
            <Container>
                <h1 className="text-center text-info"> WOW!!!</h1>
                <h3 className="text-center text-info"> You choose <span className="text-uppercase fw-bold text-primary">{selectedPackage.type}</span> Package. Which is one of the best service of MEDITAB</h3>
                
                <Row className='align-items-center'>
                    <Col xs={12} md={6}>
                        <h5>Your Service id: 0022{selectedPackage.pId}</h5>
                        <h4>We'll Provide These Services for you and your family:</h4>
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="">
                            <h5 className="m-0 p-0"><span className='text-success'><i className="far fa-check-square"></i></span> {selectedPackage.departments} Departments</h5>
                        <h5 className="m-0 p-0"><span className='text-success'><i className="far fa-check-square"></i></span> {selectedPackage.tests} Tests</h5>
                        <h5 className="m-0 p-0"><span className='text-success'><i className="far fa-check-square"></i></span> {selectedPackage.emergency} Emergency</h5>
                        <h5 className="m-0 p-0"><span className='text-success'><i className="far fa-check-square"></i></span> No Assisdance</h5>
                            </div>
                        </div>
                        <ButtonGroup  className="mt-4">
                            <Link to='/pricing'>
                                <Button variant='outline-danger'><i className="fas fa-chevron-circle-left"></i> Go back
                                </Button>
                            </Link>
                             <Link to='/checkout'>
                                <Button variant='outline-success'>
                                Checkout <i className="fas fa-chevron-circle-right"></i>
                                </Button>     
                            </Link>   
                        </ButtonGroup>
                    </Col>
                    <Col xs={12} md={6}>
                        <Image fluid src="https://i.ibb.co/2YPXNrH/image-removebg-preview-1.png" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PlaceOrder;