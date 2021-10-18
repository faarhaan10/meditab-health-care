import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import useServices from '../../../hooks/useServices';

const Gallery = () => {
    const db = useServices();
    const photos = db.gallery || [];
    
    return (
        <div id="gallery" className="pt-5">
            <Container>
            <h1 className="text-center">Our Gallery</h1>
            <hr />
                <Row>
                    {
                        photos.map(photo => <Col
                            key={photo.imgId}
                            xs={6} md={4}
                        >
                                <div className="py-2">
                                    <Image fluid src={photo.thumb} />
                                </div>
                        </Col>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Gallery;