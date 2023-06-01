// import React, { useEffect, useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import firebase from "../../Firebase";
// import "../Students/Student.css";
// import UpdateModal from "../Modal/UpdateModal";
// import './Teacher.css'
// const TeacherProfile = () => {
//   const [data, setData] = useState({});
//   const [showing, setShowing] = useState(false);
//   const [update, setUpdate] = useState(false);
//   const handleCloseUpdate = () => setUpdate(false);
//   const handleClosing = () => setShowing(false);

//   const [updatedData, setUpdatedData] = useState({
//     img: "",
//     email: "",
//     fullName: "",
//     role:"",
//     id: "",
//     department:""
//   });

//   const { imgae, fullName, email, role, department} = updatedData;
//   const [deleteEmployeeId, setDeleteEmployeeId] = useState({});
//   const { id } = useParams();
//   useEffect(() => {
//     firebase.child("users").on("value", (snapshot) => {
//       if (snapshot.val() !== null) {
//         setData({ ...snapshot.val() });
//       } else {
//         setData({});
//       }
//       return () => {
//         setData({});
//       };
//     });
//   }, [id]);

//   const handleUpdateOnChange = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     setUpdatedData({ ...updatedData, [name]: value });
//   };

//   const handleShowUpdate = (id) => {
//     setUpdate(true);
//     setUpdatedData({ ...data[id], id,role: data[id].role, img: data[id].img, department: data[id].department});
//   };

//   const handleUpdate = (e) => {
//     e.preventDefault();
//     firebase
//       .child(`users/${updatedData.id}`)
//       .set({
//         fullName: updatedData.fullName,
//         email: updatedData.email,
//         role: updatedData.role,
//         department: updatedData.department,
//         img:updatedData.img,
//       })
//       .then(() => {
//         console.log("Data updated successfully.");
//         setUpdate(false);
//       })
//       .catch((error) => {
//         console.error("Error updating data:", error);
//       });
//   };

//   const handleDeleteClick = (id) => {
//     console.log(id);
//     firebase.child(`users/${id}`).remove();
//   };
//   const Teacher = 
//     Object.keys(data).filter(
//       (id) => data[id].role === "Teacher"
//     );

//   return (
//     <>
//     <div className="containsc">
//     <div className="card bound">
//           <h2 className="m-4">Users List</h2>
//           <div className="card-title mt-5">
//           </div>
//           <div className="d-flex justify-content-between ps-2 hello">
//             <div>
//               <Link className="btn btn-outline-success"to="/Profile">Add user (+)</Link>
//             </div>
//           </div>
//           <div className="card-body">
//             <table className="table table-bordered">
//               <thead className="thead-dark">
//                 <tr>
//                   <th>Id</th>
//                   <th>Image</th>
//                   <th>Full Name</th>
//                   <th>Email</th>
//                   <th>Role</th>
//                   <th>Department</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {Teacher.map((id, index) => {
//                   return (
//                     <tr key={id}>
//                       <th>{index + 1}</th>
//                       <img className="teacher"src={data[id].img} alt="Profile"/>
//                       <td>{data[id].fullName}</td>
//                       <td>{data[id].email}</td>
//                       <td>{data[id].role}</td>
//                       <td>{data[id].department}</td>
//                       <td>
                       
//                         <button
//                           onClick={() => handleShowUpdate(id)}
//                           className="btn btn-outline-warning me-3"
//                         >
//                           Update
//                         </button>
//                         <button
//                           onClick={() => handleDeleteClick(id)}
//                           className="btn btn-outline-danger me-3"
//                         >
//                           Delete
//                         </button>
//                       </td>
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>
//             {/* <Modal show={showing} onHide={handleClosing}>
//               <Modal.Header closeButton>
//                 <Modal.Title>Confirm Deletion</Modal.Title>
//               </Modal.Header>
//               <Modal.Body>
//                 Are you sure you want to delete this employee?
//               </Modal.Body>
//               <Modal.Footer>
//                 <button className="btn btn-secondary" onClick={handleClosing}>
//                   Cancel
//                 </button>
//                 <button
//                   className="btn btn-danger"
//                   onClick={handleConfirmDelete}
//                 >
//                   Delete
//                 </button>
//               </Modal.Footer>
//             </Modal> */}
//             <UpdateModal
//               show={update}
//               handleClose={handleCloseUpdate}
//               handleUpdate={handleUpdate}
//               updatedData={updatedData}
//               handleUpdateOnChange={handleUpdateOnChange}
//             />
//           </div>
//           </div>
//         </div>
//     </>
//   );
// };

// export default TeacherProfile;
