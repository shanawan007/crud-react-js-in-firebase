import React from "react";
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import firebase from "../../Firebase";

function AddModal() {
  const [alreadyExistData, setAlreadyExistData] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [nameValid, setNameValid] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneValid, setPhoneValid] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [show, setShow] = useState(false);
  const [employeeData, setEmployeeDataChange] = useState({});
  const [newData, setNewData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const handleShow = () => {
    setShow(true);
    setEmailValid(true);
    setAlreadyExistData(false);
    setPhoneValid(true);
    setPhoneError("");
  };

  const handleClose = () => setShow(false);
  const emailPattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const namePattern = /^[a-zA-Z]+(?:[' -][a-zA-Z]+)*$/;
  const phonePattern = /^\d{11}$/;
  const { name, email, phone } = newData;
  useEffect(() => {
    firebase.child("users").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setEmployeeDataChange({ ...snapshot.val() });
      } else {
        setEmployeeDataChange({});
      }
      return () => {
        setEmployeeDataChange({});
      };
    });
  }, [newData]);

  const checkDuplicateEmail = (email) => {
    const duplicate = Object.values(employeeData).some(
      (employee) => employee.email === email
    );
    if (duplicate) {
      setEmailError("This email already exists");
    } else {
      setEmailError("");
      setAlreadyExistData(false);
    }
  };

  const checkNameFormat = (name) => {
    console.log("odsajnfoasaocsnao");
    return namePattern.test(name);
  };

  const checkPhoneFormat = (phone) => {
    return phonePattern.test(phone);
  };

  const isFormValid = () => {
    return nameValid && emailValid && phoneValid && !alreadyExistData;
  };

  const addItem = async () => {
    const duplicate = Object.values(employeeData).some(
      (employee) => employee.email === newData?.email
    );
    setEmailValid(false);
    if (!duplicate) {
      try {
        const response = await firebase.child("users").push(newData, (err) => {
          if (err) {
            console.log(err);
          } else {
            setNewData({
              name: "",
              email: "",
              phone: "",
            });
            handleClose(true);
          }
        });
        const data = await response.json();
        console.log("Success:", data);
        handleClose();
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      setAlreadyExistData(true);
      setEmailValid(false);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewData((prevState) => ({ ...prevState, [name]: value }));
    switch (name) {
      case "name":
        setNameValid(checkNameFormat(value));
        break;
      case "email":
        checkDuplicateEmail(value);
        setEmailValid(emailPattern.test(value));
        break;
      case "phone":
        setPhoneValid(checkPhoneFormat(value));
        setPhoneError(
          checkPhoneFormat(value) ? "" : "Please enter a valid phone number"
        );
        break;
      default:
        break;
    }
  };

  return (
    <>
      <button onClick={handleShow} className="btn btn-success">
        Add (+)
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                className={`form-control ${
                  nameValid === "" ? "" : nameValid ? "is-valid" : "is-invalid"
                }`}
                id="name"
                name="name"
                placeholder="Enter name"
                value={newData.name}
                onChange={handleInputChange}
                required
              />
              <div className="invalid-feedback">Please enter a valid name.</div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className={`form-control ${
                  emailValid ? "is-valid" : "is-invalid"
                }`}
                id="email"
                name="email"
                placeholder="Enter email"
                value={newData.email}
                onChange={handleInputChange}
                required
              />
              <div className="invalid-feedback">{emailError}</div>
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                className={`form-control ${
                  phoneValid ? "is-valid" : "is-invalid"
                }`}
                id="phone"
                name="phone"
                placeholder="Enter phone number"
                value={newData.phone}
                onChange={handleInputChange}
                required
              />
              <div className="invalid-feedback">{phoneError}</div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={handleClose}>
            Close
          </button>
          <button
            className="btn btn-primary"
            onClick={addItem}
            disabled={!isFormValid()}
          >
            Add Employee
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default AddModal;
