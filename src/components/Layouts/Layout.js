import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

const Layout = () => {
  const location = useLocation();
  const hideNavBarAndSidebar = location.pathname === '/login';

  return (
    <div>
      {!hideNavBarAndSidebar && (
        <>
          <NavBar />
          <Sidebar />
        </>
      )}
      <Outlet />
    </div>
  );
};

export default Layout;