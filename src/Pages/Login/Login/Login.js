import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Login = () => {


    return (
        <div className='container w-50 mx-auto'>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Your Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>


                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </div>
    );
};

export default Login;