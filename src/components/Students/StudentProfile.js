// // import React, { useEffect, useState } from "react";
// // import { Link, useParams } from "react-router-dom";
// // import low from '../../assets/android.jpg'
// // import firebase from "../../Firebase";
// // import "./StudentProfile.css";

// // const StudentProfile = () => {
// // const [data, setData] = useState({});
// //     const { id } = useParams();
// //   useEffect(() => {
// //     firebase.child("users").on("value", (snapshot) => {
// //       if (snapshot.val() !== null) {
// //         setData({ ...snapshot.val() });
// //       } else {
// //         setData({});
// //       }
// //       return () => {
// //         setData({});
// //       };
// //     });
// //   }, [id]);
// //   return (
// //     <>
// //       <div className="back">
// //       <div className="container shadow p-3 bg-white rounded">
// //           <div className="left ">
// //               <div className="chang">
// //                  <img
// //                   src={low}
// //                   alt=""
// //                 />
                
// //               </div>
// //             </div>
// //             <div className="row clq">
             
// //                 <div className="form-group">
// //                   <label>Full Name:</label>
// //                 </div> 

// //                 <div className="form-group">
// //                   <label>Email:</label>
// //                 </div>

// //                 <div className="form-group"><label>Role: </label></div>
// //                 <div className="form-group"><label>Department: </label></div>
// //               </div>
// //       </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default StudentProfile;

// // import React, { useEffect, useState } from "react";
// // import { Link, useParams } from "react-router-dom";
// // import low from '../../assets/android.jpg';
// // import firebase from "../../Firebase";
// // import "./StudentProfile.css";

// // const StudentProfile = () => {
// //   const [user, setUser] = useState(null);
// //   const { id } = useParams();

// //   useEffect(() => {
// //     const unsubscribe = firebase.auth().onAuthStateChanged((loggedInUser) => {
// //       if (loggedInUser) {
// //         // User is logged in
// //         const uid = loggedInUser.uid;

// //         firebase
// //           .database()
// //           .ref(`users/${uid}`)
// //           .on("value", (snapshot) => {
// //             if (snapshot.val()) {
// //               setUser(snapshot.val());
// //             } else {
// //               setUser(null);
// //             }
// //           });
// //       } else {
// //         // User is not logged in
// //         setUser(null);
// //       }
// //     });

// //     return () => unsubscribe();
// //   }, []);

// //   return (
// //     <>
// //       <div className="back">
// //         <div className="container shadow p-3 bg-white rounded">
// //           <div className="left ">
// //             <div className="chang">
// //               <img src={low} alt="" />
// //             </div>
// //           </div>
// //           <div className="row clq">
// //             <div className="form-group">
// //               <label>Full Name: {user && user.fullName}</label>
// //             </div>

// //             <div className="form-group">
// //               <label>Email: {user && user.email}</label>
// //             </div>

// //             <div className="form-group">
// //               <label>Role: {user && user.role}</label>
// //             </div>

// //             <div className="form-group">
// //               <label>Department: {user && user.department}</label>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default StudentProfile;

// // import { useEffect, useState } from "react";
// // import { Link, useParams } from "react-router-dom";
// // import low from '../../assets/android.jpg';
// // import { database } from "../../Firebase";
// // import "./StudentProfile.css";

// // const StudentProfile = () => {
// //   const [user, setUser] = useState(null);
// //   const { id } = useParams();

// //   useEffect(() => {
// //     const unsubscribe = database.ref(`users/${id}`).on("value", (snapshot) => {
// //       if (snapshot.exists()) {
// //         setUser(snapshot.val());
// //       } else {
// //         setUser(null);
// //       }
// //     });

// //     return () => unsubscribe();
// //   }, [id]);

// //   return (
// //     <>
// //       <div className="back">
// //         <div className="container shadow p-3 bg-white rounded">
// //           <div className="left ">
// //             <div className="chang">
// //               <img src={low} alt="" />
// //             </div>
// //           </div>
// //           <div className="row clq">
// //             <div className="form-group">
// //               <label>Full Name: {user && user.fullName}</label>
// //             </div>

// //             <div className="form-group">
// //               <label>Email: {user && user.email}</label>
// //             </div>

// //             <div className="form-group">
// //               <label>Role: {user && user.role}</label>
// //             </div>

// //             <div className="form-group">
// //               <label>Department: {user && user.department}</label>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default StudentProfile;
// // import React, { useEffect, useState } from "react";
// // import { Link, useParams } from "react-router-dom";
// // import low from '../../assets/android.jpg';
// // import { database } from "../../Firebase";
// // import "./StudentProfile.css";

// // const StudentProfile = () => {
// //   const [user, setUser] = useState(null);
// //   const { id } = useParams();

// //   useEffect(() => {
// //     const fetchUser = async () => {
// //       try {
// //         const snapshot = await database.ref(`users/${id}`).get();
// //         if (snapshot.exists()) {
// //           setUser(snapshot.val());
// //         } else {
// //           setUser(null);
// //         }
// //       } catch (error) {
// //         console.error(error);
// //       }
// //     };

// //     fetchUser();
// //   }, [id]);

// //   return (
// //     <>
// //       <div className="back">
// //         <div className="container shadow p-3 bg-white rounded">
// //           <div className="left">
// //             <div className="chang">
// //               <img src={low} alt="" />
// //             </div>
// //           </div>
// //           <div className="row clq">
// //             <div className="form-group">
// //               <label>Full Name: {user && user.fullName}</label>
// //             </div>

// //             <div className="form-group">
// //               <label>Email: {user && user.email}</label>
// //             </div>

// //             <div className="form-group">
// //               <label>Role: {user && user.role}</label>
// //             </div>

// //             <div className="form-group">
// //               <label>Department: {user && user.department}</label>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default StudentProfile;
// import React, { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import low from '../../assets/android.jpg';
// import { database } from "../../Firebase";
// import "./StudentProfile.css";

// const StudentProfile = () => {
//   const [user, setUser] = useState(null);
//   const { id } = useParams();

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const snapshot = await database.ref(`users/${id}`).once("value");
//         if (snapshot.exists()) {
//           setUser(snapshot.val());
//         } else {
//           setUser(null);
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchUser();
//   }, [id]);

//   return (
//     <>
//       <div className="back">
//         <div className="container shadow p-3 bg-white rounded">
//           <div className="left">
//             <div className="chang">
//               <img src={low} alt="" />
//             </div>
//           </div>
//           <div className="row clq">
//             <div className="form-group">
//               <label>Full Name: {user && user.fullName}</label>
//             </div>

//             <div className="form-group">
//               <label>Email: {user && user.email}</label>
//             </div>

//             <div className="form-group">
//               <label>Role: {user && user.role}</label>
//             </div>

//             <div className="form-group">
//               <label>Department: {user && user.department}</label>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default StudentProfile;
import React from 'react'
import logo from '../../assets/android.jpg'

const StudentProfile = () => {
  return (
    <div className='backli'>
     <div className='arround shadow p-3 bg-white rounded'>
     <div className='text-center'>
      <img className="size" src={logo}></img>
     </div>
     <div className='names'>
      <div>
      <div><label>Full Name: </label></div>
      <div><label>Email:</label></div>
      <div><label>Department:</label></div>
      <div><label>Role:</label></div>
      </div>
     </div>
     </div>
    </div>
  )
}

export default StudentProfile