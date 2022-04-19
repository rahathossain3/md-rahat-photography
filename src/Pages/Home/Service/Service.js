import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Service.css'


const Service = ({ service }) => {
    const { name, img, price, details } = service;

    return (

        <Card className='service-card'>
            <Card.Img className='card-img w-100' variant="top" src={img} />
            <Card.Body>
                <Card.Title> <h3 className='card-title'>{name}</h3></Card.Title>
                <Card.Text className='card-info'>
                    {details}
                </Card.Text>

            </Card.Body>
            <h4 className='package-price'>Package Price:
                <span> {price} </span>
                BDT
            </h4>
            <Card.Footer className=' border-0'>
                <Button className='w-75 checkout' >Checkout</Button>
            </Card.Footer>

        </Card>


    );
};

export default Service;