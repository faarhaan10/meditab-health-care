import React from 'react';
import { Col, Container, Image, Row , Button} from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useServices from '../../hooks/useServices';

const Service = () => {
    const {serviceID} = useParams();
    
// get all data first 
    const db = useServices();
    const allServices = db.services || [];
//find the specific service id using params
    const selectedService = allServices.find(service => service.id === parseInt(serviceID));
    
    
    return (
        <div>
            <Container className='py-5'>
                <Row className='my-5 align-items-center'>
                    <Col xs={12} md={6} className="text-center">
                        <Image fluid src={selectedService?.icon} />
                    </Col>
                    <Col xs={12} md={6}>
                        <h2>{selectedService?.serviceName}</h2>
                        <p>{selectedService?.decription}</p>
                        <Link to="/pricing">
                                <Button>See Pricing</Button>
                        </Link>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default Service;