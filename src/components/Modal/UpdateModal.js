import React from "react";
import { Modal } from "react-bootstrap";

const UpdateModal = ({ show, handleClose, handleUpdate, updatedData, handleUpdateOnChange }) => {
  const { img, fullName, email, role, department } = updatedData;

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Update Employee Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="form-row m-3">
        <div className="form-group">
            <label htmlFor="naming" className="m-1">
              Image:{" "}
            </label>
            <img src={img} alt="Profile"/>
          </div>
          <div className="form-group">
            <label htmlFor="naming" className="m-1">
              Full Name:{" "}
            </label>
            <input
              type="text"
              name="name"
              value={fullName}
              onChange={handleUpdateOnChange}
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="inputs" className="p-1">
              Email:{" "}
            </label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={handleUpdateOnChange}
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="role" className="p-1">
              Role:
            </label>
            <input
              type="text"
              name="role"
              id="role"
              value={role}
              onChange={handleUpdateOnChange}
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="department" className="p-1">
              Department:
            </label>
            <input
              type="text"
              name="department"
              id="department"
              value={department}
              onChange={handleUpdateOnChange}
            />
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary text-center"
          onClick={handleUpdate}
        >
          Update
        </button>
      </Modal.Body>
    </Modal>
  );
};

export default UpdateModal;