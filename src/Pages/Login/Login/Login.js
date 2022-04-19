import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {


    return (
        <div className='mt-5 mb-5 give-info mx-auto'>
            <h2 className='text-center text-primary my-4'>Please Login</h2>
            <hr />
            <Form >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Your Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="primary" type="login">
                    Login
                </Button>
            </Form>

            <p> Have Not any Account? <Link to='/signup' className='btn btn-link text-decoration-none'>Sign Up</Link> </p>



        </div>
    );
};

export default Login;