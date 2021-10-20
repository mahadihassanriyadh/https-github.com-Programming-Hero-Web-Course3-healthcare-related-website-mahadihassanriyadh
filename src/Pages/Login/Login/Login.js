import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import googleImg from '../../../images/icons/google.png';

const Login = () => {
    const { logInUsingGoogle, logInWithEmailAndPassword, user, error } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [text, setText] = useState('');

    const captureEmail = (e) => {
        setEmail(e.target.value);
    }
    const capturePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleLogin = (e) => {
        e.preventDefault();
        if (!user.email) {
            logInWithEmailAndPassword(email, password);
        }
        else {
            setText("Please logout before trying to login.")
        }
    }

    return (
        <div className="d-flex justify-content-center">
            <Container className="m-5">
                <h2>Please Login</h2>
                <Form>
                    <Form.Text className="fs-4 text-danger">
                        {text}
                    </Form.Text>
                    <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={captureEmail} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={capturePassword} type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Text className="text-muted">
                        Don't have an account? <Link to="./register">Create an Account</Link>
                    </Form.Text>
                    <br />
                    <br />
                    <p className="fw-bold text-danger">{error}</p>
                    <Button onClick={handleLogin} variant="dark" type="submit">
                        Login
                    </Button>
                </Form>
                <br />
                <Button onClick={logInUsingGoogle} variant="light"><img className="img-fluid" src={googleImg} alt="" /> Login With Google</Button>
            </Container>
        </div>
    );
};

export default Login;