import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import fakeAuth from '../utils/fakeAuth';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [correctCredentials, setCorrectCredentials] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const login = (e) => {
    e.preventDefault(); // Prevent default form submission
    setCorrectCredentials(null);
    setIsLoading(true);

    setTimeout(() => {
      if (username === 'miwa' && password === '1234') {
        fakeAuth.signIn(() => {
          setCorrectCredentials(true);
          navigate('/xssattack');
        });
      } else {
        setCorrectCredentials(false);
      }
      setIsLoading(false);
    }, 3000);
  };

  return (
    <div>
      <h2>Login 🔐</h2>
      <Form className='form-container' onSubmit={login}>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label className='left-label'>Username</Form.Label>
          <Form.Control 
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className='left-label'>Password</Form.Label>
          <Form.Control 
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      {/* Error message for incorrect credentials */}
      {correctCredentials === false && <div role="alert" className="ml-1 mt-4 w-52 alert alert-error">
        <span className="text-xs text-center">Wrong username or password, try again!</span>
      </div>}
      {/* Warning message for protected route access */}
      {location.state && location.state.protectedRoute && <div role="alert" className="ml-1 mt-4 w-52 alert alert-warning">
        <span className="text-xs"> Please login first.</span>
      </div>}
      {/* Loading spinner */}
      {isLoading && <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>}
    </div>
  );
};

export default Login;
