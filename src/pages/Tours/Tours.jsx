import React from 'react';
import Footer from '../../components/Layout/Footer';
import Tours1 from './Tours1/Tours1';
import './Tours.css';
import Homesec2 from '../HomePage/Home_sec_2/Homesec2';
import Homesec6 from '../HomePage/Home_sec_6/Homesec6';
import Homesec4 from '../HomePage/Home_sec_4/Homesec4';
const Tours = () => {
  return (
    <div className='Tours_main'>
        <Tours1/>
        <Homesec2/>
        <Homesec6/>
        <Homesec4/>
        <Footer/>
    </div>
  )
}

export default Tours