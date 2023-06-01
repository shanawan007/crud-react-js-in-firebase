import "./Sidebar.css";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SchoolIcon from "@mui/icons-material/School";

import { Link } from "react-router-dom";

const Sidebar = () => {
return (
 <div className="contain">

    <div className="center">
      <ul>
        <p className="tile">Dashboard</p>
        
        <p className="title">Users</p>
        <Link to="/teacher" style={{ textDecoration: "none" }}>
          <li>
            <PersonOutlineIcon className="icon" />
            <span>Teacher</span>
          </li>
        </Link>
        <Link to="/student" style={{ textDecoration: "none" }}>
          <li>
            <PersonOutlineIcon className="icon" />
            <span>Student</span>
          </li>
          
        </Link>
        <p className="title">Departments</p>
        <Link to="/engineering" style={{ textDecoration: "none" }}>
          <li>
            <SchoolIcon className="icon" />
            <span>Engineering</span>
          </li>
        </Link>
        <Link to="/science" style={{ textDecoration: "none" }}>
          <li>
            <SchoolIcon className="icon" />
            <span>Science</span>
          </li>
          
        </Link>
        <Link to="/it" style={{ textDecoration: "none" }}>
          <li>
            <SchoolIcon className="icon" />
            <span>Information Technology</span>
          </li>
          
        </Link>
        <Link to="/humanities" style={{ textDecoration: "none" }}>
          <li>
            <SchoolIcon className="icon" />
            <span>Humanities</span>
          </li>
          
        </Link>
      </ul>
    
  </div>
 </div>
);
}
export default Sidebar;