import React from 'react';
import { Container, Row , Col, Card } from 'react-bootstrap';
import useServices from '../../hooks/useServices';

const Doctors = () => {
    const db = useServices();
    const doctors = db.doctors || [];
    
    return (
        <div>
            <Container>
                <Row>
                    {
                        doctors.map(doctor =><Col 
                            key={doctor.dId}
                            xs={12} md={6} lg={3}
                            className="my-2"
                            >
                            <Card className="h-100">
                                <Card.Img variant="top" src={doctor.dImg} />
                                <div className="text-center">
                                    <Card.Body>
                                        <Card.Title>{doctor.dName} </Card.Title>
                                        <Card.Text>
                                        {doctor.section} 
                                        </Card.Text>
                                    </Card.Body>
                                </div>
                            </Card>
                        </Col>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Doctors;