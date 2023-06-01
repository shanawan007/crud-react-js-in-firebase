import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home/Home";
import Aboutus from "./components/AboutUs/Aboutus";
import Signup from "./components/Registeration/Registeration";
import Login from "./components/Login/Login";
import { useContext } from "react";
import Profile from "./components/Profile/Profile";
import Engineering from "./components/Departments/Engineering";
import Science from "./components/Departments/Science";
import InformationTechnology from "./components/Departments/InformationTechnology";
import Humanities from "./components/Departments/Humanities";
import Sidebar from "./components/Sidebar/Sidebar";
import Student from "./components/Students/Students";
import Teacher from "./components/Teacher/Teacher";
import Navbar from './components/Navbar/Navbar'
import { AuthContext } from './components/Auth/AuthContext';
import StudentProfile from "./components/Students/StudentProfile";
import Layout from "./components/Layouts/Layout";
import TeacherProfile from "./components/Teacher/TeacherProfile";

function App() {
  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  const RequireAuthForLogin = ({ children }) => {
    return !currentUser ? children : <Navigate to="/" />;
  };

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={<RequireAuth><Home /></RequireAuth>}
            />
            <Route
              path="/aboutus"
              element={<RequireAuth><Aboutus /></RequireAuth>}
            />
            <Route
              path="/profile"
              element={<RequireAuth><Profile /></RequireAuth>}
            />
            <Route
              path="/it"
              element={<RequireAuth><InformationTechnology /></RequireAuth>}
            />
            <Route
              path="/science"
              element={<RequireAuth><Science /></RequireAuth>}
            />
            <Route
              path="/humanities"
              element={<RequireAuth><Humanities /></RequireAuth>}
            />
            <Route
              path="/engineering"
              element={<RequireAuth><Engineering /></RequireAuth>}
            />
            <Route
              path="/teacher"
              element={<RequireAuth><Teacher /></RequireAuth>}
            />
            <Route
              path="/student"
              element={<RequireAuth><Student /></RequireAuth>}
            />
            <Route
              path="/studentProfile"
              element={<RequireAuth><StudentProfile /></RequireAuth>}
            />
          </Route>
          <Route
            path="/signup"
            element={<RequireAuth><Signup /></RequireAuth>}
          />
          <Route
            path="/login"
            element={<RequireAuthForLogin><Login /></RequireAuthForLogin>}
          />
          {/* <Route path='/teacherProfile' element={<RequireAuth><TeacherProfile /></RequireAuth>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;