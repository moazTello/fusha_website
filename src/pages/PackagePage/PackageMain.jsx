import React from 'react'
import './PackageMain.css';
import Footer from '../../components/Layout/Footer';
import Package1 from './Package1/Package1';
import Homesec6 from '../HomePage/Home_sec_6/Homesec6';
import Homesec2 from '../HomePage/Home_sec_2/Homesec2';
import Homesec4 from '../HomePage/Home_sec_4/Homesec4';
const PackageMain = () => {
  return (
    <div className='Packages_main'>
        <Package1/>
        <Homesec6/>
        <Homesec2/>
        <Homesec4/>
        <Footer/>
    </div>
  )
}

export default PackageMain