import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import "firebase/compat/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import './Registeration.css';

function Signup() {
  const [newData, setNewData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [nameValid, setNameValid] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordValid, setPasswordValid] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [alreadyExistData, setAlreadyExistData] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();
  const namePattern = /^[a-zA-Z]+(?:[' -][a-zA-Z]+)*$/;
  const emailPattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const checkNameFormat = (name) => {
    if (name) console.log("odsajnfoasaocsnao");
    return namePattern.test(name);
  };
  const checkEmailFormat = (email) => {
    console.log("odsajnfoasaocsnao");
    return emailPattern.test(email);
  };
  const handleOnSignUpChange = (event) => {
    const { name, value } = event.target;
    setNewData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (name === "fullName") {
      setNameValid(namePattern.test(value));
    }
    if (name === "password") {
      if (!value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)) {
        setPasswordValid(false);
        setPasswordError(
          "Password contain only 8 characters, uppercase letter, lowercase letter, number."
        );
      } else {
        setPasswordValid(true);
        setPasswordError("");
        if (newData.confirmPassword && newData.confirmPassword !== value) {
          setPasswordMatch(false);
          setPasswordError("Passwords do not match");
        } else {
          setPasswordMatch(true);
          setPasswordError("");
        }
      }
    } else if (name === "confirmPassword") {
      if (value !== newData.password) {
        setPasswordMatch(false);
        setPasswordError("Passwords do not match");
      } else {
        setPasswordMatch(true);
        setPasswordError("");
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!passwordValid) {
      setPasswordError(
        `Password should contain at least 8 characters, including uppercase and lowercase letters, and a number.`
      );
      return;
    }
    setEmailValid(false);
    try {
      const res = await createUserWithEmailAndPassword(auth, newData.email, newData.password);
      const user = res.user;
      alert("User Added Successfully");
      navigate("/");
  
    } catch (err) {
      console.log(err);
    }
  };
      
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center vh-100 cl"
        
      >
        <div className="login">
          <Form onSubmit={handleSubmit}>
            <h1 className="mt-5 text-light">Registeration</h1>
            {/* <Form.Group controlId="formBasicFullName">
              <Form.Label className="text-light">Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Full Name"
                name="name"
                value={newData.fullName}
                onChange={(e) => {
                  setNewData({ fullName: e.target.value });
                  setNameValid(namePattern.test(e.target.value));
                  const errorCheck = checkNameFormat(e.target.value);
                  console.log(errorCheck);
                  if (!errorCheck) {
                    setNameValid(true);
                  } else {
                    setNameValid(false);
                  }
                }}
                required
                style={{ width: "600px" }}
              />
            </Form.Group>
            <div>
              {nameValid && (
                <div className="text-danger">Please enter a valid name.</div>
              )}
            </div>
             */}
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="text-light">Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Email"
                name="email"
                value={newData.email}
                onChange={(e) => {
                  setNewData({ email: e.target.value });
                  setEmailValid(emailPattern.test(e.target.value));
                  const errorCheck = checkEmailFormat(e.target.value);
                  console.log(errorCheck);
                  if (!errorCheck) {
                    setEmailValid(true);
                  } else {
                    setEmailValid(false);
                  }
                }}
                required
              />
            </Form.Group>
            <div>
              {emailError && <div className="text-danger">{emailError}</div>}
              {emailValid && (
                <div className="text-danger">
                  Please enter a valid email address.
                </div>
              )}
            </div>
            <Form.Group controlId="formBasicPassword">
              <Form.Label className="text-light">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                name="password"
                value={newData.password}
                onChange={handleOnSignUpChange}
                required
              />
            </Form.Group>
            <div>
              {passwordError && (
                <div className="text-danger">{passwordError}</div>
              )}
            </div>
            {/* <Form.Group controlId="formBasicConfirmPassword">
              <Form.Label className="text-light">Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Confirm Password"
                name="confirmPassword"
                value={newData.confirmPassword}
                onChange={handleOnSignUpChange}
                required
                style={{ width: "600px" }}
              />
            </Form.Group> */}
            <Button classNa1me="mt-4" type="submit">
              Submit form
            </Button>
            <p className="text-light m-3">
              Already Registered?
              <Link className="btn btn-primary " to="/login">
                Login
              </Link>
            </p>
          </Form>
        </div>
      </div>
    </>
  );
}
export default Signup;