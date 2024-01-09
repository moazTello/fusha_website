import React from 'react';
import './Navbar.css';
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
const EmailNav = () => {
  return (
    <div className='EmailNav'>
        <BsWhatsapp size={20} color='rgb(84,242,112)' style={{marginTop:'10px'}}/>
        <p style={{marginTop:'13px',marginLeft:'10px',color:'white'}}>+971 50 755 0412</p>
        <MdOutlineMail size={20} color='rgb(255,255,255)' style={{marginTop:'10px',marginLeft:'20px'}}/>
        <p style={{marginTop:'13px',marginLeft:'10px',color:'white',marginRight:'20px'}}>Fusha.Travel@gmail.com</p>
    </div>
  )
}

export default EmailNav