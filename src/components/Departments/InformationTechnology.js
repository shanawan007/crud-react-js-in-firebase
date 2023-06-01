import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import firebase from "../../Firebase";
import "../Students/Student.css";
import UI from "../../assets/bg.jpg.webp";
import './Department.css';

const InformationTechnology = () => {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    firebase.child("users").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setData({ ...snapshot.val() });
      } else {
        setData({});
      }
      return () => {
        setData({});
      };
    });
  }, [id]);
  const Students = Object.keys(data).filter(
    (id) => data[id].department === "Information Technology"&& data[id].role === 'Student'
  );
  return (
    <>
      <div
        className="contains"
       
      >
        <div className="card bound">
          <h2 className="m-4">IT Students</h2>
          <div className="card-title mt-5"></div>
          <div className="d-flex justify-content-between ps-2 hello"></div>
          <div className="card-body">
            <table className="table table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th>Id</th>
                  <th>Image</th>
                  <th>Full Name</th>
                  <th>Email</th>
                  <th>Department</th>
                </tr>
              </thead>
              <tbody>
                {Students.map((id, index) => {
                  return (
                    <tr key={id}>
                      <th>{index + 1}</th>
                      <td>
                        <img className="imgs" src={data[id].img} alt="Profile" />
                      </td>
                      <td>{data[id].fullName}</td>
                      <td>{data[id].email}</td>
                      <td>{data[id].department}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default InformationTechnology;