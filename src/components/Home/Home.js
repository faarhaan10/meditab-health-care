import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';

const Home = () => {
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
            <div className="">
                <Container>
                    <h2>Explore Our Caring 	&#38; Premium <br />Medical Services</h2>
                    <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                    <h1>here is font awesome<i class="fas fa-user"></i></h1>
                </Container>
            </div>
        </div>
    );
};

export default Home;