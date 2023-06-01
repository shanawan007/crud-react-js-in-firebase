import { useContext, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase";
import { Button, Form } from "react-bootstrap";
import {Link, useNavigate } from "react-router-dom";
import './Login.css'
import { AuthContext } from '../Auth/AuthContext';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const navigate = useNavigate()

  const {dispatch}= useContext( AuthContext)
  const handleLogin = (e) => {
    e.preventDefault();
     if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user })
        console.log(user);
        navigate("/")
      })
      .catch((error) => {
        alert("incorrect email or password")
        setError(true)
      });
  };

  return (
    <>
            <div
        className="d-flex justify-content-center align-items-center vh-100 ds"
      >
        <Form onSubmit={handleLogin}>
          <h1 className="text-light m-5">Login Page</h1>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="text-light">Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter an email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label className="text-light">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter a password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
          <Button type="submit" className="m-2" variant="primary">
            Login
          </Button>
          <p className="text-light">
            Are you want to become a member?
            <Link
              to="/signup"
              className="btn btn-success m-3"
              aria-current="page"
            >
              Signup
            </Link>
          </p>
        </Form>
      </div>
    </>
  );
};
export default Login;