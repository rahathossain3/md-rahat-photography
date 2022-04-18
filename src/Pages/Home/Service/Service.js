import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Service.css'


const Service = ({ service }) => {
    const { name, img, price, details } = service;

    return (
        <div>

            <Card className='service-card'>
                <Card.Img className='card-img' variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text className='card-info'>
                        {details}
                    </Card.Text>
                    <span className='package-price'>Package Price: {price}</span>
                </Card.Body>
                <Card.Footer className=' bg-white border-0'>
                    <Button className='w-75' >Checkout</Button>
                </Card.Footer>

            </Card>



        </div>
    );
};

export default Service;