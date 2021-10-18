import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useServices from '../../hooks/useServices';

const Service = () => {
    const {serviceID} = useParams();
    // console.log(typeof parseInt(serviceID))

    const db = useServices();
    const allServices = db.services || [];
    const selectedService = allServices.find(service => service.id === parseInt(serviceID));
    // const {serviceName,decription,icon} = selectedService;
    
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
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default Service;