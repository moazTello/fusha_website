import React from 'react';
import { Outlet } from 'react-router-dom';
import './Navbar.css';
import Navbar from './Navbar';
// import Footer from './Footer';
import EmailNav from './EmailNav';

const Layout = () => {
  return (
    <div>
        <EmailNav/>
        <Navbar/>
        <Outlet/>
        {/* <Footer/> */}
    </div>
  )
}

export default Layout