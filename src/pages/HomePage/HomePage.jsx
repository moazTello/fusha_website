import React from 'react';
import './HomePage.css';
import Homesec1 from './Home_sec_1/Homesec1';
import Homesec2 from './Home_sec_2/Homesec2';
import Homesec3 from './Home_sec_3/Homesec3';
import Homesec4 from './Home_sec_4/Homesec4';
import Homesec5 from './Home_sec_5/Homesec5';
import Homesec6 from './Home_sec_6/Homesec6';
import Homesec7 from './Home_sec_7/Homesec7';
import Footer from '../../components/Layout/Footer';

const HomePage = () => {
  return (
    <div className='Home_main'>
        <Homesec1/>
        <Homesec2/>
        <Homesec3/>
        <Homesec4/>
        <Homesec5/>
        <Homesec6/>
        <Homesec7/>
        <Footer/>
    </div>
  )
}

export default HomePage