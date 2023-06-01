import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Nav, NavDropdown } from "react-bootstrap";
import logo from "../../assets/logo.webp";
import './Nav.css'

function Navbar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <>
      <div className="navbar">
        <div className="profile-section boxing">
          <div className="dropdown">
            <Link
              className="rounded-circle"
              to="/"
              role="button"
              id="dropdownUser"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <div className="avatar avatar-md">
                <img alt="avatar" src={logo} className="rounded-circle" />
              </div>
            </Link>
          </div>
        </div>
        <div className="Link-div">
          <Nav className="nav">
            <Link className="nav-links text-light Links" to="/">
              Home
            </Link>
            <Link className="nav-links text-light Links" to="/aboutus">
              About Us
            </Link>
            <Link className="nav-links text-light Links" to="/studentProfile">
              Profile
            </Link>
          </Nav>
        </div>
        {/* <div className="profile-section left-sidebar">
          <div className="dropdown dropright-lg">
            <Link
              className="rounded-circle"
              href="#"
              role="button"
              id="dropdownUser"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <div className="avatar avatar-md">
              {Object.keys(data).map((id) => {
                    return (
                  <img
                    key={id}
                    src={data[id].img}
                    alt="Profile"
                    className="rounded-circle"
                  />
                    )})}
              </div>
            </Link>
            <div
              className={`dropdown-menu pb-2 ${sidebar ? "show" : ""}`}
              aria-labelledby="dropdownUser"
            >
              <div className="dropdown-item">
                <div className="d-flex">
                  <div className="ml-3 lh-1">
                  {Object.keys(data).map((id) => {
                    return (
                 <h5>{data[id].fullName}</h5>
                    )})}
                  </div>
                </div>
              </div>
              <div className="dropdown-divider"></div>
              <button className="dropdown-item" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
        </div> */}
  <div className="blank">
    <button
      className="btn btn-outline-light"
      onClick={handleLogout}
      style={{ color: "rgb(211, 211, 250)" }}
    >
      Logout
    </button>
  </div>
      </div>
    </>
  );
}

export default Navbar;
