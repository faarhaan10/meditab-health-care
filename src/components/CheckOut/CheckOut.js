import React from 'react';
import { Container, Image } from 'react-bootstrap';

const CheckOut = () => {
    return (
        <Container>
            <div className="d-flex justify-content-center align-items-center">
                <div className="my-2">
                    <h2 className="text-center">Thanks for Purchasing our service</h2>
                    <Image src="https://lh3.googleusercontent.com/proxy/aGxya_Q7HffcDuFmYCidUkk9hg6YPxxC3ZCUpPSySi5RnwyZyt6JCjxeT1XJQKj-L2580Didy69dl_Q_715YjUxBsnrL0pOalqAPOxOlLIvk-QvT6DpxYpfyhrFiFM5tgj5dl46K6ITlo_dl6F1-qsqJjSQOl9H3FDlcOTA43MovhnQKvb_U_Lql3N0dKh3VMf670qRRwWsZh8yzBv38LYAj82TUB10Z7Mc"/>
                    <h3 className="text-center">Stay Connected, Stay Safe!</h3>
                </div>
            </div>
        </Container>
    );
};

export default CheckOut;